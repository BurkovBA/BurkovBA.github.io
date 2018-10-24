## Deployment commands

CI/CD systems like Jenkins or GoCD nowadays are built by Java guys, who have this artifacts mentality and
assume that each step of build process is happening in a temporary sandbox environment in Jenkins agent
or go-agent project folder. It produces artifacts and should exit then.

I had to comply with this approach, so build process for this blog results in construction of a docker image
that I run on the machine and proxy the traffic to it through an Nginx proxy.

The build process is as follows:

`docker stop blog`
`docker build -t blog .`
`docker run -p <port>:<port> -rm -d --name blog blog`

## Building the frontend

TODO.

## How to make github pages serve this

TODO.

## Server-side rendering (SSR)

TODO.

## Telegram preview

TODO.