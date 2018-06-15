import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import NavContainer from '../Nav/NavContainer';
import Home from '../Home/Home';
import DashboardContainer from '../Dashboard/DashboardContainer';
import ConfirmContainer from '../Confirm/ConfirmContainer';
import Redirect from '../Redirect/Redirect';
import RequireAuth from '../RequireAuth/RequireAuth';
import { Wrapper, theme } from './AppStyles';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Wrapper>
        <NavContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={RequireAuth(DashboardContainer)} />
          <Route path="/confirm" component={RequireAuth(ConfirmContainer)} />
          <Route path="/redirect" component={Redirect} />
        </Switch>
      </Wrapper>
    </Router>
  </MuiThemeProvider>
);

export default App;
