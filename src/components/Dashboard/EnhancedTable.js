import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import { lighten } from '@material-ui/core/styles/colorManipulator';

import * as Style from '../Form/Settings/SettingsStyles';

const columnData = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Account Name' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Email Address' }
];

class EnhancedTableHead extends React.Component {
  createSortHandler = (property) => (event) => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, hideCheckbox } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            {!hideCheckbox && (
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={numSelected === rowCount}
                onChange={onSelectAllClick}
              />
            )}
          </TableCell>
          {columnData.map((column) => {
            return (
              <TableCell
                style={{ textAlign: 'left', flexDirection: 'initial' }}
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}>
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}>
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const toolbarStyles = (theme) => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  }
});

let EnhancedTableToolbar = ({ btnStyle, fontSize, numSelected, classes, title, ...props }) => (
  <Toolbar
    className={classNames(classes.root, {
      [classes.highlight]: numSelected > 0
    })}>
    <div className={classes.title}>
      {numSelected > 0 ? (
        <Typography color="inherit" variant="subheading">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography variant="title" id="tableTitle">
          {title}
        </Typography>
      )}
    </div>
    <div className={classes.spacer} />
    <div className={classes.actions}>
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton
            onClick={() => {
              props.handleDeleteClick();
            }}
            aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        fontSize && (
          <a
            style={fontSize}
            target="_blank"
            href={`https://mail.google.com/mail/u/0/?tab=wm#label/${title}`}>
            <Style.Btn type="submit" style={btnStyle} variant="raised">
              <Style.ButtonArea>
                <Style.Text style={fontSize}>Open in Gmail</Style.Text>
              </Style.ButtonArea>
            </Style.Btn>
          </a>
        )
      )}
    </div>
  </Toolbar>
);

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: 'auto'
  }
});

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    selected: [],
    page: 0,
    rowsPerPage: 10
  };

  handleDeleteClick = () => {
    const { labelId, deleteEmails } = this.props;

    this.handleSelectAllClick();

    deleteEmails(this.state.selected, labelId);
  };

  handleSelectAllClick = (event, checked) => {
    checked
      ? this.setState({ selected: this.props.emails.map((e) => e.emailAddress) })
      : this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = (id) => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes, emails, title, tableManagerStyle, btnStyle, fontSize, ...props } = this.props;
    const { order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, emails.length - page * rowsPerPage);

    const tableStyle = {
      marginTop: '0px',
      width: props.width.style || '50%',
      borderRadius: '10px',
      ...tableManagerStyle
    };

    return (
      <Paper style={tableStyle} className={classes.root}>
        <EnhancedTableToolbar
          title={title}
          handleDeleteClick={this.handleDeleteClick}
          btnStyle={btnStyle}
          numSelected={selected.length}
          fontSize={fontSize}
        />
        <div className={classes.tableWrapper}>
          <Table
            style={{ minWidth: '50px' }}
            className={classes.table}
            aria-labelledby="tableTitle">
            <EnhancedTableHead
              hideCheckbox={props.hideCheckbox}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={emails.length}
            />
            <TableBody>
              {emails.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((e) => {
                const isSelected = this.isSelected(e.emailAddress);
                return (
                  <TableRow
                    hover
                    onClick={(event) => this.handleClick(event, e.emailAddress)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={e.emailAddress}
                    selected={isSelected}>
                    <TableCell padding="checkbox">
                      {!props.hideCheckbox && <Checkbox checked={isSelected} />}
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      {e.accountName}
                    </TableCell>
                    <TableCell>{e.emailAddress}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={emails.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page'
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page'
          }}
          onChangePage={this.handleChangePage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);
