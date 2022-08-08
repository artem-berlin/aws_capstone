terraform {
 required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    } 
  }
   backend "s3" {
    bucket = "my-fancy-job-webshop-s3-artem-bucket-tf-state1"
    key    = "terraform.tfstate"
    region = "eu-central-1"
  }
  required_version = ">= 0.14.9"
}





resource "aws_instance" "shop" {
  ami           = "ami-0a1ee2fb28fe05df3"
  instance_type = "t2.micro"
  subnet_id = module.vpc.publicsubnet1_id
  key_name = "shop"
  user_data = "${file("backend.sh")}"
  iam_instance_profile ="LabInstanceProfile"
  
  tags = {
    Name = "shop"
    Env = "dev"
  }
 ebs_block_device {
    device_name           = "/dev/xvda"
    volume_size           = 8
    volume_type           = "gp2"
    delete_on_termination = false
    tags = {
      Name = "shop-storage"
    }
  }
  
  vpc_security_group_ids = [module.vpc.security_group_id]
  associate_public_ip_address = true
} 
output "server_ip" {
  value = aws_instance.shop.public_ip
  
}
 output "load_balancer_dns"{
  value = aws_lb.shop-load-balancer.dns_name
 }


### Modules ####
 
module "vpc" {
  source = "./modules/vpc"
}

  data "aws_caller_identity" "current" {}

locals {
  account_id = data.aws_caller_identity.current.account_id
  role_arn = join(":", ["arn", "aws", "iam", "", local.account_id, "role/LabRole"])
}