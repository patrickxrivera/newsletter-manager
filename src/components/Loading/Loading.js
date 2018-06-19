import React from 'react';
import ReactLoading from 'react-loading';

import { Wrapper, LoadingWrapper, Text } from './LoadingStyles';

const Loading = ({ loadingMsg }) => (
  <Wrapper>
    <LoadingWrapper>
      <Text>{loadingMsg}</Text>
      <ReactLoading
        delay={0}
        type={'bubbles'}
        color={'rgb(52, 168, 83)'}
        height={300}
        width={300}
      />
    </LoadingWrapper>
  </Wrapper>
);

export default Loading;
