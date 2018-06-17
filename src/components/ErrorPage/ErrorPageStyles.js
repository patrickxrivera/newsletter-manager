import styled from 'styled-components';

import media from '../../utils/mediaTemplate';

export const Link = styled.a`
  text-decoration: none;
`;

export const ContentWrapper = styled.div`
  margin-top: 6rem;
  background-color: #fff;
  width: 600px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  box-shadow: rgba(23, 43, 99, 0.26) 0 7px 42px;

  ${media.tablet`min-width: 350px`};
  ${media.tablet`margin: 5rem 1rem`};
`;

export const Text = styled.div`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const errorPageButton = {
  color: '#fff',
  backgroundColor: '#34a853',
  height: '50px',
  width: '200px',
  marginTop: '1rem'
};
