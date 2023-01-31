#!/bin/sh

## set up crontab job
echo "0 1 * * *  su -s /bin/sh nobody -c 'cd /ic3-online-documentation && /usr/local/bin/git pull'" >> /etc/crontabs/root
crond -l 2 -f > /dev/stdout 2> /dev/stderr &

## start documentation
cd ic3-online-documentation/websites

## install dependencies
echo "Install Node Dependencies"
npm install .

## start development mode
npm run start --host 0.0.0.0

