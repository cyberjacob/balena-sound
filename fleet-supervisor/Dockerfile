FROM node:buster

RUN apt-get update -qq; apt-get install -y --no-install-recommends docker.io

COPY . .
RUN JOBS=MAX npm install --only=production

COPY start.sh /usr/src/
RUN chmod +x /usr/src/start.sh

CMD [ "/bin/bash", "/usr/src/start.sh" ]
