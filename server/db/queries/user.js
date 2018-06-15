const db = require('../config');
const itemExists = require('../../utils/exists');

const handleCreateUser = async ({ access_token, refresh_token }, { emailAddress }) => {
  const existingId = await db('user_account')
    .select('id')
    .where('email_address', emailAddress);

  return itemExists(existingId)
    ? updateUserAccessToken(access_token)
    : createUser(access_token, refresh_token, emailAddress);
};

const updateUserAccessToken = (access_token) => db('user_account').update({ access_token }, 'id');

const createUser = (access_token, refresh_token, email_address) =>
  db('user_account').insert(
    {
      access_token,
      refresh_token,
      email_address
    },
    'id'
  );

const updateUser = ({ refresh_token, access_token }, id) => {
  return db('user_account')
    .update({ refresh_token, access_token })
    .where('id', id)
    .returning('access_token');
};

const getToken = (tokenType) => (id) =>
  db('user_account')
    .select(tokenType)
    .where('id', id);

const getRefreshToken = getToken('refresh_token');

const getAccessToken = getToken('access_token');

module.exports = {
  handleCreateUser,
  updateUser,
  getRefreshToken,
  getAccessToken
};
