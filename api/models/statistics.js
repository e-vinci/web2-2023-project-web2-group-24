const client = require('../elephantsql');

async function readAllStatisticsOfAnUser(user) {
  const result = await client.query('SELECT s.*, u.nom_utilisateur, c.nom_categorie FROM web2.statistiques s, web2.utilisateurs u, web2.categories c WHERE s.utilisateur = $1 AND u.no_utilisateur = s.utilisateur AND s.categorie_preferee = c.id_categorie', [user]);
  return result.rows[0];
}

async function updateStatisticsOfAnUser(user, data) {
  let update;
  if (data.gameWin === true) {
    update = await client.query('UPDATE web2.statistiques SET nb_questions_posees = nb_questions_posees+$1, nb_parties_jouees = nb_parties_jouees+1, nb_victoire = nb_victoire+1, categorie_preferee = $2 WHERE utilisateur = $3 RETURNING *', [data.nbQuestionsAsked, data.favoriteCategory, user]);
  } else {
    update = await client.query('UPDATE web2.statistiques SET nb_questions_posees = nb_questions_posees+$1, nb_parties_jouees = nb_parties_jouees+1, nb_victoire = nb_victoire, categorie_preferee = $2 WHERE utilisateur = $3 RETURNING *', [data.nbQuestionsAsked, data.favoriteCategory, user]);
  }
  return update.rows[0];
}

module.exports = {
  readAllStatisticsOfAnUser,
  updateStatisticsOfAnUser,
};
