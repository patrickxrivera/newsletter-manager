import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { isEmpty, values } from 'ramda';

import * as Style from './LabelsStyles';
import DeleteLabel from './DeleteLabel';
import ErrorPage from '../ErrorPage/ErrorPage';
import keys from '../../endpoints';
import getStyle from './getStyle';
import { gmailButton, fontSize } from '../Confirm/ConfirmStyles';

const Labels = ({ savedLabels, errorMsg, ...rest }) => (
  <Style.Wrapper>
    <MuiThemeProvider>
      <Style.InnerWrapper>
        {!savedLabels || isEmpty(savedLabels) ? (
          <ErrorPage errorMsg={errorMsg} />
        ) : (
          renderTileWrapper(savedLabels, rest)
        )}
      </Style.InnerWrapper>
    </MuiThemeProvider>
  </Style.Wrapper>
);

const renderTileWrapper = (savedLabels, { openDialog, ...rest }) => (
  <div>
    <Style.TilesWrapper>{values(savedLabels).map(renderTile(rest))}</Style.TilesWrapper>
    {openDialog && <DeleteLabel openDialog={openDialog} {...rest} />}
  </div>
);

const renderTile = ({ handleOpen }) => ({ addedNewsletters, labelName, labelId }, idx) => {
  const style = getStyle(idx);

  return (
    <Style.Tile key={`${labelName}`}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FloatingActionButton
          onClick={handleOpen(labelName, labelId)}
          iconStyle={{ ...style.icon, ...Style.icon }}
          style={{ ...style.floatingBtn, ...Style.floatingBtn }}>
          <ContentClear />
        </FloatingActionButton>
        <Style.TileTitle>{labelName}</Style.TileTitle>
        <Style.TileDescription>{addedNewsletters.length} newsletters</Style.TileDescription>
      </div>
      <div>
        <Style.ActionsWrapper>
          <Style.RegLink href={`${keys.gmail}${labelName}`} target="_blank">
            <Style.Text color={style.icon.fill}>Gmail</Style.Text>
          </Style.RegLink>{' '}
          <Style.RouterLink
            to={{
              pathname: `/label/${labelName}`,
              state: {
                labelId: labelId,
                title: labelName,
                emails: addedNewsletters,
                btnStyle: gmailButton,
                fontSize: fontSize,
                tableManagerStyle: Style.tableManager
              }
            }}>
            <Button
              size="small"
              style={{ ...style.primaryBtn, ...Style.primaryBtn }}
              variant="raised">
              View
            </Button>
          </Style.RouterLink>
        </Style.ActionsWrapper>
      </div>
    </Style.Tile>
  );
};

export default Labels;
