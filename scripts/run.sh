#!/bin/bash

WEB_ROOT=/home/ec2-user/webapp
APP_FILE=$WEB_ROOT/app.js
ACCESS_FILE=$WEB_ROOT/access.log
ERROR_FILE=$WEB_ROOT/logs/error.log
OUT_FILE=$WEB_ROOT/logs/out.log
PID=$WEB_ROOT/webapp.pid
PORT=8008

echo "execute ..."
echo "forever -p $WEB_ROOT -l $ACCESS_FILE -e $ERROR_FILE -o $OUT_FILE -a --pidFile $PID start $APP_FILE --prod --port $PORT"
forever -p $WEB_ROOT -l $ACCESS_FILE -e $ERROR_FILE -o $OUT_FILE -a --pidFile $PID start $APP_FILE --prod --port $PORT