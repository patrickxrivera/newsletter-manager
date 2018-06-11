import { handleActions } from 'redux-actions';

const initialState = {
  refreshToken: '1/4uTScAvQLvhKBZxKKHYIro0albJG_hKIW5aNSEvqSGc'
};

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
