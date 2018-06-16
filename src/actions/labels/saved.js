import api from '../../api';
import * as D from '../../utils/dispatchHelpers';

export const deleteLabel = (userId, labelId) => async (dispatch) => {
  dispatch(D.deleteLabelSuccess(labelId));

  await api.deleteLabelSent(userId, labelId);
};
