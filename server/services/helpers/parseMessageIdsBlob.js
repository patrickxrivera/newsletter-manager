const getId = ({ id }) => id;

module.exports = (messageIdsBlob) =>
  messageIdsBlob.reduce(
    (acc, curr) => (curr.data.messages ? [...acc, ...curr.data.messages.map(getId)] : acc),
    []
  );
