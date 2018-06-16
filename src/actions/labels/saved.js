import api from '../../api';
import * as D from '../../utils/dispatchHelpers';

window.api = api;

export const deleteLabel = (userId, labelId) => async (dispatch) => {
  dispatch(D.deleteLabelSuccess(labelId));

  const deleteLabelRes = await api.deleteLabelSent(userId, labelId);
};
