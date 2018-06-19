import { createAction } from 'redux-actions';

import api from '../../api';
import * as D from '../../utils/dispatchHelpers';

export const addNewslettersToLabel = (labelData) => async (dispatch) => {
  dispatch(D.resetCurrentLabel());
  dispatch(D.fetchError(null));

  const { id, labelName, emailAddresses, additionalNewsletters } = labelData;

  const queries = [...emailAddresses, ...additionalNewsletters].map((q) => `from:${q}`);

  try {
    const { data } = await api.addNewslettersToLabelSent(id, labelName, queries);
    dispatch(D.addNewslettersToLabelSuccess(data));
    dispatch(D.resetUnsavedLabel());
  } catch (err) {
    dispatch(D.fetchError());
  }
};

export const fetchInitialEmails = (id) => async (dispatch) => {
  dispatch(D.fetchError(null));

  try {
    const initialEmails = await api.fetchInitialEmailsSent(id);
    dispatch(D.fetchInitialEmailsSuccess(initialEmails.data));
  } catch (err) {
    dispatch(D.fetchError());
  }
};

export const deleteEmails = createAction('DELETE_EMAILS');

export const addAdditionalNewsletter = createAction('ADD_ADDITIONAL_NEWSLETTER');

export const deleteAdditionalNewsletter = createAction('DELETE_ADDITIONAL_NEWSLETTER');

export const clearEmails = createAction('CLEAR_EMAILS');
