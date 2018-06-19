import { handleActions } from 'redux-actions';
import { omit } from 'ramda';

const initialState = {
  currentLabel: null,
  labels: null
};

export default handleActions(
  {
    ADD_NEWSLETTERS_TO_LABEL: (state, action) => ({
      ...state,
      labels: {
        [action.label.labelId]: action.label,
        ...state.labels
      },
      currentLabel: action.label
    }),
    LABEL_NOT_CREATED: (state, action) => ({
      ...state,
      currentLabel: []
    }),
    RESET_CURRENT_LABEL: (state, action) => ({
      ...state,
      currentLabel: action.currentLabel
    }),
    DELETE_LABEL: (state, action) => ({
      ...state,
      labels: omit([action.labelId], state.labels)
    }),
    FETCH_SAVED_LABELS: (state, action) => ({
      ...state,
      labels: {
        ...action.savedLabels.reduce(addLabel, {})
      }
    })
  },
  initialState
);

const addLabel = (acc, { labelId, ...rest }) => ({
  ...acc,
  [labelId]: {
    labelId,
    ...rest
  }
});

export const getCurrentLabel = ({ savedLabels }) => savedLabels.currentLabel;

export const getSavedLabels = ({ savedLabels }) => savedLabels.labels;
