terraform {
  required_providers {
    launchdarkly = {
      source  = "launchdarkly/launchdarkly"
      version = "~> 2.0"
    }
  }
  backend "s3" {
    bucket = "bas-staff-picks-tfstate"
    key    = "staff-picks.tfstate"
    region = "eu-west-1"
  }
}

provider "launchdarkly" {
  access_token = var.LAUNCHDARKLY_ACCESS_TOKEN
}

resource "launchdarkly_project" "terraform" {
  key  = var.project
  name = var.project

  tags = [
    "terraform-managed", "bpeters"
  ]

  default_client_side_availability {
    using_environment_id = true
    using_mobile_key     = false
  }
}

resource "launchdarkly_environment" "development" {
  name  = "Development"
  key   = "development"
  color = "7B42BC"
  tags  = ["terraform-managed", "development"]

  project_key = launchdarkly_project.terraform.key
}

resource "launchdarkly_environment" "production" {
  name  = "Production"
  key   = "production"
  color = "ff00ff"
  tags  = ["terraform-managed", "production"]

  project_key = launchdarkly_project.terraform.key
}

resource "launchdarkly_feature_flag" "show_login" {
  project_key = launchdarkly_project.terraform.key
  key         = "show-login"
  name        = "Show login Form"
  description = "This flag controls the login form in the page header"

  variation_type = "boolean"
  variations {
    value       = "true"
    name        = "Show login form"
    description = "Shows the login form on the page header"
  }
  variations {
    value       = "false"
    name        = "Hide the login form"
    description = "Hides the login form on the page header"
  }
  
  defaults {
    on_variation = 0
    off_variation = 1
  }

  tags = [
    "terraform-managed",   
  ]
}

resource "launchdarkly_feature_flag" "show_book_rating" {
  project_key = launchdarkly_project.terraform.key
  key         = "show-book-rating"
  name        = "Show book rating"
  description = "This flag controls the visibility of the book ratings"

  variation_type = "boolean"
  variations {
    value       = "true"
    name        = "Show book rating"
    description = "Show the book rating"
  }
  variations {
    value       = "false"
    name        = "Hide book rating"
    description = "Hide the book rating"
  }
  
  defaults {
    on_variation = 0
    off_variation = 1
  }

  tags = [
    "terraform-managed",   
  ]
}

resource "launchdarkly_feature_flag" "show_buy_now_button" {
  project_key = launchdarkly_project.terraform.key
  key         = "show-buy-now-button"
  name        = "Show buy now button"
  description = "This flag controls the visibility of the buy now button for a book"

  variation_type = "boolean"
  variations {
    value       = "true"
    name        = "Show buy now button"
    description = "Show the buy now button for a book"
  }
  variations {
    value       = "false"
    name        = "Hide buy now button"
    description = "Hide the buy now button for a book"
  }
  
  defaults {
    on_variation = 0
    off_variation = 1
  }

  tags = [
    "terraform-managed",   
  ]
}

resource "launchdarkly_feature_flag" "show_banner" {
  project_key = launchdarkly_project.terraform.key
  key         = "show-banner"
  name        = "Show Banner"
  description = "This flag controls the visibility of the campaign banner"

  variation_type = "boolean"
  variations {
    value       = "true"
    name        = "Show banner"
    description = "Show the campaign banner"
  }
  variations {
    value       = "false"
    name        = "Hide baner"
    description = "Hide the campaign banner"
  }
  
  defaults {
    on_variation = 0
    off_variation = 1
  }

  tags = [
    "terraform-managed",   
  ]
}
