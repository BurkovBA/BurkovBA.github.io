import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon'

import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import StaticRouter from 'react-router-dom/StaticRouter';

import Layout from 'pages/Layout.jsx';
// import About from 'pages/About.jsx';
import Blog from 'pages/Blog.jsx';
import Post from 'pages/Post.jsx';


// Mostly stolen from:
// https://medium.com/@phoebe.greig/headache-free-isomorphic-app-tutorial-react-js-react-router-node-js-ssr-with-state-and-es6-797a8d8e493a
// https://crypt.codemancers.com/posts/2017-06-03-reactjs-server-side-rendering-with-router-v4-and-redux/

const routes = [
  {
    component: Layout,
    routes: [
      { path: "/blog", component: Blog, exact: true },
      { path: "/blog/:id", component: Post},
      // { path: "/about", component: About }
    ]
  }
];


function renderFullPage (html) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Personal blog of Boris Burkov</title>
    
        <link rel="apple-touch-icon" sizes="57x57" href="/dist/favicons/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/dist/favicons/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/dist/favicons/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/dist/favicons/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/dist/favicons/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/dist/favicons/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/dist/favicons/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/dist/favicons/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/dist/favicons/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192" href="/dist/favicons/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/dist/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/dist/favicons/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/dist/favicons/favicon-16x16.png">
        <link rel="manifest" href="/dist/favicons/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/dist/favicons/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        
        <link rel="stylesheet" href="/dist/server.css">
      </head>  
      <body class="fixed-navbar fixed-sidebar">
        <div id="main">${html}</div>
      </body>
    </html>`;
}

const port = process.env.PORT || 8080;

const app = express();
app.use('/dist', express.static(path.join(__dirname, '../')));

app.get('*', (req, res) => {
  let context = {};

  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      { renderRoutes(routes) }
    </StaticRouter>
  );

  res.status(200).send(renderFullPage(content))
});

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
console.log(`Serving statics from ${path.join(__dirname, '../')}`);