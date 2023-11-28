// test-env.js
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({ path: '../data_info.env' });

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
