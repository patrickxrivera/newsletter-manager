import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import Confirm from './Confirm';

class ConfirmContainer extends Component {
  handleFormSubmit = (formProps) => {
    console.log(formProps);
  };

  render() {
    return <Confirm handleFormSubmit={(vals) => console.log(vals)} {...this.props} />;
  }
}

export default reduxForm({
  form: 'newsletters',
  fields: ['query']
})(ConfirmContainer);
