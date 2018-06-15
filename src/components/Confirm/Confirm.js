import React from 'react';
import { isNil, isEmpty } from 'ramda';

import Loading from '../Loading/Loading';
import EnhancedTable from '../Dashboard/EnhancedTable';
import { Wrapper, InnerWrapper, ContentWrapper } from '../Dashboard/DashboardStyles';
import { gmailButton, fontSize } from './ConfirmStyles';

const Confirm = (props) => (
  <Wrapper>
    <InnerWrapper>{handleConfirmation(props)}</InnerWrapper>
  </Wrapper>
);

const handleConfirmation = ({ currentLabel, loadingMsg }) => {
  switch (true) {
    case isNil(currentLabel):
      return <Loading loadingMsg={loadingMsg} />;
    case isEmpty(currentLabel):
      return <Loading loadingMsg="Show error page" />;
    default:
      return renderConfirmationPage(currentLabel);
  }
};

const renderConfirmationPage = (currentLabel, rest = {}) => (
  <ContentWrapper className="fade-in">
    <EnhancedTable
      title={currentLabel.labelName}
      emails={currentLabel.addedNewsletters}
      btnStyle={gmailButton}
      fontSize={fontSize}
      tableManagerStyle={{ margin: '0 auto' }}
      {...rest}
    />
  </ContentWrapper>
);

export default Confirm;
