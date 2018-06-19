import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import NavContainer from '../Nav/NavContainer';
import Home from '../Home/Home';
import DashboardContainer from '../Dashboard/DashboardContainer';
import ConfirmContainer from '../Confirm/ConfirmContainer';
import LabelsContainer from '../Labels/LabelsContainer';
import CreateLabelContainer from '../CreateLabel/CreateLabelContainer';
import LabelWrapper from '../Labels/LabelWrapper';
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
          <Route path="/labels" component={RequireAuth(LabelsContainer)} />
          <Route exact path="/label/new" component={RequireAuth(CreateLabelContainer)} />
          <Route path="/label/:labelId" component={RequireAuth(LabelWrapper)} />
          <Route path="/redirect/:id" component={Redirect} />
        </Switch>
      </Wrapper>
    </Router>
  </MuiThemeProvider>
);

export default App;
