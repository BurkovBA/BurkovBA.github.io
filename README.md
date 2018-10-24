## Deployment commands

CI/CD systems like Jenkins or GoCD nowadays are built by Java guys, who have this artifacts mentality and
assume that each step of build process is happening in a temporary sandbox environment in Jenkins agent
or go-agent project folder. It produces artifacts and should exit then.

I had to comply with this approach, so build process for this blog results in construction of a docker image
that I run on the machine and proxy the traffic to it through an Nginx proxy.

The build process is as follows:

 - `docker stop blog`
 - `docker build -t blog .`
 - `docker run -p <port>:<port> -rm -d --name blog blog`

## Building the frontend

This whole blog is a React SPA. It is built with webpack by running npm scripts in 3 environments:
development (using webpack-dev-server), production (serving a bundle to be executed in browser) and
server-side rendered (using express server).

Development environment is used on localhost, Github pages (BurkovBA.github.io) are serving the bundle
built for production environment, while borisburkov.net runs express server, which serves pre-rendered
page along with production bundle, that works on the frontend.

## How to make github pages serve this

I use a neat hack by Rafael Pedicini: https://github.com/rafrex/spa-github-pages

It works as follows: when you request some url of your SPA, which doesn't correspond to any file in your
repository, Github server returns 404 error.

Here's the catch: you can customize your 404.html page! So, you create a custom 404 error with a script.
That script parses url that you passed, transforms path components into URL params (aka GET params) and
redirects to index.html. For instance, https://BurkovBA.github.io/blog?category=programming is
transformed into https://BurkovBA.github.io?p=blog&category=programming. index.html parses this path p
parameter back into a proper URL and initializes React SPA.


## Server-side rendering (SSR)

See the https://github.com/BurkovBA/BurkovBA.github.io/tree/master/src/server folder.

Again, this is a pretty neat code, mostly stolen from a couple of blogs:

 - https://medium.com/@phoebe.greig/headache-free-isomorphic-app-tutorial-react-js-react-router-node-js-ssr-with-state-and-es6-797a8d8e493a
 - https://crypt.codemancers.com/posts/2017-06-03-reactjs-server-side-rendering-with-router-v4-and-redux/

## Telegram preview

I've written a page template for telegram to render, but so far it still doesn't recognize my page elements
unfortunately.