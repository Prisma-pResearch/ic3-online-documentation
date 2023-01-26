#!/bin/sh

cd ic3-online-documentation/websites/

## install dependencies
echo "Install Node Dependencies"
npm install .

## start development mode
npm run start
