const photo = require('images/burkov_boris_web.jpg');
import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router-dom';

class Navigation extends Component {

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

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  secondLevelActive(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
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
              <span className="font-extra-bold font-uppercase">Борис Бурков</span>
              <div className="dropdown">
                <a href="/about">
                  <small className="text-muted">Обо мне</small>
                </a>
              </div>
            </div>
          </div>

          <ul className="nav" id="side-menu">
            <li className={this.activeRoute("/blog?category=how-life-works")}>
              <Link to="/blog?category=how-life-works" onClick={() => window.location.reload()}><span className="nav-label">Как устроена жизнь</span></Link>
            </li>
            <li className={this.activeRoute("/blog?category=software-engineering")}>
              <Link to="/blog?category=software-engineering" onClick={() => window.location.reload()}><span className="nav-label">Программирование</span></Link>
            </li>
            <li className={this.activeRoute("/blog?category=business")}>
              <Link to="/blog?category=business"><span className="nav-label" onClick={() => window.location.reload()}>Бизнес</span></Link>
            </li>
            <li className={this.activeRoute("/blog?category=economy")}>
              <Link to="/blog?category=economy"><span className="nav-label" onClick={() => window.location.reload()}>Экономика</span></Link>
            </li>
            <li className={this.activeRoute("/blog?category=biomed")}>
              <Link to="/blog?category=biomed"><span className="nav-label" onClick={() => window.location.reload()}>Биология и медицина</span></Link>
            </li>
            <li className={this.activeRoute("/blog?category=math")}>
              <Link to="/blog?category=math"><span className="nav-label" onClick={() => window.location.reload()}>Математика</span></Link>
            </li>
            <li className={this.activeRoute("/blog?category=music")}>
              <Link to="/blog?category=music"><span className="nav-label" onClick={() => window.location.reload()}>Музыка</span></Link>
            </li>
            <li className={this.activeRoute("/blog?category=history")}>
              <Link to="/blog?category=history"><span className="nav-label" onClick={() => window.location.reload()}>История</span></Link>
            </li>
            <li className={this.activeRoute("/blog?category=people")}>
              <Link to="/blog?category=people"><span className="nav-label" onClick={() => window.location.reload()}>Люди</span></Link>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Navigation;
