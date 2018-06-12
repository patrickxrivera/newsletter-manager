import React from 'react';
import { connect } from 'react-redux';

import DashboardContainer from '../Dashboard/DashboardContainer';
import LandingPage from '../LandingPage/LandingPage';
import { getIsAuthenticated } from '../../reducers/auth';

const Home = ({ isAuthenticated }) => (isAuthenticated ? <DashboardContainer /> : <LandingPage />);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state)
});

export default connect(mapStateToProps)(Home);
