const db = require('../config');

const createUser = ({ access_token, expiry_date }, { emailAddress }) =>
  db('user_account').insert(
    {
      access_token,
      email_address: emailAddress
    },
    'id'
  );

module.exports = {
  createUser
};
