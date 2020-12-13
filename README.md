# Getting Started

Generate the image.

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

Cypress Tests are a little trickier. You must create a network to allow the containers to communicate with one another.

The subnet, and IP address you assign to the app are arbritrary, but need to exist.

```
docker network create --subnet=192.168.2.0/16 <network>
docker run --network <network> --ip 192.168.2.4 <image>
docker run --network <network> -v $(pwd):/e2e -w /e2e cypress/included:3.2.0
```
