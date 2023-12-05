/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
const pg = require('pg');
require('dotenv').config({ path: '../data_info.env' });

// or native libpq bindings
// var pg = require('pg').native

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

// const conString = 'jdbc:postgresql://flora.db.elephantsql.com/ugdjjlef'; // Can be found in the Details page
const client = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

module.exports = client;
