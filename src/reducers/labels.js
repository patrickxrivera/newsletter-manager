import { handleActions } from 'redux-actions';

const initialState = {
  unsaved: {
    emails: [],
    additionalNewsletters: []
  }
};

export default handleActions(
  {
    FETCH_INITIAL_EMAILS: (state, action) => ({
      ...state,
      unsaved: {
        additionalNewsletters: [...state.unsaved.additionalNewsletters],
        emails: action.emails
      }
    }),
    DELETE_EMAILS: (state, action) => ({
      ...state,
      unsaved: {
        additionalNewsletters: [...state.unsaved.additionalNewsletters],
        emails: state.unsaved.emails.filter(isSelected(action.payload))
      }
    }),
    ADD_ADDITIONAL_NEWSLETTER: (state, action) => ({
      ...state,
      unsaved: {
        ...state.unsaved,
        additionalNewsletters: [...state.unsaved.additionalNewsletters, action.payload]
      }
    }),
    DELETE_ADDITIONAL_NEWSLETTER: (state, action) => ({
      ...state,
      unsaved: {
        ...state.unsaved,
        additionalNewsletters: state.unsaved.additionalNewsletters.filter(
          deleteNewsletter(action.payload)
        )
      }
    })
  },
  initialState
);

const isSelected = (selected) => ({ accountName }) => !selected.includes(accountName);

const deleteNewsletter = (selected) => (curr) => curr !== selected;

export const getInitialEmails = ({ labels }) => labels.unsaved.emails;

export const getAdditionalNewsletters = ({ labels }) => labels.unsaved.additionalNewsletters;
