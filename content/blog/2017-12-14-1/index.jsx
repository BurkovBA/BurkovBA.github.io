import React from 'react';
import Gist from 'react-gist-burkov';

let Squirrel = require('./2016-12-27-151422.png');


let metadata = {
  id: "2017-12-14-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "14.12.2017",
  language: "en",
  title: "BurkovBA,github.io is online!",
  subtitle: "How to serve your React SPA from Github pages",
  abstract: "I've been procrastinating over my blog for almost a year.\n" +
  "Initially I wrote it in Angular in early 2017 and re-wrote everything in React in the last couple of weeks.\n" +
  "At last, following Github's \"ship early - ship often\" motto, I shipped it today.\n" +
  "Probably the most challenging aspect of the whole work was to make Github pages play nice with React SPA - I'll tell you how in this post.",
  cover: Squirrel,
  categories: ["programming", ],
  time_to_read: 10,
  views: "",
  comments: [],
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = metadata;

  }

  render() {
    return (
      <div>
        <p>
          My blog makes use of a pretty minimalistic toolchain by modern standards:
        </p>
        <ul>
          <li>React 16</li>
          <li>React Router v4</li>
          <li>Codebase scaffolded in spirit of this <a href="https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1">post from Medium</a> (no create-react-app or Yeoman)</li>
          <li>No state management like Redux/Flux/MobX</li>
          <li>Scripts in EcmaScript 6 transpiled with Babel (no Flow or Typescript)</li>
          <li>Styles in SASS, copy-pasted from a nice <a href="http://webapplayers.com/homer_admin-v2.0/components.html">Homer theme for Bootstrap 3</a></li>
          <li>NPM package.json for dependencies, no Yarn (or Bower obviously)</li>
          <li>NPM scripts to build it all (no Gulp/Grunt)</li>
          <li>Webpack 2 to bundle it all (with devServer for local development)</li>
          <li>Github pages to "host" and serve it</li>
        </ul>
        <p>
          Project needs to be served in 2 environments. In development it needs to be rebuilt upon every change (or, to
          be precise, each part of it that )
          and served from local machine with WebpackDevServer. In production it is served with with Github pages web server.
        </p>
        <p>
          This causes several problems.
        </p>
        <img className="img-responsive center-block" src="https://shipitsquirrel.github.io/images/ship%20it%20squirrel.png" />
        <h3>
          How to serve <code>index.html</code> not from project root, but from <code>/dist</code> or <code>/build</code> folder?
        </h3>
        <p>
          My webpack setup works as follows: all the source files are located in <code>/src</code> folder, while files generated
          from them go to <code>/dist</code>. Those initially included <code>/dist/index.html</code>, generated from a template
          in <code>/src/index.html</code> by HtmlWebpackPlugin.
        </p>
        <p>
          Thing is, Github pages won't serve <code>index.html</code> from subdirectory and there's no way to customize its location
          for per-user or per-organisation sites (although, per-repository sites can serve files from <code>/docs</code>
          folder). Also project github pages can serve files from branches other than master, e.g. <code>gh-pages</code> branch,
          but again this is not an option for per-user or per-organiation sites.
        </p>
        <p>
          Thus my first solution was to create a proxy <code>/index.html</code> file in root folder of repository that
          redirected to <code>/dist/index.html</code>
        </p>
        <pre>{`<html>
  <head>
    <meta http-equiv="refresh" content="0; url=https://BurkovBA.github.io/dist/index.html" />
  </head>
</html>`}</pre>
        <p>
          However, this solution is not optimal: if somebody wanted to share a url, such as <a href="BurkovBA.github.io/blog/2017-12-14-1">BurkovBA.github.io/blog/2017-12-14-1</a>,
          they'll get 404 error.
        </p>
        <p>
          Hence, in production I configured HtmlWebpackPlugin to put the built <code>index.html</code> into the root
          folder instead of <code>/dist</code>, but that required additional tweaks of WebpackDevServer, which expected
          it in dist. Thus I had to create a conditional build and set configuration variables in webpack.
        </p>
        <img className="img-responsive center-block" src="https://shipitsquirrel.github.io/images/squirrel.png" />
        <h3>
          How to run different webpack configurations for production and development?
        </h3>
        <p>
          Webpack 2 can consume environment variables from command line, in the form of arguments <code>--env.variable</code>. I
          use them to conditionally switch some webpack configuration settings in production/development in npm scripts.
        </p>
        <div>
          <Gist id="c4caded6a26b0f85118419a28306915f" />
        </div>
        <h3>
          How to make Github serve direct links to SPA pages (e.g. <a href="BurkovBA.github.io/blog/2017-12-14-1">BurkovBA.github.io/blog/2017-12-14-1</a>)?
        </h3>
        <p>
          Ok, this still doesn't solve the problem of direct links. I found <a href="https://github.com/rafrex/spa-github-pages">a brilliant solution on Github by Rafael Pedicini</a>.
        </p>
        <p>
          It works as follows: when you request some url of your SPA, which doesn't correspond to any file in your
          repository, Github server returns 404 error.
        </p>
        <p>
          Here's the catch: you can customize your <code>404.html</code> page! So, you create a custom 404 error with
          a script. That script parses url that you passed, transforms path components into URL params (aka GET params) and
          redirects to <code>index.html</code>. For instance, <code>https://BurkovBA.github.io/blog?category=programming</code> is
          transformed into <code>https://BurkovBA.github.io?p=blog&category=programming</code>. <code>index.html</code> parses
          this path <code>p</code> parameter back into a proper URL and initializes React SPA.
        </p>

      </div>
    )
  }
}

export default Content;
export { metadata };