import React, { Component } from 'react';
import { connect } from 'react-redux';

import parseParams from './helpers/parseParams';
import { signInUser } from '../../actions/auth';
import { getCurrentLabel } from '../../reducers/labels/saved';

class Redirect extends Component {
  componentDidMount() {
    const { signInUser, history, currentLabel } = this.props;
    const id = parseParams(window.location.search);

    signInUser(id);

    currentLabel !== null ? history.push('/labels') : history.push('/dashboard');
  }

  render() {
    return <div>Redirect</div>;
  }
}

const mapStateToProps = (state) => ({
  currentLabel: getCurrentLabel(state)
});

export default connect(mapStateToProps, { signInUser })(Redirect);
