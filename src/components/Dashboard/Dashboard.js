import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const DEV_MESSAGES = 'http://localhost:8080/api/messages';

class Dashboard extends Component {
  getMessageIds = async () => {
    const { id } = this.props;
    const newsletters = await axios.post(DEV_MESSAGES, { id });

    console.log(newsletters.data);
  };

  render() {
    return <button onClick={this.getMessageIds}>Get Message Ids</button>;
  }
}

const mapStateToProps = (state) => ({
  id: state.auth.id
});

export default connect(mapStateToProps)(Dashboard);
