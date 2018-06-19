import axios from 'axios';

import endpoint from '../../endpoints';

export default {
  fetchInitialEmailsSent: (id) => axios.post(endpoint.fetchInitialEmails, { id }),

  addNewslettersToLabelSent: (id, labelName, queries) =>
    axios.post(endpoint.addNewslettersToLabel, { id, labelName, queries })
};
