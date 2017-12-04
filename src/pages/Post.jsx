require('pages/Post.scss');
import React from 'react';


class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "author": "",
      "authors_avatar": "",
      "date_created": "",
      "title": "",
      "subtitle": "",
      "abstract": "",
      "cover": "",
      "categories": [],
      "views": "",
      "comments": [],
    };
  }

  componentDidMount() {
    let self = this;

    // do ajax requests with following setState invocation, e.g.:
    // http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react/
    let id = this.props.match.params.id;

    // in production we want JSON to be served from github pages:
    // https://stackoverflow.com/questions/39199042/serve-json-data-from-github-pages
    // in development it's got to be served by webpackDevServer locally
    let url = '/api/' + id;

    self.promise = $.ajax({url: url});
    self.promise.then(
      (data) => { self.setState(JSON.parse(data)); },
      () => {console.log("Rejected");
    });
  }

  componentDidUpdate() {
    // better call this than setState callback
    // console.log("componentDidUpdate() called");
    // console.log("setState callback called, self.state = ", self.state);
  }

  componentWillUnmount() {
    // abort any ajax here
    self.promise.abort();
  }

  render () {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="hpanel blog-article-box">
            <div className="panel-heading">
              <a className="pull-left">
                <img src={this.state.authors_avatar} />
              </a>
              <h4>{ this.state.title }</h4>
              <span className="font-bol">{ this.state.subtitle }</span>
              <div className="text-muted">
                Автор: <span className="font-bold">{ this.state.author }</span>
              </div>
              <div className="text-muted">
                Дата: <span className="font-bold">{ this.state.date_created }</span>
              </div>
              <br />
              <img className="post-cover" src={ this.state.cover } alt="" />
            </div>
              <div className="panel-body">
                { this.state.children }
              </div>
              <div className="panel-footer">
                <span className="pull-right">
                  <i className="fa fa-comments-o"> </i> 22 comments
                </span>
                <i className="fa fa-eye"> </i> 142 views
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
