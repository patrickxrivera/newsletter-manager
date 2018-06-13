import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Newsletter from './Newsletter';
import { getAdditionalNewsletters } from '../../../reducers/labels';
import { addAdditionalNewsletter } from '../../../actions/labels';

class NewsletterContainer extends Component {
  handleFormSubmit = ({ query }) => {
    this.props.addAdditionalNewsletter(query);
  };

  render() {
    return <Newsletter handleFormSubmit={this.handleFormSubmit} {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  additionalNewsletters: getAdditionalNewsletters(state)
});

export default connect(mapStateToProps, { addAdditionalNewsletter })(
  reduxForm({
    form: 'newsletters',
    fields: ['query']
  })(NewsletterContainer)
);
