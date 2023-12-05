const db = require('../elephantsql');

function readOneQuestion(category) {
  return db.query('SELECT * FROM web2.questions WHERE categorie = $1 ORDER BY RANDOM() LIMIT 1;', [category]);
}

module.exports = {
  readOneQuestion,
};
