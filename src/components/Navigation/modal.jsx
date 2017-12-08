import React, {Component} from 'react';

class TranslateModal extends Component {
  render () {
    return (
      <div class="inmodal">
        <div class="color-line"></div>
        <div class="modal-header">
          <h4 class="modal-title">Modal title</h4>
          <small class="font-bold">Lorem Ipsum is simply dummy text.</small>
        </div>
        <div class="modal-body">
          <p><strong>Lorem Ipsum is simply dummy</strong> text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" ng-click="cancel()">Close</button>
          <button type="button" class="btn btn-primary" ng-click="ok()">Save changes</button>
        </div>
      </div>
    )
  }
}

export default TranslateModal
