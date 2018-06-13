import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

import { deleteAdditionalNewsletter } from '../../../actions/labels';

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
    minHeight: '80px'
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

const ChipsArray = (props) => {
  const { classes, deleteAdditionalNewsletter, newsletters } = props;
  return (
    <Paper className={classes.root}>
      {newsletters.map(renderNewsletter(deleteAdditionalNewsletter, classes))}
    </Paper>
  );
};

const renderNewsletter = (deleteAdditionalNewsletter, classes) => (name, idx) => (
  <Chip
    style={{ backgroundColor: '#fff', border: '2px solid #e9ebeb' }}
    key={idx}
    label={name}
    onDelete={() => deleteAdditionalNewsletter(name)}
    className={classes.chip}
  />
);

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, { deleteAdditionalNewsletter })(withStyles(styles)(ChipsArray));
