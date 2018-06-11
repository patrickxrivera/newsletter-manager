const { google } = require('googleapis');

const Auth = require('./auth');

const Gmail = {
  api: {},

  init: async (tokens) => {
    const credentials = await Auth.setCredentials(tokens);

    Gmail.api = google.gmail({ version: 'v1', auth: credentials });
  },

  getProfile: async (tokens) => {
    await Gmail.init(tokens);

    const params = {
      userId: 'me',
      query: 'newsletter'
    };

    return Gmail.api.users.getProfile(params);
  },

  getMessageIdsByQuery: (refreshToken) => {
    return Auth.refreshAccessToken(refreshToken);
  }
};

module.exports = Gmail;
