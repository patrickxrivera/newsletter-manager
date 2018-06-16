import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { values } from 'ramda';

import * as Style from './LabelsStyles';
import keys from '../../endpoints';

const theme = 'red';

const applyStyle = (color) => ({
  floatingBtn: {
    borderColor: color
  },
  icon: {
    fill: color
  },
  primaryBtn: {
    backgroundColor: color
  }
});

const colors = ['#0984e3', '#ff7675', '#00cec9', '#a29bfe', '#00b894', '#6c5ce7'];

const Labels = ({ savedLabels }) => (
  <Style.Wrapper>
    <MuiThemeProvider>
      <Style.InnerWrapper>
        <Style.TilesWrapper>{values(savedLabels).map(renderTile)}</Style.TilesWrapper>
      </Style.InnerWrapper>
    </MuiThemeProvider>
  </Style.Wrapper>
);

const renderTile = ({ addedNewsletters, labelName }, idx) => {
  const color = colors[idx % colors.length];
  const style = applyStyle(color);
  console.log({ color });

  return (
    <Style.Tile key={`${labelName}`}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FloatingActionButton
          iconStyle={{ ...style.icon, ...Style.icon }}
          style={{ ...style.floatingBtn, ...Style.floatingBtn }}>
          <ContentClear />
        </FloatingActionButton>
        <Style.TileTitle>{labelName}</Style.TileTitle>
        <Style.TileDescription>{addedNewsletters.length} newsletters</Style.TileDescription>
      </div>
      <div>
        <Style.ActionsWrapper>
          <Style.Link href={`${keys.gmail}${labelName}`} target="_blank">
            <Style.Text color={color}>Gmail</Style.Text>
          </Style.Link>{' '}
          <Button
            size="small"
            style={{ ...style.primaryBtn, ...Style.primaryBtn }}
            variant="raised">
            View
          </Button>
        </Style.ActionsWrapper>
      </div>
    </Style.Tile>
  );
};

export default Labels;
