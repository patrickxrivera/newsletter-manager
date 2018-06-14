import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Field } from 'redux-form';

import * as Style from './SettingsStyles';
import SettingsModal from './SettingsModal';

const Confirm = ({ handleSubmit, handleFormSubmit, isCheckboxError, ...rest }) => (
  <Style.Wrapper>
    <Typography style={Style.title} variant="title" id="formTitle">
      Label Settings
    </Typography>

    {isCheckboxError && (
      <MuiThemeProvider>
        <SettingsModal />{' '}
      </MuiThemeProvider>
    )}

    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Field label="Name" name="name" type="input" props={rest} component={renderSettingsForm} />
    </form>
  </Style.Wrapper>
);

const renderSettingsForm = ({ input, isInputError, meta: { touched }, ...props }) => (
  <MuiThemeProvider>
    <Style.SettingsWrapper>
      <div>
        <TextField
          {...input}
          onChange={props.handleInputChange}
          value={props.value}
          id="name"
          label="Name"
          floatingLabelText="Name"
          errorText={touched && isInputError && 'This field is required'}
          hintText="Label name that will appear in Gmail"
          style={{ width: '270px' }}
          errorStyle={{
            float: 'left'
          }}
          underlineFocusStyle={Style.textField.underlineFocusStyle}
          floatingLabelFocusStyle={Style.textField.floatingLabelFocusStyle}
        />
        <Style.CheckboxWrapper>
          <Style.CheckboxIcon
            checked={props.checkboxOne}
            onCheck={props.updateCheck('checkboxOne')}
            iconStyle={Style.checkbox}
            label="Label incoming messages."
          />
          <Style.CheckboxIcon
            checked={props.checkboxTwo}
            onCheck={props.updateCheck('checkboxTwo')}
            iconStyle={Style.checkbox}
            label="Label past messages."
          />
        </Style.CheckboxWrapper>
      </div>
      <div>
        <Style.Btn type="submit" style={Style.primaryButton} variant="raised">
          <Style.ButtonArea>
            <Style.Text>Confirm</Style.Text>
          </Style.ButtonArea>
        </Style.Btn>
      </div>
    </Style.SettingsWrapper>
  </MuiThemeProvider>
);

export default Confirm;
