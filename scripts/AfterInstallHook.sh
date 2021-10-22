#!/bin/bash
set -e
killall node
cd /var/www/html/node
npm install
nohup npm run  start:prod  &
