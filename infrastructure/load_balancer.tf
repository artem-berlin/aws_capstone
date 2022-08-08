
resource "aws_lb_target_group" "shop-target-group" {
  name     = "shop-target-group"
  port     = 8080
  protocol = "HTTP"
  vpc_id   = module.vpc.vpc_id
}
resource "aws_lb_target_group_attachment" "shop-target-group" {
  target_group_arn = aws_lb_target_group.shop-target-group.arn
  target_id        = aws_instance.shop.id
  port             = 8080
}
resource "aws_lb" "shop-load-balancer" {
  name               = "shop-load-balancer"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.lb_security_group.id]
  subnets            = [module.vpc.publicsubnet1_id, module.vpc.publicsubnet2_id ]

  enable_deletion_protection = true

  #access_logs {
    # bucket  = aws_s3_bucket.lb_logs.bucket
    #prefix  = "test-lb"
    #enabled = true
 # }

  tags = {
    Environment = "production"
  }
}
resource "aws_security_group" "lb_security_group"{
 name        = "P80-sg"
  description = "Allow P80, 8080"
  vpc_id      = module.vpc.vpc_id
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
 
  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
  tags = {
    Name = "lb_security_group_main"
  }
}

resource "aws_lb_listener" "listener_front_end" {
  load_balancer_arn = aws_lb.shop-load-balancer.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.shop-target-group.arn
  }
}

