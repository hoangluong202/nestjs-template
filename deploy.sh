#!/bin/bash

# Variables
SERVER="ubuntu@3.95.11.114"
REPO_DIR="nestjs-template"
SCRIPT="sudo docker-compose -f docker-compose.staging.yml up -d"

# Setup SSH
mkdir -p ~/.ssh
CP ~/.ssh/key-pair-login.pem ~/.ssh/
chmod +x ~/.ssh/key-pair-login.pem

# SSH to server
ssh -i ~/.ssh/key-pair-login.pem ubuntu@3.95.11.114 << EOF

# Navigate to project folder
cd $REPO_DIR

# Pull latest changes
git pull origin main

# Run docker-compose
$SCRIPT

EOF