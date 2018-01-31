import express from 'express';

// Mostly stolen from:
// https://medium.com/@phoebe.greig/headache-free-isomorphic-app-tutorial-react-js-react-router-node-js-ssr-with-state-and-es6-797a8d8e493a
const app = express();
const assets = express.static(path.join(__dirname, '../dist'));

app.use(assets);

const port = process.env.PORT || 80;

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
