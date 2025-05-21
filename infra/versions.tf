terraform {
  cloud {
    organization = "samyvs"
    workspaces {
      name = "starter"
    }
  }
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5"
    }
  }
}
