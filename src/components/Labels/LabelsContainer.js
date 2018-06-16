import React, { Component } from 'react';
import { connect } from 'react-redux';

import Labels from './Labels';
import { getSavedLabels } from '../../reducers/labels/saved';

class LabelsContainer extends Component {
  render() {
    return <Labels {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  savedLabels: getSavedLabels(state)
});

export default connect(mapStateToProps)(LabelsContainer);
