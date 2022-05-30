#!/bin/bash
set -e
set -x

aws configure --profile dev-profile set region us-east-2
aws configure --profile dev-profile set role_arn arn:aws:iam::738617863866:role/DevAdministratorRole
aws configure --profile dev-profile set source_profile default
export AWS_DEFAULT_PROFILE=dev-profile
