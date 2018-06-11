import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
  getMessageIds = async () => {
    const messageIds = await axios.get('http://localhost:8080/api/messages');

    console.log(messageIds);
  };

  render() {
    return <div>Dashboard</div>;
  }
}

export default Dashboard;
