import { handleActions } from 'redux-actions';
import { pluck } from 'ramda';

const initialState = {
  emails: null,
  additionalNewsletters: []
};

export default handleActions(
  {
    FETCH_INITIAL_EMAILS: (state, action) => ({
      ...state,
      emails: action.emails
    }),
    DELETE_EMAILS: (state, action) => ({
      ...state,
      emails: state.emails.filter(isSelected(action.payload))
    }),
    ADD_ADDITIONAL_NEWSLETTER: (state, action) => ({
      ...state,
      additionalNewsletters: [...state.additionalNewsletters, action.payload]
    }),
    DELETE_ADDITIONAL_NEWSLETTER: (state, action) => ({
      ...state,
      additionalNewsletters: state.additionalNewsletters.filter(deleteNewsletter(action.payload))
    }),
    RESET_ADDITIONAL_NEWSLETTERS: (state, action) => ({
      ...state,
      additionalNewsletters: action.additionalNewsletters
    })
  },
  initialState
);

const isSelected = (selected) => ({ emailAddress }) => !selected.includes(emailAddress);

const deleteNewsletter = (selected) => (curr) => curr !== selected;

export const getInitialEmails = ({ unsavedLabels }) => unsavedLabels.emails;

export const getAdditionalNewsletters = ({ unsavedLabels }) => unsavedLabels.additionalNewsletters;

export const getEmailAddresses = ({ unsavedLabels }) =>
  unsavedLabels.emails ? pluck('emailAddress')(unsavedLabels.emails) : [];
