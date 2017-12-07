import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router-dom';

require('./index.scss');
const photo = require('images/burkov_boris_web.jpg');


class Navigation extends Component {
  constructor(props) {
    super(props);

    this.setState({});

    this.translate = this.translate.bind(this);
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

    if (localStorage.getItem('language')) {
      this.setState({language: localStorage.getItem('language')});
    } else {
      this.setState({language: 'en'});
    }
  }

  selectLanguage(language) {
    if (language === 'en') {
      localStorage.setItem('language', 'en');
      this.setState({language: 'en'});

      // if it's english, ask if user wants to hide posts in russian
    }
    else if (language === 'ru') {
      localStorage.setItem('language', 'ru');
      this.setState({language: 'ru'});
    }
  }

  tr(word) {
    let words = {
      'Boris Burkov': 'Борис Бурков',
      'About me': 'Обо мне',
      'All': 'Все',
      'How life works': 'Как устроена жизнь',
      'Programming': 'Программирование',
      'Business': 'Бизнес',
      'Economy': 'Экономика',
      'Biology and medicine': 'Биология и медицина',
      'Mathematics': 'Математика',
      'Music': 'Музыка',
      'History': 'История',
      'People': 'Люди'
    };

    if (words.keys().index(word) !== -1) {
      if (this.state.language === 'en') return word;
      else if (this.state.language === 'ru') return words[word];
    } else {
      console.log(`No word ${word} in translations list`);
    }
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
              <span className="font-extra-bold font-uppercase">Борис Бурков</span>
              <div className="dropdown">
                <a href="/about">
                  <small className="text-muted">Обо мне</small>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="language-link text-center">
              <Link to="/blog" onClick={() => window.location.reload()} className="nav-label">Все</Link>
            </div>
            <div className="language-link text-center">
              <span onClick={ this.selectLanguage('en') } className="flag-icon flag-icon-us flag-icon-squared" />
            </div>
            <div className="language-link text-center">
              <span onClick={ this.selectLanguage('ru') } className="flag-icon flag-icon-ru flag-icon-squared" />
            </div>
          </div>

          <ul className="nav" id="side-menu">
            <li className={`${this.activeRoute("/blog?category=how-life-works")} hwhite`}>
              <Link to="/blog?category=how-life-works" onClick={() => window.location.reload()}><span className="nav-label">Как устроена жизнь</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=software-engineering")} hred`}>
              <Link to="/blog?category=software-engineering" onClick={() => window.location.reload()}><span className="nav-label">Программирование</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=business")} hreddeep`}>
              <Link to="/blog?category=business" onClick={() => window.location.reload()}><span className="nav-label">Бизнес</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=economy")} hyellow`}>
              <Link to="/blog?category=economy" onClick={() => window.location.reload()}><span className="nav-label">Экономика</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=biomed")} hgreen`}>
              <Link to="/blog?category=biomed" onClick={() => window.location.reload()}><span className="nav-label">Биология и медицина</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=math")} hnavyblue`}>
              <Link to="/blog?category=math" onClick={() => window.location.reload()}><span className="nav-label">Математика</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=music")} hblue`}>
              <Link to="/blog?category=music" onClick={() => window.location.reload()}><span className="nav-label">Музыка</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=history")} horange`}>
              <Link to="/blog?category=history" onClick={() => window.location.reload()}><span className="nav-label">История</span></Link>
            </li>
            <li className={`${this.activeRoute("/blog?category=people")} hviolet`}>
              <Link to="/blog?category=people" onClick={() => window.location.reload()}><span className="nav-label">Люди</span></Link>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Navigation;
