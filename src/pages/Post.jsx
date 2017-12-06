require('pages/Post.scss');
import React from 'react';

// import all blog posts (second argument means recursively)
let posts = {};
let context = require.context("./posts", true, /\.*/);

context.keys().forEach(function (path) {
  let id = path.match(/\d{4}-\d{2}-\d{2}-\d/);
  console.log(id);
  posts[id] = context(path);
});


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

    this.onContentLoad = this.onContentLoad.bind(this);
  }

  componentWillMount() {
    let self = this;

    // do ajax requests with following setState invocation, e.g.:
    // http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react/
    self.setState({
      id: this.props.match.params.id,
      post: posts[this.props.match.params.id].default
    });

    self.initializeDisqus();
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

  /**
   * This method runs when Content is loaded to pass state from it to Post.
   */
  onContentLoad(state) {
    this.setState(state);
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
              </div>
              <div className="text-muted">
                Автор: <span className="font-bold">{ this.state.author }</span>
              </div>
              <div className="text-muted">
                Дата: <span className="font-bold">{ this.state.date_created }</span>
              </div>
            </div>
              <div className="panel-body">
                <this.state.post onload={this.onContentLoad} />
              </div>
              <div className="panel-footer">
                <span className="pull-right">
                  <i className="fa fa-comments-o"> </i> 22 comments
                </span>
                <i className="fa fa-eye"> </i> 142 views
              </div>
          </div>
        </div>
        <div id="disqus_thread"></div>
      </div>
    )
  }
}

export default Post
