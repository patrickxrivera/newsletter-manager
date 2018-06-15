import { createAction } from 'redux-actions';

import api from '../../api';
import * as D from '../../utils/dispatchHelpers';

export const addNewslettersToLabel = (labelData) => async (dispatch) => {
  dispatch(D.resetCurrentLabel());

  const { id, labelName, emailAddresses, additionalNewsletters } = labelData;

  const queries = [...emailAddresses, ...additionalNewsletters].map((q) => `from:${q}`);

  const { data, error } = await api.addNewslettersToLabelSent(id, labelName, queries);
  console.log(data);
  if (!error) {
    dispatch(D.addNewslettersToLabelSuccess(data));
    return;
  }

  // dispatch(D.addNewslettersToLabelError(error));
  // dispatch(D.sendConfirmationError(error));
};

export const fetchInitialEmails = (id) => async (dispatch) => {
  const initialEmails = await api.fetchInitialEmailsSent(id);

  dispatch(D.fetchInitialEmailsSuccess(initialEmails.data));
};

export const deleteEmails = createAction('DELETE_EMAILS');

export const addAdditionalNewsletter = createAction('ADD_ADDITIONAL_NEWSLETTER');

export const deleteAdditionalNewsletter = createAction('DELETE_ADDITIONAL_NEWSLETTER');
