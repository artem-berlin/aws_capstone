resource "aws_autoscaling_policy" "shop_policy_up" {
  name = "shop_policy_up"
  scaling_adjustment = 1
  adjustment_type = "ChangeInCapacity"
  cooldown = 300
  autoscaling_group_name = "${aws_autoscaling_group.shop.name}"
}
resource "aws_cloudwatch_metric_alarm" "shop_cpu_alarm_up" {
  alarm_name = "shop_cpu_alarm_up"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods = "2"
  metric_name = "CPUUtilization"
  namespace = "AWS/EC2"
  period = "120"
  statistic = "Average"
  threshold = "70"
  
  dimensions = {
    AutoScalingGroupName = "${aws_autoscaling_group.shop.name}"
  }
  alarm_description = "This metric monitor EC2 instance CPU utilization"
  alarm_actions = [ "${aws_autoscaling_policy.shop_policy_up.arn}" ]
}
resource "aws_autoscaling_policy" "shop_policy_down" {
  name = "shop_policy_down"
  scaling_adjustment = -1
  adjustment_type = "ChangeInCapacity"
  cooldown = 300
  autoscaling_group_name = "${aws_autoscaling_group.shop.name}"
}
resource "aws_cloudwatch_metric_alarm" "shop_cpu_alarm_down" {
  alarm_name = "shop_cpu_alarm_down"
  comparison_operator = "LessThanOrEqualToThreshold"
  evaluation_periods = "2"
  metric_name = "CPUUtilization"
  namespace = "AWS/EC2"
  period = "120"
  statistic = "Average"
  threshold = "30"
  dimensions = {
    AutoScalingGroupName = "${aws_autoscaling_group.shop.name}"
  }
  alarm_description = "This metric monitor EC2 instance CPU utilization"
  alarm_actions = [ "${aws_autoscaling_policy.shop_policy_down.arn}" ]
}