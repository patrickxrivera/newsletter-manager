import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';

import * as Style from './LabelsStyles';

const Labels = ({}) => (
  <Style.Wrapper>
    <Style.InnerWrapper>
      <Style.TilesWrapper>
        <Style.Tile>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <MuiThemeProvider>
              <FloatingActionButton
                iconStyle={{
                  width: '23px',
                  height: '23px',
                  fill: '#0984e3',
                  backgroundColor: '#fff'
                }}
                style={{
                  width: '30px',
                  height: '30px',
                  padding: '3px',
                  borderColor: '#0984e3',
                  alignSelf: 'flex-end'
                }}>
                <ContentClear />
              </FloatingActionButton>
            </MuiThemeProvider>
            <Style.TileTitle>All Newsletters</Style.TileTitle>
            <Style.TileDescription>13 newsletters</Style.TileDescription>
          </div>
          <div>
            <Style.ActionsWrapper>
              <Style.Text>Gmail</Style.Text>
              <Button size="small" style={Style.primaryButton} variant="raised">
                View
              </Button>
            </Style.ActionsWrapper>
          </div>
        </Style.Tile>
      </Style.TilesWrapper>
    </Style.InnerWrapper>
  </Style.Wrapper>
);

export default Labels;
