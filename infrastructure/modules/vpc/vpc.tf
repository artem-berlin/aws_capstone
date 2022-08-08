resource "aws_vpc" "endpoint_vpc" {
  cidr_block       = "10.0.0.0/16"
  instance_tenancy = "default"

  tags = {
    Name = "Endpoint_VPC"
  }
}

resource "aws_internet_gateway" "IGW" {
  vpc_id = aws_vpc.endpoint_vpc.id
}

resource "aws_subnet" "publicsubnet1" {
    vpc_id = aws_vpc.endpoint_vpc.id
    cidr_block = "10.0.1.0/24"
    availability_zone = "eu-central-1a"
}

resource "aws_subnet" "publicsubnet2" {
    vpc_id = aws_vpc.endpoint_vpc.id
    cidr_block = "10.0.2.0/24"
    availability_zone = "eu-central-1b"
}

resource "aws_route_table" "Public" {
  vpc_id = aws_vpc.endpoint_vpc.id
  
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.IGW.id
  }
}

resource "aws_route_table_association" "a" {
  subnet_id      = aws_subnet.publicsubnet1.id
  route_table_id = aws_route_table.Public.id
}

resource "aws_route_table_association" "b" {
  subnet_id      = aws_subnet.publicsubnet2.id
  route_table_id = aws_route_table.Public.id
}

resource "aws_security_group" "inbound_outbound" {
  name        = "P80"
  description = "Allow P80, 8080"
  vpc_id      = aws_vpc.endpoint_vpc.id

  ingress {
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }
   ingress {
    from_port        = 8080
    to_port          = 8080
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }
  ingress {
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }
  
  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
  tags = {
    Name = "P22+88open"
  }
}

####Load Balancer#########
# resource "aws_lb" "shop_lb" {
#   name               = "shop-balancer"
#   internal           = false
#   load_balancer_type = "application"
#   security_groups    = [P80]
#   subnets            = public_subnets
# }


# resource "aws_lb_listener" "shop_lb_listener_80" {
#   load_balancer_arn = aws_lb.shop_lb.arn
#   port              = "80"
#   protocol          = "HTTP"
  
  
# }
# resource "aws_autoscaling_group" "shop_asg" {
#   min_size             = 1
#   max_size             = 3
#   desired_capacity     = 1
#   launch_configuration = aws_launch_configuration.shop-ec2.name
#   vpc_zone_identifier  = module.vpc.publicsubnet1
# }

# resource "aws_lb_target_group" "shop_tg_gr" {
#   name     = "shop-target-group"
#   port     = 8080
#   protocol = "HTTP"
#   vpc_id   = module.vpc.aws_vpc.endpoint_vpc.id
# }