#!/bin/bash

# Variables
SERVER="ubuntu@3.95.11.114"
REPO_DIR="nestjs-template"
SCRIPT="sudo docker-compose -f docker-compose.staging.yml up -d"
SSH_KEY_DIR="~/.ssh/"

# Setup SSH
echo "Setting up SSH..."
if [ ! -d $SSH_KEY_DIR ]; then
  mkdir -p $SSH_KEY_DIR
fi
echo "${{ secrets.SSH_PEM_KEY }}" > ~/.ssh/key-pair-login.pem
chmod +x ~/.ssh/key-pair-login.pem
ssh-keyscan 3.95.11.114 >> ~/.ssh/known_hosts

# SSH to server
echo "SSH to server..."
ssh -i ~/.ssh/key-pair-login.pem ubuntu@3.95.11.114 << EOF

# Navigate to project folder
echo "Navigate to project folder..."
cd $REPO_DIR

# Pull latest changes
echo "Pull latest changes..."
git pull origin main

# Run docker-compose
echo "Run docker-compose..."
$SCRIPT

EOF