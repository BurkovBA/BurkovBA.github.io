import React from 'react';
import { Link, Location } from 'react-router-dom';
import tr from 'services/translate.jsx';

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
    let filteredPosts, orderedPosts;

    // get category from get params, if any
    const search = this.props.location.search; // url search params, something like '?category=music'
    const params = new URLSearchParams(search);
    const category = params.get('category');

    // filter only those posts that belong to this cathegory
    if (category) filteredPosts = posts.filter((post) => { return !(post.categories.indexOf(category) === -1) });
    else filteredPosts = posts;

    // filter-out posts in russian, if this option is set
    try {
      let language = localStorage.getItem('language');
      let hidePostsInRussian = localStorage.getItem('hidePostsInRussian');
      if (language !== 'ru' && hidePostsInRussian) {
          filteredPosts = filteredPosts.filter((post) => {
              return !(post.language === 'ru')
          });
      }
    } catch (err) {}

    // order posts by date - which actually corresponds to lexicographical order
    orderedPosts = filteredPosts.sort((a, b) => { return b.id.localeCompare(a.id) });

    this.setState({posts: orderedPosts})
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
                      <small><span className="font-bold">{ tr(post.author) }</span> </small>
                      <br />
                      <small className="text-muted"><i className="fa fa-calendar"> </i> { post.date_created }</small>
                    </span>
                    <span className="pull-right">
                      <small><i className="fa fa-clock-o"> </i> {tr('Time to read')}: { post.time_to_read } min</small>
                      <br />
                      <small>{ post.categories.map((category, index) =>
                        <span key={category}>
                          <span>{ !!index && ' ' }</span>
                          <span className={`label label-${category}`}>{ tr(category) }</span>
                        </span>
                      )}
                      </small>
                      {/*<small><i className="fa fa-eye"> </i> Просмотров: 62 </small>*/}
                      {/*<br />*/}
                      {/*<small><i className="fa fa-comments-o"> </i> Комментариев: 10</small>*/}
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
                <Link to={`/blog/${post.id}`}> <h4>{tr('Continue')}...</h4></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Blog
