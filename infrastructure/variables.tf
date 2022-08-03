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
variable "aws_access_key" {
  type = string
}

variable "aws_secret_key" {
  type = string
}
variable "access_ip" {
  type = string

}
variable "private_key" {
  default = "shop.pem"
}
#variable "server_ip" {
 # type = string
#}