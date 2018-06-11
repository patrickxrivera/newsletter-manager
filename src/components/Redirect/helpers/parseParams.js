export default (url) => {
  const params = new URLSearchParams(url);

  let parsed = {};

  // Display the key/value pairs
  for (let pair of params.entries()) {
    parsed[pair[0]] = pair[1];
  }

  return parsed;
};
