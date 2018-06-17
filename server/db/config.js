const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];

const db = require('knex')(configuration);

// db.migrate.latest([configuration]);

module.exports = db;
