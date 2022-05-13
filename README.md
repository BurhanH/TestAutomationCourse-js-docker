# Test Automation Course | js-docker
Sample repository based on JS, Mocha and Docker

## How to run tests
- npm test
- npm test --  -g "My test"

## How to build image
- docker build -t js-docker .

## How to run tests in Docker container
- docker run js-docker
- docker run js-docker test --  -g "hooks"

## How to run tests in Docker container (use public image)
- docker run burazalinov/js-docker
- docker run burazalinov/js-docker test --  -g "Array"
