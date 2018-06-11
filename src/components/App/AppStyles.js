import styled, { injectGlobal } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

export const AppStyles = injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

export const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

export const Wrapper = styled.div`
  color: rgb(66, 66, 65);
  fill: currentcolor;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial,
    sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 1.35;
`;
