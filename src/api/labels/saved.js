import axios from 'axios';

import endpoint from '../../endpoints';

export default {
  deleteLabelSent: (userId, labelId) =>
    axios.delete(endpoint.deleteLabel, { params: { id: userId, labelId } }),
  fetchSavedLabelsSent: (userId) => axios.get(endpoint.getLabels, { params: { userId } })
};
