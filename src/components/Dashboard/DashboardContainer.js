import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';

import Dashboard from './Dashboard';
import { fetchInitialEmails, deleteEmails } from '../../actions/labels';
import { getId } from '../../reducers/auth';
import { getInitialEmails } from '../../reducers/labels';

class DashboardContainer extends Component {
  componentDidMount() {
    const { id, emails, fetchInitialEmails } = this.props;

    if (isEmpty(emails)) {
      fetchInitialEmails(id);
    }
  }

  render() {
    return <Dashboard {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  id: getId(state),
  emails: getInitialEmails(state)
});

export default connect(mapStateToProps, { fetchInitialEmails, deleteEmails })(DashboardContainer);
