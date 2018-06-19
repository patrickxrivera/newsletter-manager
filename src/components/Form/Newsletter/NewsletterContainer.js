import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Newsletter from './Newsletter';
import { clearInputField } from '../../../actions/form';
import { getAdditionalNewsletters } from '../../../reducers/labels/unsaved';
import { addAdditionalNewsletter } from '../../../actions/labels/unsaved';

class NewsletterContainer extends Component {
  handleFormSubmit = ({ query }) => {
    const { addAdditionalNewsletter, clearInputField } = this.props;
    addAdditionalNewsletter(query);
    clearInputField();
  };

  render() {
    return <Newsletter handleFormSubmit={this.handleFormSubmit} {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  additionalNewsletters: getAdditionalNewsletters(state)
});

export default connect(mapStateToProps, { addAdditionalNewsletter, clearInputField })(
  reduxForm({
    form: 'newsletters',
    fields: ['query']
  })(NewsletterContainer)
);
