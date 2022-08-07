
####Load Balancer#########
# resource "aws_lb" "shop_lb" {
#   name               = "shop-balancer"
#   internal           = false
#   load_balancer_type = "application"
#   security_groups    = [P80]
#   subnets            = public_subnets

#   tags = {
#     Name = "Endpoint_VPC"
#   }
# }
