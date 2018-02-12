import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class HidePostsInRussianModal extends Component {
  yes() {
      if (typeof localStorage !== 'undefined') localStorage.setItem('hidePostsInRussian', true);
      this.props.onClose();
  }

  no() {
      if (typeof localStorage !== 'undefined') localStorage.removeItem('hidePostsInRussian');
      this.props.onClose();
  }

  render () {
    return (
      <Modal {...this.props} key="HidePostsInRussianModal" className="inmodal hmodal-info">
        <div className="color-line" />
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Hide posts in Russian from the list?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p>Do you want to hide blog posts <strong>in Russian</strong>?</p>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button bsStyle="default" onClick={() => this.yes()}>Yes</Button>
          <Button bsStyle="primary" onClick={() => this.no()}>No</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default HidePostsInRussianModal
