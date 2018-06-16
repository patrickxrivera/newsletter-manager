import React, { Component } from 'react';
import { connect } from 'react-redux';

import Labels from './Labels';
import { handleInitialRender } from '../../actions/auth';
import { getId, getIsInitialRender } from '../../reducers/auth';
import { deleteLabel, fetchSavedLabels } from '../../actions/labels/saved';
import { getSavedLabels } from '../../reducers/labels/saved';

class LabelsContainer extends Component {
  state = {
    openDialog: false,
    selectedLabelName: null,
    selectedLabelId: null,
    errorMsg: `No labels created yet. Get started below!`
  };

  componentDidMount() {
    const { isInitialRender, fetchSavedLabels, userId, handleInitialRender } = this.props;

    if (isInitialRender) {
      fetchSavedLabels(userId, () => {
        handleInitialRender();
      });
    }
  }

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
  savedLabels: getSavedLabels(state),
  isInitialRender: getIsInitialRender(state)
});

export default connect(mapStateToProps, { deleteLabel, fetchSavedLabels, handleInitialRender })(
  LabelsContainer
);
