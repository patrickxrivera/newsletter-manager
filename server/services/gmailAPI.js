const Gmail = {
  init: (credentials) => {
    google.gmail({ version: 'v1', auth: credentials });
  }
};

export default gmail;
