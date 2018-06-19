import { handleActions } from 'redux-actions';

const initialState = {
  fetchError: null
};

export default handleActions(
  {
    FETCH_ERROR: (state, action) => ({
      ...state,
      fetchError: action.message
    })
  },
  initialState
);

export const getFetchError = ({ errors }) => errors.fetchError;
