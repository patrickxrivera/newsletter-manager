import React from 'react';

import { Wrapper, InnerWrapper } from './DashboardStyles';
import EnhancedTable from './EnhancedTable';

const Dashboard = ({ emails }) => (
  <Wrapper>
    <InnerWrapper>{emails.length && <EnhancedTable emails={emails} />}</InnerWrapper>
  </Wrapper>
);

export default Dashboard;
