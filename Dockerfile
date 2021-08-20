FROM docker.io/bitnami/minideb:buster

COPY component/install_packages /usr/local/bin/

RUN install_packages daemontools

COPY --from=koehn/postgres-wal-g:13.4-v1.1 /usr/local/bin/wal-g /usr/local/bin/wal-g

RUN mkdir -p /etc/wal-g.d/env && \
    chown 1001 /etc/wal-g.d/env

USER 1001