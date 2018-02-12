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

const port = process.env.PORT || 8080;

const app = express();
const assets = express.static(path.join(__dirname, '../dist'));
app.use(assets);

app.get('*', (req, res) => {
  let context = {};

  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      { renderRoutes(routes) }
    </StaticRouter>
  );

  res.render('index', {title: 'Express', data: false, content })
});

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
