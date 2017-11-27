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
              <i className="pe-7s-keypad"></i>
            </a>
            <div uib-dropdown-menu className="hdropdown bigmenu animated flipInX">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a ui-sref="app_views.projects">
                        <i className="pe pe-7s-portfolio text-info"></i>
                        <h5>Projects</h5>
                      </a>
                    </td>
                    <td>
                      <a ui-sref="app_views.mailbox">
                        <i className="pe pe-7s-mail text-warning"></i>
                        <h5>Email</h5>
                      </a>
                    </td>
                    <td>
                      <a ui-sref="app_views.contacts">
                        <i className="pe pe-7s-users text-success"></i>
                        <h5>Contacts</h5>
                      </a>
                    </td>
                  </tr>
                <tr>
                  <td>
                    <a ui-sref="app_views.forum">
                      <i className="pe pe-7s-comment text-info"></i>
                      <h5>Forum</h5>
                    </a>
                  </td>
                  <td>
                    <a ui-sref="analytics">
                      <i className="pe pe-7s-graph1 text-danger"></i>
                      <h5>Analytics</h5>
                    </a>
                  </td>
                  <td>
                    <a ui-sref="app_views.file_manager">
                      <i className="pe pe-7s-box1 text-success"></i>
                      <h5>Files</h5>
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
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
