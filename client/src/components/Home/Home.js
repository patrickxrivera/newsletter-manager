import React from 'react';
import { connect } from 'react-redux';

import DashboardContainer from '../Dashboard/DashboardContainer';
import LabelsContainer from '../Labels/LabelsContainer';
import LandingPage from '../LandingPage/LandingPage';
import { getIsAuthenticated } from '../../reducers/auth';
import { getSavedLabels } from '../../reducers/labels/saved';

const Home = ({ isAuthenticated, savedLabels }) =>
  isAuthenticated ? renderAuthenticatedState(savedLabels) : <LandingPage />;

const renderAuthenticatedState = (savedLabels) =>
  savedLabels !== null ? <LabelsContainer /> : <DashboardContainer />;

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
  savedLabels: getSavedLabels(state)
});

export default connect(mapStateToProps)(Home);
