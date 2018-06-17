import styled from 'styled-components';

import media from '../../utils/mediaTemplate';

export const Wrapper = styled.div`
  background-color: rgb(233, 235, 238);
  height: 100vh;
  width: 100%;

  ${media.tablet`height: 100%`};
`;

export const InnerWrapper = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5rem;

  ${media.tablet`flex-direction: column`};
  ${media.phone`margin: 0 2.5rem`};
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  min-width: 550px;

  ${media.tablet`min-width: 300px`};
  ${media.tablet`margin-left: 0`};
`;
