terraform {
  required_providers {
    launchdarkly = {
      source  = "launchdarkly/launchdarkly"
      version = "~> 2.0"
    }
  }
}

variable "LAUNCHDARKLY_ACCESS_TOKEN" {
  type = string
}

provider "launchdarkly" {
  access_token = var.LAUNCHDARKLY_ACCESS_TOKEN
}

resource "launchdarkly_project" "terraform" {
  key  = "bas-staff-picks-demo"
  name = "bas-staff-picks-demo"

  tags = [
    "terraform",
  ]

  environments {
        key   = "dev"
        name  = "Development"
        color = "7B42BC"
        tags  = ["terraform"]
  }
  default_client_side_availability {
    using_environment_id = true
    using_mobile_key     = false
  }
}

resource "launchdarkly_feature_flag" "ff_page_title" {
  project_key = launchdarkly_project.terraform.key
  key         = "ffPageTitle"
  name        = "Page Title"
  description = "This flag controls the title on the staff picks page"

  variation_type = "string"
  variations {
    value       = "Staff picks"
    name        = "Staff picks on"
    description = "Show the Staff picks title"
  }
  variations {
    value       = "Staff recommendations"
    name        = "Staff recommendations on"
    description = "Show the Staff recommendations title"
  }
  
  defaults {
    on_variation = 0
    off_variation = 1
  }

  tags = [
    "terraform-managed"
  ]
}

resource "launchdarkly_feature_flag" "ff_login" {
  project_key = launchdarkly_project.terraform.key
  key         = "ffLogin"
  name        = "Login Form"
  description = "This flag controls the Login form in the page header"

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

resource "launchdarkly_feature_flag" "ff_book_rating" {
  project_key = launchdarkly_project.terraform.key
  key         = "ffBookRating"
  name        = "Book rating"
  description = "This flag controls the visibility of the book ratings"

  variation_type = "boolean"
  variations {
    value       = "true"
    name        = "Show book ratings"
    description = "Show the book ratings"
  }
  variations {
    value       = "false"
    name        = "Disable book ratings"
    description = "Hide the book ratings"
  }
  
  defaults {
    on_variation = 0
    off_variation = 1
  }

  tags = [
    "terraform-managed",   
  ]
}

