import React from 'react';
import { connect } from 'react-redux';

import DashboardContainer from '../Dashboard/DashboardContainer';
import LabelsContainer from '../Labels/LabelsContainer';
import LandingPage from '../LandingPage/LandingPage';
import { getIsAuthenticated } from '../../reducers/auth';
import { getCurrentLabel } from '../../reducers/labels/saved';

const Home = ({ isAuthenticated, currentLabel }) =>
  isAuthenticated ? renderAuthenticatedState(currentLabel) : <LandingPage />;

const renderAuthenticatedState = (currentLabel) =>
  currentLabel !== null ? <LabelsContainer /> : <DashboardContainer />;

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
  currentLabel: getCurrentLabel(state)
});

export default connect(mapStateToProps)(Home);
