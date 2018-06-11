import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Redirect from '../Redirect/Redirect';
import { Wrapper } from './AppStyles';

const App = () => (
  <Router>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/redirect" component={Redirect} />
      </Switch>
    </Wrapper>
  </Router>
);

export default App;
