#Name of the state bucket
TERRAFORM_S3_BUCKET_NAME=my-fancy-job-webshop-s3-artem-bucket-tf-state1
bucket_not_exists=$(aws s3api head-bucket --bucket $TERRAFORM_S3_BUCKET_NAME 2>/dev/null && echo false || echo true)
if $bucket_not_exists
then
    aws s3api create-bucket --bucket $TERRAFORM_S3_BUCKET_NAME --region eu-central-1 --create-bucket-configuration LocationConstraint=eu-central-1
else
    echo "terraform bucket already exists"
fi
TERRAFORM_S3_BUCKET_NAME=my-fancy-job-webshop-s3-artem-bucket-jar1
bucket_not_exists=$(aws s3api head-bucket --bucket $TERRAFORM_S3_BUCKET_NAME 2>/dev/null && echo false || echo true)
if $bucket_not_exists
then
    aws s3api create-bucket --bucket $TERRAFORM_S3_BUCKET_NAME --region eu-central-1 --create-bucket-configuration LocationConstraint=eu-central-1
else
    echo "terraform bucket already exists"
fi

TERRAFORM_S3_BUCKET_NAME=my-fancy-job-webshop-s3-artem-bucket-web1
bucket_not_exists=$(aws s3api head-bucket --bucket $TERRAFORM_S3_BUCKET_NAME 2>/dev/null && echo false || echo true)
if $bucket_not_exists
then
    aws s3api create-bucket --bucket $TERRAFORM_S3_BUCKET_NAME --region eu-central-1 --create-bucket-configuration LocationConstraint=eu-central-1
    aws s3 website s3://my-fancy-job-webshop-s3-artem-bucket-web1/ --index-document index.html --error-document error.html

else
    echo "terraform bucket already exists"
fi
