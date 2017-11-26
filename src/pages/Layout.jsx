import React from 'react';
import {Route, Link, Redirect, Switch} from 'react-router-dom';

// import Progress from 'components/Progress';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/Home.jsx';
import About from 'pages/About.jsx';
import Data from 'pages/Data.jsx';
import People from 'pages/People.jsx';
import Organizations from 'pages/Organizations.jsx';
import News from 'pages/News.jsx';

class Layout extends React.Component {
  render() {
    var wrapperClass = "gray-bg " + this.props.location.pathname;
    return (
      <div id="wrapper">
        {/*<Progress />*/}
        <Navigation location={this.props.location}/>

        <div id="page-wrapper" className={wrapperClass}>

          <Header />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/data" component={Data} />
              <Route exact path="/people" component={People} />
              <Route exact path="/organizations" component={Organizations} />
              <Route exact path="/news" component={News} />
              <Redirect to="/home" />
            </Switch>
          <Footer />

        </div>
      </div>
    )
  }

  componentDidMount() {
    var self = this;

    // Run correctHeight function on load and resize window event
    $(window).bind("load resize", function() {
      self.correctHeight();
      self.detectBody();
    });

    // Correct height of wrapper after metisMenu animation.
    $('.metismenu a').click(() => {
      setTimeout(() => { self.correctHeight(); }, 300)
    });
  }

  correctHeight() {
    var pageWrapper = $('#page-wrapper');
    var navbarHeight = $('nav.navbar-default').height();
    var wrapperHeight = pageWrapper.height();

    if (navbarHeight > wrapperHeight) { pageWrapper.css("min-height", navbarHeight + "px"); }

    if (navbarHeight <= wrapperHeight) {
      if (navbarHeight < $(window).height()) { pageWrapper.css("min-height", $(window).height() + "px"); }
      else { pageWrapper.css("min-height", navbarHeight + "px"); }
    }

    if ($('body').hasClass('fixed-nav')) {
      if (navbarHeight > wrapperHeight) { pageWrapper.css("min-height", navbarHeight + "px"); }
      else { pageWrapper.css("min-height", $(window).height() - 60 + "px"); }
    }
  }

  detectBody() {
    if ($(document).width() < 769) { $('body').addClass('body-small'); }
    else { $('body').removeClass('body-small'); }
  }

}

export default Layout;
