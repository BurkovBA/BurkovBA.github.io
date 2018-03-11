import React from 'react';
import {Link} from 'react-router-dom';

import tr from 'services/translate.jsx';
require('pages/Post.scss');


class Post extends React.Component {
  constructor(props) {
    super(props);

    // get next and previous posts
    let sortedPostIds = Object.keys(this.props.posts);  // should be sorted by default
    let postIndex = sortedPostIds.indexOf(this.props.match.params.id);
    let nextPost = this.props.posts[sortedPostIds[postIndex+1]];
    let previousPost = this.props.posts[sortedPostIds[postIndex-1]];

    let post = this.props.posts[this.props.match.params.id].default;
    let metadata = this.props.posts[this.props.match.params.id].metadata;

    this.state = {
      id: this.props.match.params.id,
      post: post,
      previousPost: previousPost,
      nextPost: nextPost,

      author: metadata.author,
      authors_avatar: metadata.authors_avatar,
      date_created: metadata.date_created,
      title: metadata.title,
      subtitle: metadata.subtitle,
      abstract: metadata.abstract,
      cover: metadata.cover,
      categories: metadata.categories,
      views: metadata.views,
      comments: metadata.comments
    };

  }

  componentWillMount() {
    // or do ajax requests with following setState invocation, e.g.:
    // http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react/
  }

  componentDidMount() {
    this.initializeDisqus();
  }

  initializeDisqus() {
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */

    // DON'T EDIT BELOW THIS LINE
    let d = document, s = d.createElement('script');
    s.src = 'https://burkovba.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  render () {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="hpanel blog-article-box">
            <div className="panel-heading blog-panel-heading">
              {/*<a className="pull-left">*/}
                {/*<img src={this.state.authors_avatar} />*/}
              {/*</a>*/}
              <div className="panel-image">
                <img className="img-responsive center-block" src={ this.state.cover } alt="" />
                <div className="title">
                  <h4>{ this.state.title }</h4>
                  <span className="font-bold">{ this.state.subtitle }</span>
                </div>
                <div className="metadata">
                  <div>{ tr('Author') }: { tr(this.state.author) }</div>
                  <div>{ tr('Date') }: { this.state.date_created }</div>
                  <div>{ tr('Time to read')}: {this.state.time_to_read} min</div>
                  <div>{ tr('Categories')}:</div>
                  <div><small>{ this.state.categories.map((category, index) =>
                    <span key={category}>
                      <span>{ !!index && ' ' }</span>
                      <span className={`label label-${category}`}>{ tr(category) }</span>
                    </span>
                  )}</small></div>
                </div>
              </div>
            </div>
              <div className="panel-body">
                <p className="abstract">
                  { this.state.abstract }
                </p>
                <hr />
                <this.state.post />
              </div>
              <div className="panel-footer clearfix">
                {/*<span className="pull-right">*/}
                  {/*<i className="fa fa-comments-o"> </i> 22 comments*/}
                {/*</span>*/}
                {/*<i className="fa fa-eye"> </i> 142 views*/}
                <div className="col-xs-4 text-center">
                  { this.state.previousPost &&
                    <span>{ tr('Previous post') }:<br />
                      <Link to={`/blog/${this.state.previousPost.metadata.id}`} onClick={() => window.location.reload()}>{this.state.previousPost.metadata.title}</Link>
                    </span>
                  }
                </div>
                <div className="col-xs-4 text-center">
                  <Link to={`/blog`} onClick={() => window.location.reload()}>{tr('All posts')}</Link>
                </div>
                <div className="col-xs-4 text-center">
                  { this.state.nextPost &&
                    <span>{ tr('Next post') }:<br />
                      <Link to={`/blog/${this.state.nextPost.metadata.id}`} onClick={() => window.location.reload()}>{this.state.nextPost.metadata.title}</Link>
                    </span>
                  }
                </div>
              </div>
          </div>
        </div>
        <div id="disqus_thread"></div>
      </div>
    )
  }
}

export default Post
