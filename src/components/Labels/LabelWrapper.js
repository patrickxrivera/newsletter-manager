import React from 'react';

import EnhancedTable from '../Dashboard/EnhancedTable';
import { Wrapper, InnerWrapper, ContentWrapper } from '../Dashboard/DashboardStyles';

const LabelWrapper = ({ location }) => (
  <Wrapper>
    <InnerWrapper>
      <ContentWrapper className="fade-in">
        <EnhancedTable {...location.state} />
      </ContentWrapper>
    </InnerWrapper>
  </Wrapper>
);

export default LabelWrapper;
