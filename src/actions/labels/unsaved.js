import { createAction } from 'redux-actions';

import api from '../../api';
import * as D from '../../utils/dispatchHelpers';

export const addNewslettersToLabel = (labelData) => async (dispatch) => {
  console.log(labelData);
  return {};
};

export const fetchInitialEmails = (id) => async (dispatch) => {
  const initialEmails = await api.fetchInitialEmailsSent(id);

  dispatch(D.fetchInitialEmailsSuccess(initialEmails.data));
};

export const deleteEmails = createAction('DELETE_EMAILS');

export const addAdditionalNewsletter = createAction('ADD_ADDITIONAL_NEWSLETTER');

export const deleteAdditionalNewsletter = createAction('DELETE_ADDITIONAL_NEWSLETTER');
