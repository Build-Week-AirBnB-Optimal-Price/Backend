const knex = require('knex');

const config = require('../knexfile');

const ENV = process.env.NODE_ENV || 'development';

module.exports = knex(config[ENV]);
