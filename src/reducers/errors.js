import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    ADD_NEWSLETTERS_TO_LABEL_CONFIRMATION_ERROR: (state, action) => ({
      ...state,
      addNewslettersToLabel: action.errorMsg
    })
  },
  initialState
);

export const getConfirmationError = ({ errors }) => errors.addNewslettersToLabel;
