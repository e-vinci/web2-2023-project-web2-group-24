const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const escape = require('escape-html');
const client = require('../elephantsql');

const jwtSecret = 'ilovemyquizz!';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const saltRounds = 10;

async function login(username, password) {
  const userFound = await readOneUserFromUsername(username);
  if (!userFound) return undefined;

  const passwordMatch = await bcrypt.compare(password, userFound.mdp);
  if (!passwordMatch) return undefined;

  const token = jwt.sign(
    { username }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );

  const authenticatedUser = {
    id: userFound.no_utilisateur,
    username,
    token,
  };

  return authenticatedUser;
}

async function register(username, password, email) {
  const userFound = await readOneUserFromUsername(username, email);
  if (userFound) return undefined;

  const escapedUsername = escape(username);

  await createOneUser(escapedUsername, password, email);

  /* const token = jwt.sign(
    { username }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  ); */

  const authenticatedUser = {
    username: escapedUsername,
  };

  return authenticatedUser;
}

async function readOneUserFromUsername(username, email) {
  const result = await client.query('SELECT u.* FROM web2.utilisateurs u WHERE u.nom_utilisateur = $1 OR u.email = $2', [username, email]);
  return result.rows[0];
}

async function createOneUser(username, password, email) {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = await client.query('INSERT INTO web2.utilisateurs(nom_utilisateur, email, mdp) VALUES ($1, $2, $3) RETURNING *', [username, email, hashedPassword]);
  await client.query("INSERT INTO web2.statistiques(utilisateur, nb_questions_posees, nb_parties_jouees, nb_victoire, categorie_preferee) VALUES ($1, 0, 0, 0, 'INFO')", [newUser.rows[0].no_utilisateur]);
}

async function deleteOneUser(id) {
  await client.query('DELETE FROM web2.statistiques WHERE utilisateur = $1', [id]);
  const deletedUser = await client.query('DELETE FROM web2.utilisateurs WHERE no_utilisateur = $1 RETURNING *', [id]);
  return deletedUser.rows[0];
}

module.exports = {
  login,
  register,
  readOneUserFromUsername,
  deleteOneUser,
};
