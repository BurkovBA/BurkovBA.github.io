import React from 'react';
import {Route, Link, Redirect, Switch} from 'react-router-dom';


// import Progress from 'components/Progress';
import PropsRoute from 'components/PropsRoute.jsx'
import Navigation from 'components/Navigation/index.jsx';
import Header from 'components/Header/index.jsx';
import Footer from 'components/Footer/index.jsx';
import HidePostsInRussianModal from 'components/HidePostsInRussianModal/index.jsx';

import Home from 'pages/Home.jsx';
import Blog from 'pages/Blog.jsx';
import Post from 'pages/Post.jsx';

// import all blog posts (second argument means recursively)
let posts = {};
let context = require.context("./posts", true, /\.jsx/);

context.keys().forEach(function (path) {
  let id = path.match(/\d{4}-\d{2}-\d{2}-\d/);
  posts[id] = context(path);
});

// // import metadata of blog posts
// let posts = [];
// let context = require.context("./posts", true, /\.jsx/);
//
// context.keys().forEach(function (path) {
//   let id = path.match(/\d{4}-\d{2}-\d{2}-\d/);
//   posts.push(context(path).metadata);
// });


class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: posts,
      category: null,
      hideRuPostsModalOpen: false,
    };

    this.onHideRuPostsModalClose = this.onHideRuPostsModalClose.bind(this);
  }

  render() {
    return [
      <Header key="Header" />,
      <Navigation
          location={this.props.location}
          key="Navigation"
          onEnglishClick={ () => this.setState({hideRuPostsModalOpen: true })}
          onRussianClick={ () => this.filterPosts() }
      />,
      <div id="wrapper" key="div">
        <div className="content content-boxed">
          <Switch>
            <PropsRoute exact path="/blog" component={Blog} posts={ this.state.posts } />
            <PropsRoute path="/blog/:id" component={Post} posts={ this.state.posts } />
            {/*<Route exact path="/about" component={About} />*/}
            <Redirect to="/blog" />
          </Switch>
        </div>
        <HidePostsInRussianModal show={this.state.hideRuPostsModalOpen} onClose={this.onHideRuPostsModalClose} />
      </div>
    ]
  }

  componentDidMount() {
    let self = this;

    self.filterPosts();

    $(window).bind("load", function () {
      // Remove splash screen after load
      $('.splash').css('display', 'none')
    });

    // Run correctHeight function on load and resize window event
    $(window).bind("load resize", function() {

      // Set minimal height of #wrapper to fit the window
      self.correctHeight();

      // Add special class to minimalize page elements when screen is less than 769px
      self.detectBody();
    });

    // Correct height of wrapper after metisMenu animation.
    $('.metismenu a').click(() => {
      setTimeout(() => { self.correctHeight(); }, 300)
    });
  }

  correctHeight() {
    // Get and set current height
    let headerHeight = 55;
    let navigationHeight = $("#navigation").height();
    let contentHeight = $(".content").height();

    // Set new height when content height is less then navigation
    if (contentHeight < navigationHeight) {
        $("#wrapper").css("min-height", navigationHeight + 'px');
    }

    // Set new height when content height is less then navigation and navigation is less then window
    if (contentHeight < navigationHeight && navigationHeight < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerHeight + 'px');
    }

    // Set new height when content is higher then navigation but less then window
    if (contentHeight > navigationHeight && contentHeight < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerHeight + 'px');
    }
  }

  /**
   * Sets .body-small class on body, if width is smaller than 769px
   */
  detectBody() {
    if ($(document).width() < 769) {
        $('body').addClass('page-small');
    } else {
        $('body').removeClass('page-small');
        $('body').removeClass('show-sidebar');
    }
  }

  filterPosts() {
    let postsToFilter = posts;
    let filteredPosts = {};

    let category = this.getCategory();

    // filter only those posts that belong to this category
    if (category) {
      for (let [id, post] of Object.entries(postsToFilter)) {
        if (post.metadata.categories.indexOf(category) !== -1) filteredPosts[id] = post;
      }
    } else {
      filteredPosts = postsToFilter;
    }

    // filter-out posts in russian, if this option is set
    postsToFilter = filteredPosts;
    filteredPosts = {};
    try {
      let language = localStorage.getItem('language');
      let hidePostsInRussian = localStorage.getItem('hidePostsInRussian');
      if (language !== 'ru' && hidePostsInRussian) {
        for (let [id, post] of Object.entries(postsToFilter)) {
          if (!(post.metadata.language === 'ru')) filteredPosts[id] = post;
        }
      } else {
        filteredPosts = postsToFilter;
      }
    } catch (err) {
      filteredPosts = postsToFilter;
    }

    // order posts by date - which actually corresponds to lexicographical order
    // orderedPosts = filteredPosts.sort((a, b) => { return b.id.localeCompare(a.id) });

    this.setState({posts: filteredPosts});
  }

  onHideRuPostsModalClose() {
    this.filterPosts();
    this.setState({hideRuPostsModalOpen: false});
  }

  getCategory(category) {
    // get category from get params, if any
    const search = this.props.location.search; // url search params, something like '?category=music'
    const params = new URLSearchParams(search);
    return params.get('category');
  }

}

export default Layout;
