## This tells us what to use as a base.  The node docker containers are good, so might as well use them
FROM node:9-slim

## Make a directory for our app
RUN mkdir -p /opt/app/public

## Add our code.  I like to be explicit and not use wildcards, since it's easy to get the node_modules
## directory which may need to build things which won't work on different architectures (i.e. mac to linux)
ADD package.json yarn.lock index.js /opt/app/
ADD public /opt/app/public/

## Set the default directory we're using on our container
WORKDIR /opt/app

## Run npm install
RUN yarn install

## Expose a port that we can access our web app on
EXPOSE 1313

## Tell our app how to start when we run the docker container.  This has to be an array of a command and its arguments
CMD ["yarn", "dev"]
