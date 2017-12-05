import React from 'react';
import { Link, Location } from 'react-router-dom';

require("pages/Blog.scss");

// import metadata of blog posts
let posts = [];
let context = require.context("./posts", true, /\.jsx/);

context.keys().forEach(function (path) {
  let id = path.match(/\d{4}-\d{2}-\d{2}-\d/);
  posts.push(context(path).metadata);
});


class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: posts
    };
  }

  componentDidMount() {
    // do ajax requests with following setState invocation, e.g.:
    // http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react/
  }

  componentWillUnmount() {
    // abort any ajax here
  }

  render() {
    return (
      <div className="row">
        { this.state.posts.map((post) =>
          <div key={post.id} className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="hpanel blog-box">
              <div className="panel-heading">
                <div className="media clearfix">
                  <a className="pull-left">
                    <img src={ post.authors_avatar } alt="profile-picture" />
                  </a>
                  <div className="media-body">
                    <span className="post-authorship">
                      <small><span className="font-bold">{ post.author }</span> </small>
                      <br />
                      <small className="text-muted"><i className="fa fa-calendar"> </i> { post.date_created }</small>
                    </span>
                    <span className="pull-right">
                      <small><i className="fa fa-eye"> </i> Просмотров: 62 </small>
                      <br />
                      <small><i className="fa fa-comments-o"> </i> Комментариев: 10</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="panel-image">
                <img className="img-responsive" src={ post.cover } alt="" />
                <div className="title">
                  <Link to={`/blog/${post.id}`}> <h4>{ post.title }</h4></Link>
                  <small>{ post.subtitle }</small>
                </div>
              </div>
              <div className="panel-body">
                <p>
                  { post.abstract }
                </p>
                <Link to={`/blog/${post.id}`}> <h4>Продолжение...</h4></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Blog
