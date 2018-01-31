import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon'

// Mostly stolen from:
// https://medium.com/@phoebe.greig/headache-free-isomorphic-app-tutorial-react-js-react-router-node-js-ssr-with-state-and-es6-797a8d8e493a
// https://crypt.codemancers.com/posts/2017-06-03-reactjs-server-side-rendering-with-router-v4-and-redux/
const app = express();
const assets = express.static(path.join(__dirname, '../dist'));
const port = process.env.PORT || 80;

app.use(assets);

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
