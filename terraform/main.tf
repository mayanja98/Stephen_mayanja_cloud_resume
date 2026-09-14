# DynamoDB Table for visitor counter
resource "aws_dynamodb_table" "visitor_counter" {
  name         = "visitor-counter"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    Environment = var.environment
    Project     = "CloudResume"
  }
}

# AWS Amplify Application for React Frontend
resource "aws_amplify_app" "frontend" {
  name       = "cloud-resume-frontend"
  repository = "https://github.com/mayanja98/Stephen_mayanja_cloud_resume"

  # GitHub personal access token to authorize AWS Amplify
  access_token = var.github_token

  # Build spec instructing Amplify how to build the Vite/React app
  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - cd frontend
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: frontend/dist
        files:
          - '**/*'
      cache:
        paths:
          - frontend/node_modules/**/*
  EOT

  environment_variables = {
    VITE_API_URL = var.api_url
  }
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.frontend.id
  branch_name = "main"

  framework = "React"
  stage     = "PRODUCTION"
}

# Placeholder for EC2 instance for Spring Boot Backend
# resource "aws_instance" "backend" { ... }
