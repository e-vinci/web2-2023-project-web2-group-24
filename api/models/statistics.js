const client = require('../elephantsql');

async function readAllStatisticsOfAnUser(user) {
  const result = await client.query('SELECT s.* FROM web2.statistiques s WHERE s.utilisateur = $1', [user]);
  return result.rows;
}

async function updateStatisticsOfAnUser(user, data) {
  let update;
  if (data.gameWin === true) {
    update = await client.query('UPDATE web2.statistiques SET nb_questions_posees = nb_questions_posees+$1, nb_parties_jouees = nb_parties_jouees+1, nb_victoire = nb_victoire+1, categorie_preferee = $2 WHERE utilisateur = $3 RETURNING *', [data.nbQuestionsAsked, data.favoriteCategory, user]);
  } else {
    update = await client.query('UPDATE web2.statistiques SET nb_questions_posees = nb_questions_posees+$1, nb_parties_jouees = nb_parties_jouees+1, nb_victoire = nb_victoire, categorie_preferee = $2 WHERE utilisateur = $3 RETURNING *', [data.nbQuestionsAsked, data.favoriteCategory, user]);
  }
  return update.rows;
}

module.exports = {
  readAllStatisticsOfAnUser,
  updateStatisticsOfAnUser,
};
