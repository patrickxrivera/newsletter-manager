import { handleActions } from 'redux-actions';

const initialState = {
  emails: [],
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
    })
  },
  initialState
);

const isSelected = (selected) => ({ accountName }) => !selected.includes(accountName);

const deleteNewsletter = (selected) => (curr) => curr !== selected;

export const getInitialEmails = ({ unsavedLabels }) => unsavedLabels.emails;

export const getAdditionalNewsletters = ({ unsavedLabels }) => unsavedLabels.additionalNewsletters;
