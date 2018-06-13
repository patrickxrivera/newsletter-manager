import React from 'react';
import ReactLoading from 'react-loading';

import { Wrapper, LoadingWrapper, Text } from './LoadingStyles';

const Loading = () => (
  <Wrapper>
    <LoadingWrapper>
      <Text>One moment, our robots are searching for your newsletters now.</Text>
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
