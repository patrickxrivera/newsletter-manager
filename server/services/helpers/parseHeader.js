module.exports = ({ data }) => data.payload.headers.filter(getFromField);

const getFromField = ({ name }) => name === 'From';
