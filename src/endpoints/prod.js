const PROD_BASE_API = 'https://young-coast-38464.herokuapp.com/api';
const PROD_ROOT = 'https://newsletter-manager.netlify.com';

export default {
  signIn: `${PROD_BASE_API}/authorize`,
  fetchInitialEmails: `${PROD_BASE_API}/emails`,
  addNewslettersToLabel: `${PROD_BASE_API}/label/create`,
  deleteLabel: `${PROD_BASE_API}/label`,
  getLabels: `${PROD_BASE_API}/labels`,
  gmail: 'https://mail.google.com/mail/u/0/?tab=wm#label/',
  label: `${PROD_ROOT}/label/`
};
