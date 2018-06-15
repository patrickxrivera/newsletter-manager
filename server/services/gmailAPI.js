const { google } = require('googleapis');
const { isEmpty } = require('ramda');

const Auth = require('./auth');
const parseHeader = require('./helpers/parseHeader');
const parseMessageIdsBlob = require('./helpers/parseMessageIdsBlob');
const handleError = require('../utils/handleError');
const { addToStore, addToHashMap } = require('./helpers/addTo');

const noMessageIds = (messageIds) => !messageIds.length;

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

  createLabel: (name) => {
    const params = {
      userId: 'me',
      resource: {
        name
      }
    };

    return Gmail.api.users.labels.create(params);
  },

  addToLabel: (messageIds, labelId) => {
    const params = {
      userId: 'me',
      resource: {
        ids: messageIds,
        addLabelIds: [labelId]
      }
    };

    return Gmail.api.users.messages.batchModify(params);
  },

  getMessageIds: (q) => {
    const params = {
      userId: 'me',
      q
    };

    return Gmail.api.users.messages.list(params);
  },

  getMessage: (messageId) => {
    const params = {
      userId: 'me',
      id: messageId
    };

    return Gmail.api.users.messages.get(params);
  },

  getInitialEmails: async (accessToken, next, q = 'newsletter') => {
    if (accessToken) {
      await Gmail.init(accessToken);
    }

    const messageIds = await Gmail.getMessageIds(q).catch(handleError(next));

    const messages = await Promise.all(messageIds.data.messages.map(Gmail.fetchMessage)).catch(
      handleError(next)
    );

    messages.map(parseHeader).forEach(addToHashMap(Gmail.newsletterHashMap));

    let newsletterStore = [];

    Gmail.newsletterHashMap.forEach(addToStore(newsletterStore));

    return newsletterStore;
  },

  fetchMessage: ({ id }) => Gmail.getMessage(id),

  addNewslettersToLabel: async (access_token, queries, labelName, next) => {
    await Gmail.init({ access_token });

    const messageIdsBlob = await Promise.all(queries.map(Gmail.getMessageIds)).catch(
      handleError(next)
    );

    const messageIds = parseMessageIdsBlob(messageIdsBlob);

    if (noMessageIds(messageIds)) {
      handleError(next)('Invalid query.');
    }

    const labelResource = await Gmail.createLabel(labelName).catch(handleError(next));

    const { id, name } = labelResource.data,
      labelNameQuery = `label:${name}`;

    await Gmail.addToLabel(messageIds, id).catch(handleError(next));

    const addedNewsletters = await Gmail.getInitialEmails(null, null, labelNameQuery).catch(
      handleError(next)
    );

    return { labelName, addedNewsletters };
  }
};

module.exports = Gmail;
