# docker-wal-g

Docker image extends the [bitnami WAL-G Image](https://github.com/bitnami/bitnami-docker-wal-g) and adds [envdir](http://cr.yp.to/daemontools/envdir.html) utility.

## How to use envdir with WAL-G

``` bash 
$ # To use in k8s, we can map a configmap or secret as volumn to `/etc/wal-e.d/env`
$ mkdir -p /etc/wal-e.d/env
$ echo "secret-key-content" > /etc/wal-e.d/env/AWS_SECRET_ACCESS_KEY
$ echo "access-key" > /etc/wal-e.d/env/AWS_ACCESS_KEY_ID
$ echo 's3://some-bucket/directory/or/whatever' > \
  /etc/wal-e.d/env/WALE_S3_PREFIX
  
$ chown -R root:postgres /etc/wal-e.d
$ envdir /etc/wal-e.d/env wal-g backup-push
```
