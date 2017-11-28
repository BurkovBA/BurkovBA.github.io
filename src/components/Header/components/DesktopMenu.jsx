import React from 'react';
import { Dropdown } from 'react-bootstrap';

class DesktopMenu extends React.Component {
  render() {
    return (
      <div className="navbar-right">
        <ul className="nav navbar-nav no-borders">
          <li uib-dropdown ng-if="Auth.isLoggedIn()">
            <a className="label-menu-corner" href="#" uib-dropdown-toggle>
              <i className="pe-7s-drawer"></i>
              {/*{notifications.length && (<span className="label label-success">{notifications.length}</span>)}*/}
            </a>
            {/*<ul uib-dropdown-menu notifications className="hdropdown animated flipInX" ng-scrollbars ng-scrollbars-config="scrollbarsConfig"></ul>*/}
          </li>

          <li uib-dropdown ng-if="Auth.isLoggedIn()">
            <a href="#" uib-dropdown-toggle>
              <i className="pe-7s-user"></i>
            </a>
            <ul uib-dropdown-menu className="hdropdown animated flipInX">
              <div className="title">
                Account menu
              </div>
              <li>
                <a href="https://mybg.devbg.us/user/profile">
                  <i className="pe pe-7s-edit"></i> &nbsp;&nbsp; Account settings
                </a>
              </li>
              <li>
                <a ng-click="Auth.logout()">
                  <i className="pe pe-7s-next-2"></i> &nbsp;&nbsp;&nbsp; Sign out
                </a>
              </li>
            </ul>
          </li>

          <li ng-if="!Auth.isLoggedIn()">
            <a ng-click="login()">
              <i className="pe-7s-upload pe-rotate-90"></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default DesktopMenu;
