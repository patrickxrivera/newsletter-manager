const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];

console.log(configuration);

const db = require('knex')(configuration);

module.exports = db;
