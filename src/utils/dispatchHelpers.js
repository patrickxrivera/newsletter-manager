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

export const deleteLabelSuccess = (labelId) => ({
  type: 'DELETE_LABEL',
  labelId
});

export const deleteSavedEmails = (selected, labelId) => ({
  type: 'DELETE_SAVED_EMAILS',
  selected,
  labelId
});

export const resetUnsavedLabel = () => ({
  type: 'RESET_UNSAVED_LABEL',
  additionalNewsletters: [],
  emails: []
});

export const fetchSavedLabelsSuccess = (savedLabels) => ({
  type: 'FETCH_SAVED_LABELS',
  savedLabels
});

export const fetchError = (message = `It's not you, it's us. Let's try that again.`) => ({
  type: 'FETCH_ERROR',
  message
});
