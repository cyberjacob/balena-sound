FROM ivdata/snapclient

RUN  apt-get update \
  && apt-get install -y curl \
  && rm -rf /var/lib/apt/lists/*

COPY start.sh /usr/src/
RUN chmod +x /usr/src/start.sh

ENTRYPOINT [ "/bin/bash", "/usr/src/start.sh" ]
CMD [ "/bin/bash", "/usr/src/start.sh" ]
