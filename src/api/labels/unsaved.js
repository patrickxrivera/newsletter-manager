import axios from 'axios';

import endpoint from '../../endpoints';

export default {
  fetchInitialEmailsSent: (id) => axios.post(endpoint.fetchInitialEmails, { id })
};
