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
    // return (
    //   <div className="inmodal">
    //     <div className="color-line"></div>
    //     <div className="modal-header">
    //       <h4 className="modal-title">Hide posts in russian?</h4>
    //       <small className="font-bold">Do you want to hide blog posts in russian?</small>
    //     </div>
    //     <div className="modal-body">
    //       {/*<p>Do you want to hide blog posts <strong>in russian</strong>?</p>*/}
    //     </div>
    //     <div className="modal-footer">
    //       <button type="button" className="btn btn-default" onClick={this.yes()}>Yes</button>
    //       <button type="button" className="btn btn-primary" onClick={this.no()}>No</button>
    //     </div>
    //   </div>
    // )

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
          <Button bsStyle="primary"onClick={() => this.no()}>No</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default HidePostsInRussianModal
