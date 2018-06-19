import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const primaryButton = {
  color: '#fff',
  backgroundColor: '#34a853'
};

const DeleteLabel = ({ openDialog, handleOpen, handleClose, deleteLabel, ...props }) => (
  <Dialog
    maxWidth="xs"
    open={openDialog}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">{'Delete Label?'}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        This will delete the "{props.selectedLabelName}" label from any messages it is applied to.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
        Nah, I'm good.
      </Button>
      <Button
        onClick={() => {
          deleteLabel(props.userId, props.selectedLabelId);
          handleClose();
        }}
        style={primaryButton}
        variant="raised"
        size="xs"
        autoFocus>
        Yaaas.
      </Button>
    </DialogActions>
  </Dialog>
);

export default DeleteLabel;
