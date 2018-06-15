export const fetchInitialEmailsSuccess = (emails) => ({
  type: 'FETCH_INITIAL_EMAILS',
  emails
});

export const addNewslettersToLabelSuccess = (label) => ({
  type: 'ADD_NEWSLETTERS_TO_LABEL',
  label
});

export const resetCurrentLabel = () => ({
  type: 'RESET_CURRENT_LABEL',
  currentLabel: null
});
