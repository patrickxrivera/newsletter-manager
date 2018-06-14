const getId = ({ id }) => id;

module.exports = (messageIdsBlob) =>
  messageIdsBlob.reduce((acc, curr) => [...acc, ...curr.data.messages.map(getId)], []);
