import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Field } from 'redux-form';
import { isEmpty } from 'ramda';

import * as Style from './NewsletterStyles';
import ChipArray from './ChipArray';

const Newsletter = ({ handleSubmit, handleFormSubmit, input, title, subheading, ...rest }) => (
  <Style.Wrapper>
    <Typography style={Style.title} variant="title" id="formTitle">
      {title}
    </Typography>
    <Typography style={Style.subheading} variant="subheading" id="formSubscript">
      {subheading}
    </Typography>
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Field
        label="Query"
        name="query"
        type="input"
        props={{ ...rest, handleSubmit, handleFormSubmit }}
        component={renderNewsletterForm}
        {...input}
      />
    </form>
  </Style.Wrapper>
);

const renderNewsletterForm = ({ input, additionalNewsletters, placeholder, ...props }) => [
  <Style.SearchIcon key={1} onClick={props.handleSubmit(props.handleFormSubmit)} />,
  <Style.Input key={2} placeholder="Enter newsletter" {...input} />,
  <Style.NewslettersList key={3}>
    {isEmpty(additionalNewsletters)
      ? renderPlaceholder(placeholder)
      : renderAdditionalNewsletters({ additionalNewsletters, ...props })}
  </Style.NewslettersList>
];

const renderAdditionalNewsletters = ({ listHeading, ...props }) => [
  <Style.NewslettersListHeading key={1}>{listHeading}</Style.NewslettersListHeading>,
  <ChipArray key={2} {...props} />
];

const renderPlaceholder = (placeholder) => (
  <Style.PlaceholderText>{placeholder}</Style.PlaceholderText>
);

Newsletter.defaultProps = {
  placeholder: 'No additional newsletters added yet.',
  subheading: 'Add newsletters below',
  title: 'Did we miss any?',
  listHeading: 'Additional Newsletters'
};

export default Newsletter;
