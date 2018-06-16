import React, { Component } from 'react';
import { connect } from 'react-redux';

import Labels from './Labels';
import { getId } from '../../reducers/auth';
import { deleteLabel } from '../../actions/labels/saved';
import { getSavedLabels } from '../../reducers/labels/saved';

class LabelsContainer extends Component {
  state = {
    openDialog: false,
    selectedLabelName: null,
    selectedLabelId: null
  };

  handleOpen = (selectedLabelName, selectedLabelId) => () => {
    this.setState({ openDialog: true, selectedLabelName, selectedLabelId });
  };

  handleClose = () => {
    this.setState({ openDialog: false, selectedLabel: null });
  };

  render() {
    return (
      <Labels
        handleOpen={this.handleOpen}
        handleClose={this.handleClose}
        {...this.props}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userId: getId(state),
  savedLabels: getSavedLabels(state)
});

export default connect(mapStateToProps, { deleteLabel })(LabelsContainer);
