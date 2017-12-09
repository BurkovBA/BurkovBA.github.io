import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router-dom';

import tr from 'services/translate.jsx';

require('./index.scss');
const photo = require('images/burkov_boris_web.jpg');


class Navigation extends Component {
  constructor(props){
    super(props);
    this.selectLanguage = this.selectLanguage.bind(this);
  }

  componentDidMount() {
    const { menu } = this.refs;
    $(menu).metisMenu();

    // Collapse menu in mobile mode after click on element
    let menuElement = $('#side-menu a:not([href$="\\#"])');
    menuElement.click(function(){
      if ($(window).width() < 769) {
        $("body").toggleClass("show-sidebar");
      }
    });
  }

  selectLanguage(language) {
    if (language === 'en') {
      localStorage.setItem('language', 'en');
      // TODO: if it's english, ask if user wants to hide posts in russian
      this.props.onEnglishClick();
    }
    else if (language === 'ru') {
      localStorage.setItem('language', 'ru');
    }

    this.forceUpdate();
  }

  activeRoute(routeName) {
    let pathnameAndSearch = this.props.location.pathname + this.props.location.search;
    return pathnameAndSearch === routeName ? "active" : "";
  }

  secondLevelActive(routeName) {
    let pathnameAndSearch = this.props.location.pathname + this.props.location.search;
    return pathnameAndSearch.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  }

  render() {
    return (
      <aside id="menu">
        <div id="navigation">
          <div className="profile-picture">
            <a href="/">
              <img src={photo} className="img-circle m-b" alt="logo" />
            </a>

            <div className="stats-label text-color">
              <span className="font-extra-bold font-uppercase">{tr('Boris Burkov')}</span>
              <div className="dropdown">
                <a href="/about">
                  <small className="text-muted">{tr('About me')}</small>
                </a>
              </div>
            </div>
          </div>

          <div>
            <Link to="/blog" onClick={() => window.location.reload()} className="language-link text-center nav-label">{tr('All')}</Link>
            <div onClick={ () => this.selectLanguage('en') } className="language-link text-center">
              <span className="flag-icon flag-icon-us flag-icon-squared" />
            </div>
            <div onClick={ () => this.selectLanguage('ru') } className="language-link text-center">
              <span className="flag-icon flag-icon-ru flag-icon-squared" />
            </div>
          </div>

          <ul className="nav" id="side-menu">
            <li className={`${this.activeRoute("/blog?category=how-life-works")} hwhite`}>
              <Link to="/blog?category=how-life-works" onClick={() => window.location.reload()}><span className="nav-label">{tr('how-life-works')}</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=software-engineering")} hred`}>
              <Link to="/blog?category=software-engineering" onClick={() => window.location.reload()}><span className="nav-label">{tr('programming')}</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=business")} hreddeep`}>
              <Link to="/blog?category=business" onClick={() => window.location.reload()}><span className="nav-label">{tr('business')}</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=economy")} hyellow`}>
              <Link to="/blog?category=economy" onClick={() => window.location.reload()}><span className="nav-label">{tr('economy')}</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=biomed")} hgreen`}>
              <Link to="/blog?category=biomed" onClick={() => window.location.reload()}><span className="nav-label">{tr('biomed')}</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=math")} hnavyblue`}>
              <Link to="/blog?category=math" onClick={() => window.location.reload()}><span className="nav-label">{tr('mathematics')}</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=music")} hblue`}>
              <Link to="/blog?category=music" onClick={() => window.location.reload()}><span className="nav-label">{tr('music')}</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=history")} horange`}>
              <Link to="/blog?category=history" onClick={() => window.location.reload()}><span className="nav-label">{tr('history')}</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=people")} hviolet`}>
              <Link to="/blog?category=people" onClick={() => window.location.reload()}><span className="nav-label">{tr('people')}</span></Link>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Navigation;
