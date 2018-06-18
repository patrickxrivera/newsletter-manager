import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateLabel from './CreateLabel';
import { getInitialEmails } from '../../reducers/labels/unsaved';
import { clearEmails } from '../../actions/labels/unsaved';

class CreateLabelContainer extends Component {
  componentDidMount() {
    const { emails, clearEmails } = this.props;
    if (emails) {
      clearEmails();
    }
  }

  render() {
    return <CreateLabel />;
  }
}

const mapStateToProps = (state) => ({
  emails: getInitialEmails(state)
});

export default connect(mapStateToProps, { clearEmails })(CreateLabelContainer);
