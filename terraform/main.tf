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

  environments {
    key   = "development"
    name  = "Development"
    color = "2DA44E"
    tags  = ["terraform"]
  }
  
  environments {
    key   = "production"
    name  = "Production"
    color = "BE3455"
    tags  = ["terraform"]
    approval_settings {
      can_review_own_request = false
      can_apply_declined_changes = false
      min_num_approvals      = 1
      required_approval_tags = ["approvals-required"]
    }
  }
  
  tags = [
    "terraform", "bpeters"
  ]

  default_client_side_availability {
    using_environment_id = true
    using_mobile_key     = false
  }
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
    "terraform",   
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
    "terraform",   
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
    "terraform",   
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
    name        = "Hide banner"
    description = "Hide the campaign banner"
  }
  
  defaults {
    on_variation = 0
    off_variation = 1
  }

  tags = [
    "terraform",   
  ]
}

resource "launchdarkly_feature_flag" "control_background_color" {
  project_key = launchdarkly_project.terraform.key
  key         = "control-background-color"
  name        = "Control Background Color"
  description = "This flag controls the background color of the navigation bar"

  variation_type = "string"
  variations {
    value       = "#D0417E"
    name        = "Magenta background"
    description = "Shhow the magenta background"
  }
  variations {
    value       = "#000000"
    name        = "Black background"
    description = "Show the black background"
  }
  variations {
    value       = "#58595B"
    name        = "Gray background"
    description = "Show the gray background"
  }
  variations {
    value       = "#405BFF"
    name        = "Blue background"
    description = "Show the blue background"
  }

  defaults {
    on_variation = 0
    off_variation = 1
  }

  tags = [
    "terraform",   
  ]
}

resource "launchdarkly_feature_flag" "enable-api" {
  project_key = launchdarkly_project.terraform.key
  key         = "enable-api"
  name        = "Enable API 1.2"
  description = "This flag controls the backend API 1.2"

  variation_type = "boolean"
  variations {
    value       = "true"
    name        = "Enable API"
    description = "Enables the backend API 1.2"
  }
  variations {
    value       = "false"
    name        = "Disable API"
    description = "Disables the backend API 1.2"
  }
  
  defaults {
    on_variation = 0
    off_variation = 1
  }

  tags = [
    "terraform",   
  ]
}

resource "launchdarkly_metric" "add_to_cart" {
  project_key      = launchdarkly_project.terraform.key
  key              = "add-to-cart"
  name             = "Add to cart"
  description      = "Custom event when a user clicks the add to cart button"
  kind             = "custom"
  event_key        = "add-to-cart"
  is_numeric       = true
  unit             = "qty"
  success_criteria = "HigherThanBaseline"
  tags             = ["terraform"]
}

resource "launchdarkly_metric" "buy_now" {
  project_key      = launchdarkly_project.terraform.key
  key              = "buy-now"
  name             = "Buy now"
  description      = "Custom event when a user clicks the buy now button"
  kind             = "custom"
  event_key        = "buy-now" 
  is_numeric       = true
  unit             = "qty"
  success_criteria = "HigherThanBaseline"
  tags             = ["terraform"]
}
