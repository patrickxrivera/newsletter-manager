import { reducer as formReducer } from 'redux-form';

export default formReducer.plugin({
  newsletters: (state, action) => {
    switch (action.type) {
      case 'CLEAR_INPUT_FIELD':
        return undefined;
      default:
        return state;
    }
  }
});
