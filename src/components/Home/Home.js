import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../Dashboard/Dashboard';
import LandingPage from '../LandingPage/LandingPage';
import { getIsAuthenticated } from '../../reducers/auth';

const Home = ({ isAuthenticated }) => (isAuthenticated ? <Dashboard /> : <LandingPage />);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state)
});

export default connect(mapStateToProps)(Home);
