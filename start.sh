#!/bin/bash
# Run the deployment script
echo "i am pulling"
git pull --rebase
npm i
echo i am building
npm run build
pm2 startup
pm2 save
pm2 restart all


