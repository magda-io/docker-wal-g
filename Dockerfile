FROM bitnami/wal-g:1.1.0-debian-10-r3

USER root

RUN install_packages daemontools

RUN mkdir -p /etc/wal-g.d/env && \
    chown 1001 /etc/wal-g.d/env && \
    ln -s /opt/bitnami/wal-g/bin/wal-g /usr/local/bin

USER 1001