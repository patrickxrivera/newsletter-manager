const { google } = require('googleapis');

const keys = require('../keys');
const query = require('../db/queries');
const handleError = require('../utils/handleError');

const Auth = {
  oAuth2Client: new google.auth.OAuth2(keys.clientId, keys.clientSecret, keys.redirectURI),

  scopes: ['https://www.googleapis.com/auth/gmail.modify'],

  getCredentials: async (req) => {
    const { tokens } = await Auth.oAuth2Client.getToken(req.query.code);

    return tokens;
  },

  setCredentials: (tokens) => {
    Auth.oAuth2Client.setCredentials(tokens);

    return Auth.oAuth2Client;
  },

  getAuthURL: () =>
    Auth.oAuth2Client.generateAuthUrl({
      approval_prompt: 'force',
      access_type: 'offline',
      scope: Auth.scopes.join(' ')
    }),

  refreshAccessToken: ({ refresh_token }) => {
    Auth.oAuth2Client.setCredentials({
      refresh_token
    });

    return Auth.oAuth2Client.refreshAccessToken();
  },

  updateTokens: async (id, next) => {
    const [token] = await query.getRefreshToken(id).catch(handleError(next));

    return Auth.refreshAccessToken(token).catch(next);
  }
};

module.exports = Auth;
