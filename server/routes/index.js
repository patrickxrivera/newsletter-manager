const express = require('express');
const passport = require('passport');

const UserController = require('../controllers/user');

module.exports = (app) => {
  // User
  app.get('/api/authorize', UserController.authenticate);
  app.get('/auth/google/callback?*', UserController.redirect);
  app.get('/api/messages', UserController.getMessages);
};
