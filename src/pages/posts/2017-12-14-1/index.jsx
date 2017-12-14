import React from 'react';


let metadata = {
  id: "2017-12-14-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "14.12.2017",
  language: "en",
  title: "Ship it!",
  subtitle: "BurkovBA,github.io online now",
  abstract: "It's been almost a year since I started telling people that I'll do a blog.\n" +
  "I've written it in Angular in early 2017 and have been re-writing everything in React for the last couple of weeks.\n" +
  "Probably the most challenging aspect of the whole work was to make Github pages play nice with React SPA - I'll tell you how.",
  cover: "https://shipitsquirrel.github.io/images/ship%20it%20squirrel.png",
  categories: ["software-engineering"],
  time_to_read: 10,
  views: "",
  comments: [],
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = metadata;

  }

  componentDidMount() {
    if (this.props.onload) this.props.onload(this.state);
  }

  render() {
    return (
      <div>
        <p>
          My blog makes use of a pretty minimalistic toolchain by modern standards:
            <ul>
              <li>React 16</li>
              <li>React Router v4</li>
              <li>Codebase scaffolded in spirit of this post from Medium (no create-react-app or Yeoman)</li>
              <li>No state management like Redux/Flux/MobX</li>
              <li>Scripts in EcmaScript 6 transpiled with Babel (no Flow or Typescript)</li>
              <li>Styles in SASS, copy-pasted from a nice Homer theme for Bootstrap 3</li>
              <li>NPM package.json for dependencies, no Yarn (or Bower obviously)</li>
              <li>NPM scripts to build it all (no Gulp/Grunt)</li>
              <li>Webpack 2 to bundle it all (with devServer for local development)</li>
              <li>Github pages to "host" and serve it</li>
            </ul>

        </p>
      </div>
    )
  }
}

export default Content;
export { metadata };