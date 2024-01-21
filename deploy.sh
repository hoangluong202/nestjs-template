#!/bin/bash

# Variables
SERVER="ubuntu@3.95.11.114"
REPO_DIR="nestjs-template"

# SSH to server
echo "SSH to server..."
ssh -i ~/.ssh/id_rsa.pem ubuntu@3.95.11.114 << EOF

# Navigate to project folder
echo "Navigate to project folder..."
cd $REPO_DIR

# Pull latest changes
echo "Pull latest changes..."
git pull origin main

# Run docker-compose
echo "Pull latest Docker images..."
sudo docker compose -f docker-compose.staging.yml pull
echo "Run docker-compose..."
sudo docker compose -f docker-compose.staging.yml down
sudo docker compose -f docker-compose.staging.yml up -d

EOF