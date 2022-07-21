
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
  backend "s3" {
    bucket = "my-fancy-job-webshop-s3-artemtest-bucket"
    key    = "terraform.tfstate"
    region = "eu-central-1"
  }
}

resource "aws_instance" "amazon_Linux" {
  ami           = "ami-0a1ee2fb28fe05df3"
  instance_type = "t3.micro"

  tags = {
    Name = "amazon_Linux"
    Env  = "dev"
  }
}

provider "aws" {
  region = "eu-central-1"
}

data "aws_caller_identity" "current" {}

locals {
  account_id = data.aws_caller_identity.current.account_id
  role_arn   = join(":", ["arn", "aws", "iam", "", local.account_id, "role/LabRole"])
}