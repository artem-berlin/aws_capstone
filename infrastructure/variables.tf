variable "s3_image_storage" {
  description = "Name of the S3 bucket"
  type        = string
  default     = "image-dump"
}

variable "region" {
  description = "Default region"
  type = string
  default = "eu-central-1"
}