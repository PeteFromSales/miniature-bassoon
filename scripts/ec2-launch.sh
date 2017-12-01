#!/bin/bash -x

REGION=$(curl 169.254.169.254/latest/meta-data/placement/availability-zone/ | sed 's/[a-z]$//')

sudo apt update && sudo apt -y upgrade
sudo apt install -y ruby python vim nginx php70
cd /home/ubuntu
wget https://aws-codedeploy-$REGION.s3.amazonaws.com/latest/install
chmod +x ./install
./install auto