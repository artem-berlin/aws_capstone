
cd ./infrastructure
sh s3_bucket.sh
terraform init
terraform apply -auto-approve
REACT_APP_BASE_URL="http://$(terraform output server_ip):8080" 
cd ..
cd frontend
npm install
npm run build

cd build
aws s3 cp . s3://my-fancy-job-webshop-s3-artem-bucket-web --recursive --acl public-read