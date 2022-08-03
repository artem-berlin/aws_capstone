
cd ./infrastructure

sh s3_bucket.sh
terraform init
terraform apply -auto-approve
server_ip=$(terraform output -json | jq -r .server_ip.value)
#export REACT_APP_BASE_URL="http://$(terraform output -json | jq -r .server_ip.value):8080"
export REACT_APP_BASE_URL="http://$server_ip:8080"
cd ..
cd frontend
npm install
npm run build

cd build
aws s3 cp . s3://my-fancy-job-webshop-s3-artem-bucket-web --recursive --acl public-read
cd ..
cd ..
cd infrastructure
pwd
chmod 400 shop.pem
#sudo sh backend.sh
#sudo ./backend.sh
ssh -i shop.pem ec2-user@$server_ip
pwd

