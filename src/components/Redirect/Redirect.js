import React, { Component } from 'react';
import { connect } from 'react-redux';

import parseParams from './helpers/parseParams';
import { signInUser } from '../../actions/auth';
import { getSavedLabels } from '../../reducers/labels/saved';

class Redirect extends Component {
  componentDidMount() {
    const { signInUser, history, savedLabels } = this.props;
    const id = parseParams(window.location.search);

    signInUser(id);

    savedLabels !== null ? history.push('/labels') : history.push('/dashboard');
  }

  render() {
    return <div>Redirect</div>;
  }
}

const mapStateToProps = (state) => ({
  savedLabels: getSavedLabels(state)
});

export default connect(mapStateToProps, { signInUser })(Redirect);
