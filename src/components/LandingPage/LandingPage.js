import React from 'react';
import Button from '@material-ui/core/Button';

import * as Style from './LandingPageStyles';
import endpoint from '../../endpoints';

const LandingPage = ({}) => (
  <Style.Wrapper>
    <Style.BackgroundImg src={require('./landing-page.jpg')} />
    <Style.HeadlineWrapper>
      <Style.Headline>Newsletter Subscriptions Made Simple.</Style.Headline>
      <Style.Description>More time reading.</Style.Description>
      <Style.Description>Less time searching.</Style.Description>
      <Button style={Style.primaryButton} variant="raised">
        <Style.Link href={endpoint.signIn}>Connect with GMail</Style.Link>
      </Button>
    </Style.HeadlineWrapper>
  </Style.Wrapper>
);

export default LandingPage;
