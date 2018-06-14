import { combineReducers } from 'redux';

import formReducerEnhanced from './form';
import authReducer from './auth';
import unsavedLabelsReducer from './labels/unsaved';

const appReducer = combineReducers({
  form: formReducerEnhanced,
  auth: authReducer,
  unsavedLabels: unsavedLabelsReducer
});

// clear state on sign out
const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT_USER') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
