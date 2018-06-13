import { combineReducers } from 'redux';

import formReducerEnhanced from './form';
import authReducer from './auth';
import labelsReducer from './labels';

const appReducer = combineReducers({
  form: formReducerEnhanced,
  auth: authReducer,
  labels: labelsReducer
});

// clear state on sign out
const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT_USER') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
