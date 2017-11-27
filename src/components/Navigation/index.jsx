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
        return [
            <div className="profile-picture">
                <a href="index.html">
                    <img src="/src/images/burkov_boris_web.jpg" className="img-circle m-b" alt="logo"></img>
                </a>

                <div className="stats-label text-color">
                    <span className="font-extra-bold font-uppercase">Борис Бурков</span>

                    <div className="dropdown">
                        <a href="/about">
                            <small className="text-muted">Обо мне</small>
                        </a>
                    </div>
                </div>
            </div>,

            <ul className="nav" id="side-menu">
                <li className={this.activeRoute("/main")}>
                    <Link to="/world"><i className="fa fa-th-large"></i> <span className="nav-label">Как работает мир</span></Link>
                </li>
                <li className={this.activeRoute("/software-engineering")}>
                    <Link to="/software-engineering"><i className="fa fa-th-large"></i> <span className="nav-label">Программирование</span></Link>
                </li>
                <li className={this.activeRoute("/economy")}>
                    <Link to="/economy"><i className="fa fa-th-large"></i> <span className="nav-label">Экономика и бизнес</span></Link>
                </li>
                <li className={this.activeRoute("/biomed")}>
                    <Link to="/biomed"><i className="fa fa-th-large"></i> <span className="nav-label">Биология и медицина</span></Link>
                </li>
                <li className={this.activeRoute("/music")}>
                    <Link to="/music"><i className="fa fa-th-large"></i> <span className="nav-label">Музыка</span></Link>
                </li>
                <li className={this.activeRoute("/history")}>
                    <Link to="/history"><i className="fa fa-th-large"></i> <span className="nav-label">История</span></Link>
                </li>
                <li className={this.activeRoute("/diary")}>
                    <Link to="/diary"><i className="fa fa-th-large"></i> <span className="nav-label">Дневник</span></Link>
                </li>
            </ul>
        ];
    }
}

export default Navigation
