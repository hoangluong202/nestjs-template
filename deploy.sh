#!/bin/bash

# Variables
SERVER="ubuntu@3.95.11.114"
REPO_DIR="nestjs-template"

# SSH to server
echo "SSH to server..."
ssh -i ~/.ssh/id_rsa.pem $SERVER << EOF

# Navigate to project folder
echo "Navigate to project folder..."
cd $REPO_DIR

# Pull latest changes
echo "Pull latest changes..."
git pull origin main

# Remove all unused Docker objects
echo "Remove all"
sudo docker compose -f docker-compose.staging.yml down
sudo docker system prune -a -f

# Run docker-compose
echo "Run docker-compose..."
sudo docker compose -f docker-compose.staging.yml up -d

EOF