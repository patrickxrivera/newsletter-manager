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
        emails: [...action.emails]
      }
    })
  },
  initialState
);

export const getInitialEmails = ({ labels }) => labels.unsaved.emails;
