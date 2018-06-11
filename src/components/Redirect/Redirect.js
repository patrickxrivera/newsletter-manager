import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signInUser } from '../../actions/auth';
import parseParams from './helpers/parseParams';

class Redirect extends Component {
  componentDidMount() {
    const { signInUser, history } = this.props;
    const id = parseParams(window.location.search);

    signInUser(id);
    console.log(id);
    history.push('/dashboard');
  }

  render() {
    return <div>Redirect</div>;
  }
}

export default connect(null, { signInUser })(Redirect);
