# ArtemGolub
#to init
echo "99999" > /proc/sys/fs/inotify/max_user_watches

apt-get install npm nodejs

npm install -g gulp

#generation
gulp production
#start
open in browser index.html