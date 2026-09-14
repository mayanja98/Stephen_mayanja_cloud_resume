output "frontend_url" {
  value       = "https://${aws_amplify_branch.main.branch_name}.${aws_amplify_app.frontend.default_domain}"
  description = "URL of the deployed Amplify frontend"
}

output "api_url" {
  value       = "http://${aws_lb.backend.dns_name}"
  description = "Public URL of the Backend API Load Balancer"
}

output "github_actions_role_arn" {
  value       = aws_iam_role.github_actions.arn
  description = "The ARN to save in GitHub Secrets as AWS_ROLE_ARN"
}
