import styled, { injectGlobal } from 'styled-components';

export const AppStyles = injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

export const Wrapper = styled.div`
  color: 'black';
  fill: currentcolor;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.35;
`;
