import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';

import Dashboard from './Dashboard';
import { fetchInitialEmails, deleteEmails } from '../../actions/labels/unsaved';
import { getId } from '../../reducers/auth';
import { getInitialEmails } from '../../reducers/labels/unsaved';

class DashboardContainer extends Component {
  state = {
    loadingMsg: 'One moment, our robots are searching for your newsletters now.'
  };

  componentDidMount() {
    const { id, emails, fetchInitialEmails } = this.props;

    if (isEmpty(emails)) {
      fetchInitialEmails(id);
    }
  }

  render() {
    return <Dashboard {...this.props} {...this.state} />;
  }
}

const mapStateToProps = (state) => ({
  id: getId(state),
  emails: getInitialEmails(state)
});

export default connect(mapStateToProps, { fetchInitialEmails, deleteEmails })(DashboardContainer);
