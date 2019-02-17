import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

class AutoModal extends React.Component {
  state = {
    open: true,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default AutoModal;