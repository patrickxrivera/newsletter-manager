import React from 'react';

import Loading from '../Loading/Loading';
import EnhancedTable from './EnhancedTable';
import NewsletterContainer from '../Form/Newsletter/NewsletterContainer';
import SettingsContainer from '../Form/Settings/SettingsContainer';
import { Wrapper, InnerWrapper, ContentWrapper, FormWrapper } from './DashboardStyles';
import './styles.css';

import { primaryButton } from '../Form/Settings/SettingsStyles';

const Dashboard = ({ loadingMsg, emails, ...rest }) => (
  <Wrapper>
    <InnerWrapper>
      {emails.length ? renderEnhancedTable(emails, rest) : <Loading loadingMsg={loadingMsg} />}
    </InnerWrapper>
  </Wrapper>
);

const renderEnhancedTable = (emails, rest) => (
  <ContentWrapper className="fade-in">
    <EnhancedTable btnStyle={primaryButton} title={'Your Newsletters'} emails={emails} {...rest} />
    <FormWrapper>
      <NewsletterContainer />
      <SettingsContainer />
    </FormWrapper>
  </ContentWrapper>
);

export default Dashboard;
