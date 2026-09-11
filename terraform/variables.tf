variable "aws_region" {
  description = "AWS region for resources"
  default     = "us-east-1"
}

variable "environment" {
  description = "Deployment environment"
  default     = "production"
}

variable "github_token" {
  description = "GitHub Personal Access Token for Amplify to access the repository"
  type        = string
  sensitive   = true
}

variable "api_url" {
  description = "The URL of the Spring Boot API (to be passed to the frontend)"
  type        = string
  default     = "http://localhost:8090" # Fallback for now until backend is deployed
}
