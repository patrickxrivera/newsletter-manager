import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Field } from 'redux-form';
import { isEmpty } from 'ramda';

import * as Style from './NewsletterStyles';
import ChipArray from './ChipArray';

const Newsletter = ({ handleSubmit, handleFormSubmit, input, ...rest }) => (
  <Style.Wrapper>
    <Typography style={Style.title} variant="title" id="formTitle">
      Did we miss any?
    </Typography>
    <Typography style={Style.subheading} variant="subheading" id="formSubscript">
      Add newsletters below:
    </Typography>
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Field
        label="Query"
        name="query"
        type="input"
        props={rest}
        component={renderNewsletterForm}
        {...input}
      />
    </form>
  </Style.Wrapper>
);

const renderNewsletterForm = ({ input, additionalNewsletters }) => [
  <Style.SearchIcon key={1} />,
  <Style.Input key={2} placeholder="Enter newsletter" {...input} />,
  <Style.NewslettersList key={3}>
    {isEmpty(additionalNewsletters)
      ? renderPlaceholder()
      : renderAdditionalNewsletters({ additionalNewsletters })}
  </Style.NewslettersList>
];

const renderAdditionalNewsletters = (props) => [
  <Style.NewslettersListHeading key={1}>Additional Newsletters</Style.NewslettersListHeading>,
  <ChipArray key={2} {...props} />
];

const renderPlaceholder = () => (
  <Style.PlaceholderText>No additional newsletters added yet.</Style.PlaceholderText>
);

export default Newsletter;
