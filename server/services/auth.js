const { google } = require('googleapis');

const keys = require('../keys');

const Auth = {
  oAuth2Client: new google.auth.OAuth2(keys.clientId, keys.clientSecret, keys.redirectURI),

  scopes: ['https://www.googleapis.com/auth/gmail.modify'],

  getCredentials: async (req) => {
    const { tokens } = await Auth.oAuth2Client.getToken(req.query.code);

    return tokens;
  },

  setCredentials: async (tokens) => {
    Auth.oAuth2Client.setCredentials(tokens);

    return Auth.oAuth2Client;
  },

  getAuthURL: () =>
    Auth.oAuth2Client.generateAuthUrl({
      approval_prompt: 'force',
      access_type: 'offline',
      scope: Auth.scopes.join(' ')
    }),

  refreshAccessToken: (refresh_token) => {
    Auth.oAuth2Client.setCredentials({
      refresh_token
    });

    return Auth.oAuth2Client.refreshAccessToken();
  }
};

module.exports = Auth;
