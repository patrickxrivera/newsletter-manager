module.exports = (next) => (err) => {
  const errorMessage = err.errors ? err.errors[0].message : err;

  next(errorMessage);

  throw new Error(`${errorMessage}`);
};
