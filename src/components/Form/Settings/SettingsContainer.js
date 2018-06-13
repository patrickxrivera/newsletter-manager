import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import Settings from './Settings';

class SettingsContainer extends Component {
  handleFormSubmit = (formProps) => {
    console.log(formProps);
  };

  render() {
    return <Settings handleFormSubmit={(vals) => console.log(vals)} {...this.props} />;
  }
}

export default reduxForm({
  form: 'newsletters',
  fields: ['query']
})(SettingsContainer);
