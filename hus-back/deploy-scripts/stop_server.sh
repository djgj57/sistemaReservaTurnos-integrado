if ps -ef | grep java |grep -v grep | awk '{print $2}'
then
    sudo kill $(ps -ef | grep java |grep -v grep | awk '{print $2}')
fi
