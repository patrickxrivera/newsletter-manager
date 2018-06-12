import { handleActions } from 'redux-actions';

const initialState = {
  unsaved: {
    emails: []
  }
};

export default handleActions(
  {
    FETCH_INITIAL_EMAILS: (state, action) => ({
      ...state,
      unsaved: {
        emails: action.emails
      }
    }),
    DELETE_EMAILS: (state, action) => ({
      ...state,
      unsaved: {
        emails: state.unsaved.emails.filter(isSelected(action.payload))
      }
    })
  },
  initialState
);

const isSelected = (selected) => ({ accountName }) => !selected.includes(accountName);

export const getInitialEmails = ({ labels }) => labels.unsaved.emails;
