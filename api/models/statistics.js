const client = require('../elephantsql');

async function readAllStatisticsOfAnUser(user) {
  const result = await client.query('SELECT s.* FROM web2.statistiques s WHERE s.utilisateur = $1', [user]);
  return result.rows;
}

async function updateStatisticsOfAnUser(user, data) {
  const update = await client.query('UPDATE web2.statistiques SET nb_questions_posees = $1, nb_parties_jouees = nb_parties_jouees+1, nb_victoire = $2, categorie_preferee = $3 WHERE utilisateur = $4', [data.nbQuestionsAsked, data.gameWin, data.favoriteCategory, user]);
  return update;
}

module.exports = {
  readAllStatisticsOfAnUser,
  updateStatisticsOfAnUser,
};
