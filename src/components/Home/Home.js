import React from 'react';

const DEV_AUTHORIZE = 'http://localhost:8080/api/authorize';

const Home = () => (
  <button>
    <a href={DEV_AUTHORIZE}>Sign In</a>
  </button>
);

export default Home;
