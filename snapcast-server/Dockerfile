FROM ivdata/snapserver

COPY snapserver.conf /etc/snapserver.conf

COPY start.sh /usr/src/
RUN chmod +x /usr/src/start.sh

CMD [ "/bin/bash", "/usr/src/start.sh" ]
