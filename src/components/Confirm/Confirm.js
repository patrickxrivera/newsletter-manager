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

const renderConfirmationPage = ({ addedNewsletters, labelName }, rest = {}) => (
  <ContentWrapper className="fade-in">
    <EnhancedTable
      title={labelName}
      emails={addedNewsletters}
      btnStyle={gmailButton}
      fontSize={fontSize}
      tableManagerStyle={{ margin: '0 auto' }}
      width={{ style: '40%' }}
      hideCheckbox={true}
      {...rest}
    />
  </ContentWrapper>
);

export default Confirm;
