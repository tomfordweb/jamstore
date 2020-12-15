# Getting Started

First, Generate the image.

```
docker build -t <image>
```

## Development Build (hot reloading)

```
docker run -p 7999:8000 -v $(pwd):/app <image> dev
```

## Static Build

```
docker run -p 8000:8000 <image>
```

# Testing

## Unit tests

```
docker run <image> run test
```

## Cypress Tests

By default, cypress is not installed with the application. It is preferred to use their docker image to test with this.

Cypress Tests are a little trickier. You must create a network to allow the containers to communicate with one another.

The subnet, and IP address you assign to the app are arbritrary, but need to exist.

```
docker network create  <network>
docker run --network <network> --name <hostname-for-cypress> <image>
docker run --network <network> -v $(pwd):/e2e -w /e2e cypress/included:3.2.0
```

Any test output is saved to the cypress directory.

# CI/CD Notes

Generate static build locally to be worked with.

```
docker run -v $(pwd)/dist:/app/dist jamstore generate
```
