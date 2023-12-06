/* eslint-disable camelcase */
const client = require('../elephantsql');

async function readAllCategories() {
  const result = await client.query('SELECT * FROM web2.categories');
  return result.rows;
}

async function getOneCategory(id) {
  const result = await client.query('SELECT * FROM web2.categories WHERE id_categorie = $1', [id]);
  return result.rows[0];
}

module.exports = {
  readAllCategories, getOneCategory,
};
