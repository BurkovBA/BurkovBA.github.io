import React from 'react';
import { Dropdown } from 'react-bootstrap';
import MobileMenu from "components/Header/components/MobileMenu.jsx";
import DesktopMenu from "components/Header/components/DesktopMenu.jsx";

class Header extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
    }

    render() {
        return [
            <div className="color-line"></div>,
            <div id="logo" className="light-version">
                    <span>
                        Burkov<font color="red">.net</font>
                    </span>
            </div>,
            <nav role="navigation">
                <MinimalizaMenu/>
                <div className="small-logo">
                    <span className="text-primary">Burkov<font color="red">.net</font><br/></span>
                </div>
                <form role="search" className="navbar-form-custom" method="post" action="#">
                    <div className="form-group">
                        <input type="text" placeholder="Find ..." className="form-control" name="search"/>
                    </div>
                </form>
                <MobileMenu/>
                <DesktopMenu/>
            </nav>,

            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={this.toggleNavigation} href="#"><i className="fa fa-bars"></i> </a>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <a href="#">
                                <i className="fa fa-sign-out"></i> Log out
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        ];
    }
}

export default Header






