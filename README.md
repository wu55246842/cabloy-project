# cabloy-project

NodeJS	>=10	https://nodejs.org
MySQL	>=5.7.27	https://dev.mysql.com/downloads/mysql/
Redis	>=6.2.0	mac/linux: https://redis.io


docker pull mysql:5.7
docker run --name mysql -p 3306:3306 --restart=always -e MYSQL_ROOT_PASSWORD=root -v D://mysql_docker//data:/var/lib/mysql  -v D://mysql_docker//log:/var/log/mysql  -d  mysql:5.7

docker pull redis:5.0
docker run -dit --name redis-test -p 6380:6379 --requirepass 123456 redis:5.0
