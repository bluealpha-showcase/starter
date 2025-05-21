provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

resource "cloudflare_r2_bucket" "bucket_local" {
  account_id = var.cloudflare_account_id
  name       = "bucket-local"
}

resource "cloudflare_r2_bucket" "bucket_dev" {
  account_id = var.cloudflare_account_id
  name       = "bucket-dev"
}

resource "cloudflare_r2_bucket" "bucket_prod" {
  account_id = var.cloudflare_account_id
  name       = "bucket-prod"
}
