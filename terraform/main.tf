terraform {
  required_providers {
    launchdarkly = {
      source  = "launchdarkly/launchdarkly"
      version = "~> 2.0"
    }
    aws = {
      source = "hashicorp/aws"
      version = "~> 4.37.0"
    }
  }
  backend "s3" {
    bucket = "bas-staff-picks-demo-terraform-state"
    key    = "bas-staff-picks-demo.tfstate"
    region = "eu-west-1"
  }
}

provider "launchdarkly" {
  access_token = var.LAUNCHDARKLY_ACCESS_TOKEN
}

provider "aws" {
  region = var.region
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

resource "aws_s3_bucket" "staff_picks_data_storage" {
  bucket = var.bucket
  acl    = "public-read"

  policy = <<POLICY
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "PublicRead",
          "Effect": "Allow",
          "Principal": "*",
          "Action": [
              "s3:GetObject",
              "s3:GetObjectVersion"
          ],
          "Resource": "arn:aws:s3:::${var.bucket}/*"
        }
      ]
    }
  POLICY

}

resource "aws_s3_bucket_website_configuration" "staff_picks_pages" {
  bucket = var.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

