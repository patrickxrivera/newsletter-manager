import React from 'react';
import ReactLoading from 'react-loading';

import * as Style from '../Form/Settings/SettingsStyles';
import { Wrapper } from '../Loading/LoadingStyles';
import { Link, ContentWrapper, Text } from './ErrorPageStyles';

const ErrorPage = ({ errorMsg }) => (
  <Wrapper>
    <ContentWrapper>
      <Text>{errorMsg}</Text>
      <Link href="/" style={{}}>
        <Style.Btn type="submit" style={Style.primaryButton} variant="raised">
          <Style.ButtonArea>
            <Style.Text>Create Label</Style.Text>
          </Style.ButtonArea>
        </Style.Btn>
      </Link>
    </ContentWrapper>
  </Wrapper>
);

export default ErrorPage;
