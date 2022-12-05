FROM node
MAINTAINER TEAM US <whyriod@gmail.com>

# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps
RUN mkdir -p /opt/project3 && cp -a /tmp/node_modules /opt/project3

# Setup workdir
WORKDIR /opt/project3
COPY . /opt/project3

# run
EXPOSE 3000
CMD ["node", "index.js"]
