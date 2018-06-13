import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import Newsletter from './Newsletter';

class NewsletterContainer extends Component {
  handleFormSubmit = (formProps) => {
    console.log(formProps);
  };

  render() {
    return <Newsletter handleFormSubmit={(vals) => console.log(vals)} {...this.props} />;
  }
}

export default reduxForm({
  form: 'newsletters',
  fields: ['query']
})(NewsletterContainer);
