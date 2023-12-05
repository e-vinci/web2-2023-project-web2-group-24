const db = require('../elephantsql');

function readOneQuestion(category) {
  return db.query('SELECT * FROM web2.questions WHERE categorie = ? AND no_question = 1;', category);
}

module.exports = {
  readOneQuestion,
};
