import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class DialogExampleSimple extends React.Component {
  state = {
    open: true
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        <Dialog
          title="Confirmation Error"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          You must choose to label incoming messages and/or past messages in label settings.
        </Dialog>
      </div>
    );
  }
}
