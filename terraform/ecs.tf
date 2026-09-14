# ECR Repository for the Spring Boot Backend
resource "aws_ecr_repository" "backend" {
  name                 = "cloud-resume-backend"
  image_tag_mutability = "MUTABLE"
  force_delete         = true
}

# ECS Cluster
resource "aws_ecs_cluster" "main" {
  name = "cloud-resume-cluster"
}

# ECS Task Execution Role (Allows ECS to pull images and write logs)
resource "aws_iam_role" "ecs_task_execution_role" {
  name = "ecs-task-execution-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action    = "sts:AssumeRole"
      Effect    = "Allow"
      Principal = { Service = "ecs-tasks.amazonaws.com" }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_role_policy" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# ECS Task Role (Allows the Spring Boot App to access DynamoDB)
resource "aws_iam_role" "ecs_task_role" {
  name = "ecs-task-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action    = "sts:AssumeRole"
      Effect    = "Allow"
      Principal = { Service = "ecs-tasks.amazonaws.com" }
    }]
  })
}

resource "aws_iam_policy" "dynamodb_access" {
  name = "DynamoDBAccess"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = [
        "dynamodb:UpdateItem",
        "dynamodb:GetItem",
        "dynamodb:PutItem"
      ]
      Effect   = "Allow"
      Resource = aws_dynamodb_table.visitor_counter.arn
    }]
  })
}

resource "aws_iam_role_policy_attachment" "ecs_task_role_dynamodb" {
  role       = aws_iam_role.ecs_task_role.name
  policy_arn = aws_iam_policy.dynamodb_access.arn
}

# ECS Task Definition (Fargate)
resource "aws_ecs_task_definition" "backend" {
  family                   = "cloud-resume-backend-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn

  container_definitions = jsonencode([{
    name      = "backend-container"
    image     = "${aws_ecr_repository.backend.repository_url}:latest"
    essential = true
    portMappings = [{
      containerPort = 8090
      hostPort      = 8090
      protocol      = "tcp"
    }]
    environment = [
      { name = "AWS_REGION", value = var.aws_region },
      { name = "DYNAMODB_TABLE", value = aws_dynamodb_table.visitor_counter.name }
    ]
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = "/ecs/cloud-resume-backend"
        "awslogs-region"        = var.aws_region
        "awslogs-stream-prefix" = "ecs"
      }
    }
  }])
}

# CloudWatch Log Group for ECS
resource "aws_cloudwatch_log_group" "ecs_backend_logs" {
  name              = "/ecs/cloud-resume-backend"
  retention_in_days = 7
}

# ECS Service
resource "aws_ecs_service" "backend" {
  name            = "cloud-resume-backend-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.backend.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = data.aws_subnets.default.ids
    security_groups  = [aws_security_group.ecs_fargate.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.backend.arn
    container_name   = "backend-container"
    container_port   = 8090
  }

  depends_on = [aws_lb_listener.backend]
}
