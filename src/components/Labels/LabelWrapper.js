import React from 'react';
import { connect } from 'react-redux';

import EnhancedTable from '../Dashboard/EnhancedTable';
import { Wrapper, InnerWrapper, ContentWrapper } from '../Dashboard/DashboardStyles';

const LabelWrapper = ({ location, deleteSavedEmails }) => (
  <Wrapper>
    <InnerWrapper>
      <ContentWrapper className="fade-in">
        <EnhancedTable
          {...location.state}
          deleteEmails={deleteSavedEmails}
          width={{ style: '40%' }}
          hideCheckbox={true}
        />
      </ContentWrapper>
    </InnerWrapper>
  </Wrapper>
);

export default LabelWrapper;
