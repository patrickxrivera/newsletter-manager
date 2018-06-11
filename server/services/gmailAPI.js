const { google } = require('googleapis');

const Auth = require('./auth');
const parseHeader = require('./helpers/parseHeader');
const { addToStore, addToHashMap } = require('./helpers/addTo');

const Gmail = {
  api: {},
  newsletterHashMap: new Map(),

  init: async (tokens) => {
    const credentials = await Auth.setCredentials(tokens);

    Gmail.api = google.gmail({ version: 'v1', auth: credentials });
  },

  getProfile: async (tokens) => {
    await Gmail.init(tokens);

    const params = { userId: 'me' };

    return Gmail.api.users.getProfile(params);
  },

  getNewsletterMessages: async (access_token) => {
    await Gmail.init({ access_token });

    const messageIds = await Gmail.getNewsletterMessageIds();

    const messages = await Promise.all(messageIds.data.messages.map(Gmail.fetchMessage));

    messages.map(parseHeader).forEach(addToHashMap(Gmail.newsletterHashMap));

    let newsletterStore = [];

    Gmail.newsletterHashMap.forEach(addToStore(newsletterStore));

    return newsletterStore;
  },

  getNewsletterMessageIds: async () => {
    const params = {
      userId: 'me',
      q: 'newsletter'
    };

    return Gmail.api.users.messages.list(params);
  },

  fetchMessage: ({ id }) => Gmail.getMessage(id),

  getMessage: async (messageId) => {
    const params = {
      userId: 'me',
      id: messageId
    };

    return Gmail.api.users.messages.get(params);
  }
};

module.exports = Gmail;
