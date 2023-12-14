const client = require('../elephantsql');

async function readOneQuestion(category) {
  const result = await client.query('SELECT q.*, c.nom_categorie   FROM web2.questions q, web2.categories c WHERE q.categorie = c.id_categorie AND q.categorie = $1 ORDER BY RANDOM() LIMIT 1', [category]);
  return result.rows[0];
}

module.exports = {
  readOneQuestion,
};
