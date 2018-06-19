const DEV_BASE_API = 'http://localhost:8080/api';
const DEV_ROOT = 'http://localhost:3000';

export default {
  signIn: `${DEV_BASE_API}/authorize`,
  fetchInitialEmails: `${DEV_BASE_API}/emails`,
  addNewslettersToLabel: `${DEV_BASE_API}/label/create`,
  deleteLabel: `${DEV_BASE_API}/label`,
  getLabels: `${DEV_BASE_API}/labels`,
  gmail: 'https://mail.google.com/mail/u/0/?tab=wm#label/',
  label: `${DEV_ROOT}/label/`
};
