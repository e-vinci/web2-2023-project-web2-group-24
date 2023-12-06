const client = require('../elephantsql');

async function readAllCategories() {
  const result = await client.query('SELECT DISTINCT c.nom_categorie FROM web2.categories c');
  console.log(result);
  return result.rows;
}

module.exports = {
  readAllCategories,
};
