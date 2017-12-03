import React from 'react';
import {Route, Link, Redirect, Switch} from 'react-router-dom';

// import Progress from 'components/Progress';
import Navigation from 'components/Navigation/index.jsx';
import Header from 'components/Header/index.jsx';
import Footer from 'components/Footer/index.jsx';

import Home from 'pages/Home.jsx';
import Blog from 'pages/Blog.jsx';

class Layout extends React.Component {
  render() {
    return [
      <Header key="Header" />,
      <Navigation location={this.props.location} key="Navigation" />,
      <div id="wrapper" key="div">
        <div className="content content-boxed">
          <Switch>
            <Route exact path="/blog" component={Blog} />
            {/*<Route exact path="/about" component={About} />*/}
            <Redirect to="/blog" />
          </Switch>
        </div>
      </div>,
      <Footer key="Footer" />
    ]
  }

  componentDidMount() {
    let self = this;

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

}

export default Layout;
