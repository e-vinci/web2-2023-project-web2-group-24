/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
const pg = require('pg');
require('dotenv').config({ path: '../data_info.env' });

// const conString = 'jdbc:postgresql://flora.db.elephantsql.com/ugdjjlef'; // Can be found in the Details page
const client = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

client.connect();

process.on('exit', () => {
  client.end();
});

module.exports = client;
