# magda-wal-g

Docker image extends the [bitnami WAL-G Image](https://github.com/bitnami/bitnami-docker-wal-g) and adds [envdir](http://cr.yp.to/daemontools/envdir.html) utility.

## How to use envdir with WAL-G

``` bash 
$ # To use in k8s, we can map a configmap or secret as volumn to `/etc/wal-e.d/env`
$ mkdir -p /etc/wal-e.d/env
$ echo "secret-key-content" > /etc/wal-e.d/env/AWS_SECRET_ACCESS_KEY
$ echo "access-key" > /etc/wal-e.d/env/AWS_ACCESS_KEY_ID
$ echo 's3://some-bucket/directory/or/whatever' > \
  /etc/wal-e.d/env/WALE_S3_PREFIX
  
$ /etc/paenvdir /etc/wal-e.d/env wal-g backup-push
# add user record in /etc/passwd for user 1001 as wal-g 
# optional; required when call `wal-g backup-push` remotely to connect to postgresql
$ /usr/local/bin/adduser.sh 
$ /usr/bin/envdir /etc/wal-g.d/env /usr/local/bin/wal-g backup-push
$ /usr/bin/envdir /etc/wal-g.d/env /usr/local/bin/wal-g delete --confirm retain FULL 7
```
