const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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
    username,
    token,
  };

  return authenticatedUser;
}

async function register(username, password, email) {
  const userFound = await readOneUserFromUsername(username, email);
  if (userFound) return undefined;

  await createOneUser(username, password, email);

  /* const token = jwt.sign(
    { username }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  ); */

  const authenticatedUser = {
    username,
  };

  return authenticatedUser;
}

async function readOneUserFromUsername(username, email) {
  const result = await client.query('SELECT u.* FROM web2.utilisateurs u WHERE u.nom_utilisateur = $1 OR u.email = $2', [username, email]);
  return result.rows[0];
}

async function createOneUser(username, password, email) {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await client.query('INSERT INTO web2.utilisateurs(nom_utilisateur, email, mdp) VALUES ($1, $2, $3) RETURNING *', [username, email, hashedPassword]);
}

module.exports = {
  login,
  register,
  readOneUserFromUsername,
};
