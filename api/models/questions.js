const client = require('../elephantsql');

async function readOneQuestion(category) {
  const result = await client.query('SELECT q.* FROM web2.questions q WHERE q.categorie = $1 ORDER BY RANDOM() LIMIT 1', [category]);
  return result.rows[0];
}

module.exports = {
  readOneQuestion,
};
