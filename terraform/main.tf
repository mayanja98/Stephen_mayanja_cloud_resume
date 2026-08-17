# DynamoDB Table for visitor counter
resource "aws_dynamodb_table" "visitor_counter" {
  name           = "visitor-counter"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    Environment = var.environment
    Project     = "CloudResume"
  }
}

# Placeholder for S3 Bucket for Frontend
# resource "aws_s3_bucket" "frontend" { ... }

# Placeholder for EC2 instance for Spring Boot Backend
# resource "aws_instance" "backend" { ... }
