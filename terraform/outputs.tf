output "frontend_url" {
  value       = "https://${aws_amplify_branch.main.branch_name}.${aws_amplify_app.frontend.default_domain}"
  description = "URL of the deployed Amplify frontend"
}

output "api_url" {
  value = "http://api.example.com"
  description = "Placeholder for API URL"
}
