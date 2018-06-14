import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { isEmpty } from 'ramda';

import Settings from './Settings';

class SettingsContainer extends Component {
  state = {
    checkboxOne: true,
    checkboxTwo: true,
    isInputError: false,
    isCheckboxError: false,
    value: ''
  };

  handleFormSubmit = ({ name }) => {
    console.log(name);
    if (this.isUndefined(name)) {
      this.setState({ isInputError: true });
      return;
    }

    this.checkboxesAreEmpty()
      ? this.setState({ isCheckboxError: true })
      : console.log('submit form!');
  };

  isUndefined = (val) => val === undefined;

  checkboxesAreEmpty = () => this.state.checkboxOne === false && this.state.checkboxTwo === false;

  handleInputChange = (e) => {
    this.setState({ value: e.target.value }, () => {
      const { value, isInputError } = this.state;

      // reset error if it's true and the input isn't empty
      if (isInputError && value) {
        this.setState({ isInputError: false });
      }
    });
  };

  updateCheck = (prop) => () => {
    this.setState({ [prop]: !this.state[prop] });
  };

  render() {
    return (
      <Settings
        updateCheck={this.updateCheck}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        {...this.props}
        {...this.state}
      />
    );
  }
}

export default reduxForm({
  form: 'setitngs',
  fields: ['name']
})(SettingsContainer);
