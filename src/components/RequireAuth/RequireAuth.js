import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getIsAuthenticated } from '../../reducers/auth';

export default (ComposedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: getIsAuthenticated(state)
  });

  return connect(mapStateToProps)(Authentication);
};
