#!/bin/bash
set -e
cd /var/www/html/node
npm install
npm run build
nohup npm run  start:prod  &
