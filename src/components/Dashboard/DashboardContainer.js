import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isNil } from 'ramda';

import Dashboard from './Dashboard';
import { fetchInitialEmails, deleteEmails } from '../../actions/labels/unsaved';
import { getId } from '../../reducers/auth';
import { getFetchError } from '../../reducers/errors';
import { getInitialEmails } from '../../reducers/labels/unsaved';

class DashboardContainer extends Component {
  state = {
    loadingMsg: 'One moment, our robots are searching for your newsletters now.',
    errorMsg: 'No newsletters found. Add some by clicking below!'
  };

  componentDidMount() {
    const { id, emails, fetchInitialEmails } = this.props;

    if (isNil(emails)) {
      fetchInitialEmails(id);
    }
  }

  render() {
    return <Dashboard {...this.props} {...this.state} />;
  }
}

const mapStateToProps = (state) => ({
  id: getId(state),
  emails: getInitialEmails(state),
  fetchError: getFetchError(state)
});

export default connect(mapStateToProps, { fetchInitialEmails, deleteEmails })(DashboardContainer);
