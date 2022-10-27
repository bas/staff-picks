output "LaunchDarkly_API_Key" {
  value = launchdarkly_project.terraform.environments[0].api_key
  sensitive = true
}

output "LaunchDarkly_Client_Side_Key" {
  value = launchdarkly_project.terraform.environments[0].client_side_id
  sensitive = true
}