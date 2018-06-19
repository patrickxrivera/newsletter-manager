import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Nav from './Nav';
import { signOutUser } from '../../actions/auth';
import { getIsAuthenticated } from '../../reducers/auth';

class NavContainer extends Component {
  handleSignOutClick = () => {
    const { signOutUser, history } = this.props;
    signOutUser();
    history.push('/');
  };

  render() {
    return <Nav {...this.props} handleSignOutClick={this.handleSignOutClick} />;
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state)
});

export default withRouter(connect(mapStateToProps, { signOutUser })(NavContainer));
