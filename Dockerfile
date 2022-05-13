FROM node:12.18.1

WORKDIR /app

COPY ./test /app/test

COPY package.json /app/

RUN ["npm", "install"]

# By default will run all tests
# To run a specific test,
# use the `test --  -g "My test"` command and apply it to Docker container
ENTRYPOINT [ "npm" ]

CMD ["test"]
