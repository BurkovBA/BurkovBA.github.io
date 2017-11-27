import React from 'react';
import { Dropdown } from 'react-bootstrap';

class MinimalizeMenu extends React.Component {
  render() {
    return (
      <div className="header-link hide-menu" onClick={this.minimalize}>
        <i className="fa fa-bars"></i>
      </div>
    )
  }

  minimalize() {
    if ($(window).width() < 769) {
      $("body").toggleClass("show-sidebar");
    } else {
      $("body").toggleClass("hide-sidebar");
    }
  }
}

export default MinimalizeMenu;
