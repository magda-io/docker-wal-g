FROM docker.io/bitnami/minideb:buster

RUN install_packages daemontools

COPY --from=koehn/postgres-wal-g:13.4-v1.1 /usr/local/bin/wal-g /usr/local/bin/wal-g

COPY component/adduser.sh /usr/local/bin/

# follow openshfit guidelines for supporting arbitrary user IDs
# https://docs.openshift.com/container-platform/3.3/creating_images/guidelines.html#openshift-container-platform-specific-guidelines
RUN mkdir -p /etc/wal-g.d/env && \
    chgrp -R 0 /etc/wal-g.d/env && \
    chmod -R g=u /etc/wal-g.d/env && \
    # Allow user to add use record in /etc/passwd
    chmod g=u /etc/passwd

USER 1001