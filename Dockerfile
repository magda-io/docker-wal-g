FROM bitnami/wal-g:1.1.0-debian-10-r3

USER root

RUN install_packages daemontools

USER 1001