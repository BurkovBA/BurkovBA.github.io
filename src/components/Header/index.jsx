import React from 'react';
import { Dropdown } from 'react-bootstrap';

class Header extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
    }

    render() {
        return [
            <div class="color-line"></div>,
            <div id="logo" class="light-version">
                    <span>
                        Burkov<font color="red">.net</font>
                    </span>
            </div>,
            <nav role="navigation">
                    <minimaliza-menu></minimaliza-menu>
                <div class="small-logo">
                    <span class="text-primary">Burkov<font color="red">.net</font><br/></span>
                </div>
                <form role="search" class="navbar-form-custom" method="post" action="#">
                    <div class="form-group">
                        <input type="text" placeholder="Find ..." class="form-control" name="search"/>
                    </div>
                </form>
                <div class="mobile-menu">
                    <button type="button" class="navbar-toggle mobile-menu-toggle" ng-click="collapseMobileMenu = !collapseMobileMenu">
                        <i class="fa fa-chevron-down"></i>
                    </button>
                    <div uib-collapse="collapseMobileMenu" class="collapse mobile-navbar">
                        <ul class="nav navbar-nav">
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
                <div class="navbar-right">
                    <ul class="nav navbar-nav no-borders">
                        <li uib-dropdown ng-if="Auth.isLoggedIn()">
                            <a class="label-menu-corner" href="#" uib-dropdown-toggle>
                                <i class="pe-7s-drawer"></i>
                                {notifications.length && (<span class="label label-success">{notifications.length}</span>)}
                            </a>
                            <ul uib-dropdown-menu notifications class="hdropdown animated flipInX" ng-scrollbars ng-scrollbars-config="scrollbarsConfig"></ul>
                        </li>
                        <li uib-dropdown ng-if="Auth.isLoggedIn()">
                            <a href="#" uib-dropdown-toggle>
                                <i class="pe-7s-keypad"></i>
                            </a>
                            <div uib-dropdown-menu class="hdropdown bigmenu animated flipInX">

                                <table>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <a ui-sref="app_views.projects">
                                                <i class="pe pe-7s-portfolio text-info"></i>
                                                <h5>Projects</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a ui-sref="app_views.mailbox">
                                                <i class="pe pe-7s-mail text-warning"></i>
                                                <h5>Email</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a ui-sref="app_views.contacts">
                                                <i class="pe pe-7s-users text-success"></i>
                                                <h5>Contacts</h5>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a ui-sref="app_views.forum">
                                                <i class="pe pe-7s-comment text-info"></i>
                                                <h5>Forum</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a ui-sref="analytics">
                                                <i class="pe pe-7s-graph1 text-danger"></i>
                                                <h5>Analytics</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a ui-sref="app_views.file_manager">
                                                <i class="pe pe-7s-box1 text-success"></i>
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
                                <i class="pe-7s-user"></i>
                            </a>
                            <ul uib-dropdown-menu class="hdropdown animated flipInX">
                                <div class="title">
                                    Account menu
                                </div>
                                <li>
                                    <a href="https://mybg.devbg.us/user/profile">
                                        <i class="pe pe-7s-edit"></i> &nbsp;&nbsp; Account settings
                                    </a>
                                </li>
                                <li>
                                    <a ng-click="Auth.logout()">
                                        <i class="pe pe-7s-next-2"></i> &nbsp;&nbsp;&nbsp; Sign out
                                    </a>
                                </li>
                            </ul>

                        </li>

                        <li ng-if="!Auth.isLoggedIn()">
                            <a ng-click="login()">
                                <i class="pe-7s-upload pe-rotate-90"></i>
                            </a>
                        </li>
                    </ul>
                </div>
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






