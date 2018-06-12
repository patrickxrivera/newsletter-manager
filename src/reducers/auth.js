import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    SIGN_IN_USER: (state, action) => ({
      ...state,
      ...action.payload,
      isAuthenticated: true
    })
  },
  initialState
);

export const getIsAuthenticated = ({ auth }) => auth.isAuthenticated;

export const getId = ({ auth }) => auth.id;
