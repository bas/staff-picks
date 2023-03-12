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
  name        = "Show login form"
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
  name        = "Show banner"
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

resource "launchdarkly_feature_flag" "configure_banner" {
  project_key = launchdarkly_project.terraform.key
  key         = "configure-banner"
  name        = "Configure banner"
  description = "This flags configures the banner style and text"

  variation_type = "json"
  variations {
    name  = "Free shipping"
    value = jsonencode({ "variant": "success", "text": "As a premium customer you get unlimited free shipping!" })
  }
  variations {
    name  = "10% discount"
    value = jsonencode({ "variant": "warning", "text": "As a premium customer you get 10% discount on checkout!" })
  }
    variations {
    name  = "3 for 2"
    value = jsonencode({ "variant": "default", "text":"As a premium customer you get 3 for the price of 2!" })
  }
  defaults {
    on_variation = 1
    off_variation = 0
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

resource "launchdarkly_flag_trigger" "show_book_rating_trigger" {
    project_key = launchdarkly_project.terraform.key
    env_key = launchdarkly_project.terraform.environments[0].key
    flag_key = launchdarkly_feature_flag.show_book_rating.key
    integration_key = "generic-trigger"
    instructions {
        kind = "turnFlagOff"
    }
    enabled = false
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

resource "launchdarkly_metric" "premium-sales" {
  project_key      = launchdarkly_project.terraform.key
  key              = "premium-sales"
  name             = "Premium sales"
  description      = "Custom event to track items bought by premium customers"
  kind             = "custom"
  event_key        = "premium-sales" 
  is_numeric       = true
  unit             = "qty"
  success_criteria = "HigherThanBaseline"
  tags             = ["terraform"]
}

