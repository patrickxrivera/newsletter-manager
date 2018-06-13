import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Field } from 'redux-form';

import * as Style from './SettingsStyles';

const Confirm = ({ handleSubmit, handleFormSubmit, input }) => (
  <Style.Wrapper>
    <Typography variant="title" id="formTitle">
      Label Settings
    </Typography>

    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Field label="Query" name="query" type="input" component={renderSettingsForm} {...input} />
    </form>
  </Style.Wrapper>
);

const renderSettingsForm = ({ input }) => (
  <MuiThemeProvider>
    <Style.SettingsWrapper>
      <div>
        <TextField
          id="name"
          label="Name"
          floatingLabelText="Name"
          hintText="Label name that will appear in Gmail"
          style={{ width: '260px' }}
          underlineFocusStyle={Style.textField.underlineFocusStyle}
          floatingLabelFocusStyle={Style.textField.floatingLabelFocusStyle}
        />
        <Style.CheckboxIcon
          defaultChecked={true}
          iconStyle={Style.checkbox}
          label="Label incoming messages."
        />
        <Style.CheckboxIcon
          iconStyle={Style.checkbox}
          defaultChecked={true}
          label="Label past messages."
        />
      </div>
      <div>
        <Style.Btn style={Style.primaryButton} variant="raised">
          <Style.ButtonArea>
            <Style.Text>Confirm</Style.Text>
          </Style.ButtonArea>
        </Style.Btn>
      </div>
    </Style.SettingsWrapper>
  </MuiThemeProvider>
);

export default Confirm;
