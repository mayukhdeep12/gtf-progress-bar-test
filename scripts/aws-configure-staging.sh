#!/bin/bash
set -e
set -x

aws configure --profile staging-profile set region us-east-2
aws configure --profile staging-profile set role_arn arn:aws:iam::226027083343:role/StagingAdministratorRole
aws configure --profile staging-profile set source_profile default
export AWS_DEFAULT_PROFILE=staging-profile
