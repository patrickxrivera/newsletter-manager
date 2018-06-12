import React from 'react';
import GoogleIcon from 'react-icons/lib/fa/google';

import * as Style from './LandingPageStyles';
import endpoint from '../../endpoints';

const LandingPage = () => (
  <Style.Wrapper>
    <Style.BackgroundImg src={require('./landing-page.jpg')} />
    <Style.HeadlineWrapper>
      <Style.Headline>Add a label to all your newsletters in Gmail.</Style.Headline>
      <Style.Description>More time reading. Less time searching.</Style.Description>
      <Style.Link href={endpoint.signIn}>
        <Style.Btn style={Style.primaryButton} variant="raised">
          <Style.ButtonArea>
            <Style.Text>Connect with GMail</Style.Text>
            <GoogleIcon />
          </Style.ButtonArea>
        </Style.Btn>
      </Style.Link>
    </Style.HeadlineWrapper>
  </Style.Wrapper>
);

export default LandingPage;
