resource "aws_autoscaling_group" "shop" {
  name = "${aws_launch_configuration.shop.name}-asg" 
   min_size             = 1
  desired_capacity     = 1
  max_size             = 2
  
  health_check_type    = "ELB"
  load_balancers = [
    "${aws_elb.shop_elb.id}"
  ]
  launch_configuration = "${aws_launch_configuration.shop.name}"
  enabled_metrics = [
    "GroupMinSize",
    "GroupMaxSize",
    "GroupDesiredCapacity",
    "GroupInServiceInstances",
    "GroupTotalInstances"
  ]
  metrics_granularity = "1Minute"
  vpc_zone_identifier  = [
    "${aws_subnet.demosubnet.id}",
    "${aws_subnet.demosubnet1.id}"
  ]# Required to redeploy without an outage.
  lifecycle {
    create_before_destroy = true
  }
  tag {
    key                 = "Name"
    value               = "shop"
    propagate_at_launch = true
  }
  }