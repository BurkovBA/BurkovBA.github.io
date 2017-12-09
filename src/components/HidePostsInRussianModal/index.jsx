import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class HidePostsInRussianModal extends Component {
  yes() {
      localStorage.setItem('hidePostsInRussian', true);
      this.props.onHide();
  }

  no() {
      localStorage.removeItem('hidePostsInRussian');
      this.props.onHide();
  }

  render () {
    return (
      <Modal {...this.props} key="HidePostsInRussianModal" className="inmodal hmodal-info">
        <div className="color-line" />
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Hide posts in Russian?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p>Do you want to hide blog posts <strong>in russian</strong>?</p>
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
