cd ./infrastructure
sh s3_bucket.sh
cd ../backend
aws  s3 cp  target/nf-project-backend-0.0.1-SNAPSHOT.jar s3://my-fancy-job-webshop-s3-artem-bucket-jar1
cd ../infrastructure
terraform init
terraform apply -auto-approve
server_ip=$(terraform output -json | jq -r .server_ip.value)
echo $server_ip
export REACT_APP_BASE_URL="http://$(terraform output -json | jq -r .server_ip.value):8080"
#export REACT_APP_BASE_URL="http://$server_ip:8080"
echo $REACT_APP_BASE_URL
cd ..
cd frontend
npm install
npm run build
cd build
aws s3 cp . s3://my-fancy-job-webshop-s3-artem-bucket-web1 --recursive --acl public-read 

cd ..
cd ..
cd infrastructure
pwd
chmod 400 shop.pem
ssh -i shop.pem ec2-user@$server_ip
pwd

