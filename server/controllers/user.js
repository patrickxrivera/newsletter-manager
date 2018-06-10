const { google } = require('googleapis');

const keys = require('../keys');

const oauth2Client = new google.auth.OAuth2(keys.clientId, keys.clientSecret, keys.redirectURI);

const authenticate = async (req, res) => {
  const scopes = ['https://www.googleapis.com/auth/gmail.modify'];

  const authURL = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes.join(' ')
  });

  res.redirect(authURL);
};

const redirect = async (req, res) => {
  const { tokens } = await oauth2Client.getToken(req.query.code);
  console.log(tokens);
  res.redirect(keys.frontendRedirect);
};

module.exports = {
  authenticate,
  redirect
};
