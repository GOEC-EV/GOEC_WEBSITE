#!/bin/bash
# Run this if "pm2 status" command shows nothing is running
echo "i am pulling"
git pull
npm i
echo i am building
npm run build
pm2 start npm --name "goHighr" -- start
pm2 start node --name "webhook_github" -- github_webhook.js
pm2 startup
pm2 save
pm2 restart all
#finish this


