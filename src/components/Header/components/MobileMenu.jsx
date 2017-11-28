import React from 'react';
import { Dropdown } from 'react-bootstrap';

class MobileMenu extends React.Component {
  render() {
    return (
      <div className="mobile-menu">
        <button type="button" className="navbar-toggle mobile-menu-toggle">
          <i className="fa fa-chevron-down"></i>
        </button>
        <div uib-collapse="collapseMobileMenu" className="collapse mobile-navbar">
          <ul className="nav navbar-nav">
            <li ng-if="!Auth.isLoggedIn()">
              <a ng-click="login()">Login</a>
            </li>
            <li ng-if="Auth.isLoggedIn()">
              <a ng-click="Auth.logout()">Logout</a>
            </li>
            <li ng-if="Auth.isLoggedIn()">
              <a href="https://mybg.devbg.us/user/profile">Settings</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MobileMenu;
