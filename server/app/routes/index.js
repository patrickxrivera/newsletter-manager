const express = require('express');
const passport = require('passport');

const UserController = require('../controllers/user');
const LabelController = require('../controllers/label');

module.exports = (app) => {
  // User
  app.get('/api/authorize', UserController.authenticate);
  app.get('/auth/google/callback?*', UserController.redirect);
  app.post('/api/emails', UserController.getInitialEmails);

  // Label
  app.post('/api/label/create', LabelController.addNewslettersToLabel);
  app.delete('/api/label', LabelController.deleteLabel);
  app.get('/api/labels', LabelController.getLabels);
};
