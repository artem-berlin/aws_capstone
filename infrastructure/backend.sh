#!/bin/bash
#sudo exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1
yum update -y
yum install java-17 -y
export SPRING_DATA_MONGODB_URI="mongodb+srv://artem:shop@web-shop-cluster.mp8q1.mongodb.net/shop?retryWrites=true&w=majority"
aws s3 cp s3://my-fancy-job-webshop-s3-artem-bucket-jar1/nf-project-backend-0.0.1-SNAPSHOT.jar .
java -jar nf-project-backend-0.0.1-SNAPSHOT.jar

