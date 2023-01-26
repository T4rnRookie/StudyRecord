#/bin/sh
#./tiaoshi.sh port1 port2
docker build -t $(basename $(pwd)):v1 .
docker run --name $(basename $(pwd)) -d -p $1:$2 $(basename $(pwd)):v1