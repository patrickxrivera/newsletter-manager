import React from 'react';

import Loading from '../Loading/Loading';
import EnhancedTable from './EnhancedTable';
import ConfirmContainer from '../Form/Confirm/ConfirmContainer';
import { Wrapper, InnerWrapper, ContentWrapper, FormWrapper } from './DashboardStyles';
import './styles.css';

const Dashboard = ({ emails, ...rest }) => (
  <Wrapper>
    <InnerWrapper>
      {emails.length ? (
        <ContentWrapper className="fade-in">
          <EnhancedTable emails={emails} {...rest} />
          <FormWrapper>
            <ConfirmContainer />
            <ConfirmContainer />
          </FormWrapper>
        </ContentWrapper>
      ) : (
        <Loading />
      )}
    </InnerWrapper>
  </Wrapper>
);

export default Dashboard;
