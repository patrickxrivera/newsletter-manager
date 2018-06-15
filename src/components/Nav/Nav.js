import React from 'react';
import Button from '@material-ui/core/Button';

import * as Style from './NavStyles';
import endpoint from '../../endpoints';

import './styles.css';

const Nav = ({ isAuthenticated, ...props }) =>
  isAuthenticated ? renderSignedIn(props) : renderSignedOut();

const renderSignedIn = ({ handleSignOutClick }) => (
  <Style.Wrapper>
    <Style.Title>NewsletterManager</Style.Title>
    <Style.MenuWrapper>
      <Style.StyledLink activeClassName="active" exact to="/labels">
        My Labels
      </Style.StyledLink>
      <Style.StyledLink activeClassName="active" exact to="/label/new">
        Create Label
      </Style.StyledLink>
      <Style.Divider />
      <Button onClick={handleSignOutClick} style={Style.secondaryButton} variant="raised">
        Sign Out
      </Button>
    </Style.MenuWrapper>
  </Style.Wrapper>
);

const renderSignedOut = () => (
  <Style.Wrapper>
    <Style.Title>NewsletterManager</Style.Title>
    <Button style={Style.secondaryButton} variant="raised">
      <Style.Link href={endpoint.signIn}>Sign In</Style.Link>
    </Button>
  </Style.Wrapper>
);

export default Nav;
