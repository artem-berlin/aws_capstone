cd src
sh build_source_code.sh

cd ./infrastructure
sh setting_up_state_s3.sh
terraform init
terraform apply -auto-approve