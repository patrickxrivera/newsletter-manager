import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';

import * as Style from './ConfirmStyles';

const Confirm = ({ handleSubmit, handleFormSubmit, input }) => (
  <Style.Wrapper>
    <Typography variant="title" id="formTitle">
      Did we miss any?
    </Typography>
    <Typography style={Style.subheading} variant="subheading" id="formSubscript">
      Add newsletters below:
    </Typography>
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Field label="Query" name="query" type="input" component={renderNewsletterForm} {...input} />
    </form>
  </Style.Wrapper>
);

const renderNewsletterForm = ({ input }) => [
  <Style.SearchIcon key={1} />,
  <Style.Input key={2} placeholder="Enter newsletter" {...input} />,
  <Style.NewslettersList>
    <Style.PlaceholderText>No additional newsletters added yet.</Style.PlaceholderText>
  </Style.NewslettersList>
  // <TextField id="name" label="Label Name" style={{ marginTop: '2rem' }} margin="normal" />
];

export default Confirm;
