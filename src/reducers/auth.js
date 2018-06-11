import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    SIGN_IN_USER: (state, action) => ({
      ...state,
      ...action.payload,
      isAuthenticated: true
    }),
    SIGN_OUT_USER: (state, action) => ({
      isAuthenticated: false
    })
  },
  initialState
);

export const getIsAuthenticated = ({ auth }) => auth.isAuthenticated;
