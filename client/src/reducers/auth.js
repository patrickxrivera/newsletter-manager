import { handleActions } from 'redux-actions';

const initialState = {
  isInitialRender: true
};

export default handleActions(
  {
    SIGN_IN_USER: (state, action) => ({
      ...state,
      ...action.payload,
      isAuthenticated: true
    }),
    HANDLE_INITIAL_RENDER: (state, action) => ({
      ...state,
      isInitialRender: false
    })
  },
  initialState
);

export const getIsAuthenticated = ({ auth }) => auth.isAuthenticated;

export const getId = ({ auth }) => auth.id;

export const getIsInitialRender = ({ auth }) => auth.isInitialRender;
