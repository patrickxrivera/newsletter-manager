import { combineReducers } from 'redux';

import formReducerEnhanced from './form';
import authReducer from './auth';
import savedLabelsReducer from './labels/saved';
import unsavedLabelsReducer from './labels/unsaved';
import errorsReducer from './errors';

const appReducer = combineReducers({
  form: formReducerEnhanced,
  auth: authReducer,
  unsavedLabels: unsavedLabelsReducer,
  savedLabels: savedLabelsReducer,
  errors: errorsReducer
});

// clear state on sign out
const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT_USER') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
