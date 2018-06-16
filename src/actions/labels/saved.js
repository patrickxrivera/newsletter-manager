import api from '../../api';
import * as D from '../../utils/dispatchHelpers';

export const deleteLabel = (userId, labelId) => async (dispatch) => {
  dispatch(D.deleteLabelSuccess(labelId));

  await api.deleteLabelSent(userId, labelId);
};

export const fetchSavedLabels = (userId, cb) => async (dispatch) => {
  const savedLabels = await api.fetchSavedLabelsSent(userId);

  dispatch(D.fetchSavedLabelsSuccess(savedLabels.data));

  cb();
};
