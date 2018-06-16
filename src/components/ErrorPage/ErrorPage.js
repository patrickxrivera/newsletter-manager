import React from 'react';
import ReactLoading from 'react-loading';

import * as Style from '../Form/Settings/SettingsStyles';
import { Wrapper } from '../Loading/LoadingStyles';
import { Link, ContentWrapper, Text, errorPageButton } from './ErrorPageStyles';
import { StyledLink } from '../Nav/NavStyles';

const ErrorPage = ({ errorMsg }) => (
  <Wrapper>
    <ContentWrapper>
      <Text>{errorMsg}</Text>
      <StyledLink to="/label/new">
        <Style.Btn type="submit" style={errorPageButton} variant="raised">
          <Style.ButtonArea>
            <Style.Text>Create Label</Style.Text>
          </Style.ButtonArea>
        </Style.Btn>
      </StyledLink>
    </ContentWrapper>
  </Wrapper>
);

export default ErrorPage;
