import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signInUser } from '../../actions/auth';
import parseTokenParams from './helpers/parseAuthParams';

class Redirect extends Component {
  componentDidMount() {
    const { signInUser, history } = this.props;
    const tokens = parseTokenParams(window.location.search);

    signInUser(tokens);

    history.push('/dashboard');
  }

  render() {
    return <div>Redirect</div>;
  }
}

export default connect(null, { signInUser })(Redirect);
