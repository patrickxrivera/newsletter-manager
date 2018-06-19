import { createAction } from 'redux-actions';

export const signInUser = createAction('SIGN_IN_USER');

export const signOutUser = createAction('SIGN_OUT_USER');

export const handleInitialRender = createAction('HANDLE_INITIAL_RENDER');
