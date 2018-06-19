import React, { Component } from 'react';
import { connect } from 'react-redux';

import Confirm from './Confirm';
import { getFetchError } from '../../reducers/errors';
import { getCurrentLabel } from '../../reducers/labels/saved';

class ConfirmContainer extends Component {
  state = {
    loadingMsg: 'One moment, our robots are adding newsletters to your label now.'
  };

  render() {
    return <Confirm {...this.props} {...this.state} />;
  }
}

const mapStateToProps = (state) => ({
  fetchError: getFetchError(state),
  currentLabel: getCurrentLabel(state)
});

export default connect(mapStateToProps)(ConfirmContainer);
