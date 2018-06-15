import React from 'react';
import { isNil, isEmpty } from 'ramda';

import Loading from '../Loading/Loading';
import EnhancedTable from './EnhancedTable';
import NewsletterContainer from '../Form/Newsletter/NewsletterContainer';
import SettingsContainer from '../Form/Settings/SettingsContainer';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Wrapper, InnerWrapper, ContentWrapper, FormWrapper } from './DashboardStyles';
import './styles.css';

import { primaryButton } from '../Form/Settings/SettingsStyles';

const Dashboard = (props) => (
  <Wrapper>
    <InnerWrapper>{handleDashboardRender(props)}</InnerWrapper>
  </Wrapper>
);

const handleDashboardRender = ({ emails, loadingMsg, errorMsg, ...rest }) => {
  switch (true) {
    case isNil(emails):
      return <Loading loadingMsg={loadingMsg} />;
    case isEmpty(emails):
      return <ErrorPage errorMsg={errorMsg} />;
    default:
      return renderEnhancedTable(emails, rest);
  }
};

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
