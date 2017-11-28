import React from 'react';
import { Dropdown } from 'react-bootstrap';
import MobileMenu from "components/Header/components/MobileMenu.jsx";
import DesktopMenu from "components/Header/components/DesktopMenu.jsx";
import MinimalizeMenu from "components/Header/components/MinimalizeMenu.jsx";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="color-line"></div>,
        <div id="logo" className="light-version">
          <span>
            Burkov<font color="red">.net</font>
          </span>
        </div>,
        <nav role="navigation">
          <MinimalizeMenu/>
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
        </nav>
      </div>
    )
  }
}

export default Header;






