const Auth = require('./auth');

const Gmail = {
  init: (credentials) => {
    google.gmail({ version: 'v1', auth: credentials });
  },

  getMessageIdsByQuery: (refreshToken) => {
    return Auth.refreshAccessToken(refreshToken);
  }
};

module.exports = Gmail;
