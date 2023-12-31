const express = require('express');
const { register, login, deleteOneUser } = require('../models/users');
const { authorize } = require('../utils/auths');

const router = express.Router();

/* Register a user */
router.post('/register', async (req, res) => {
  // eslint-disable-next-line max-len
  const username = req?.body?.username?.length !== 0 && req?.body?.username?.length < 30 ? req.body.username : undefined;
  // eslint-disable-next-line max-len
  const email = req?.body?.email?.length !== 0 && req?.body?.email?.length < 60 ? req.body.email : undefined;
  // eslint-disable-next-line max-len
  const password = req?.body?.password?.length !== 0 && req?.body?.password?.length < 100 ? req.body.password : undefined;

  if (!username || !password || !email) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = await register(username, password, email);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = await login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

// route to delete one user with his id
router.delete('/:id', authorize, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deletedUser = await deleteOneUser(id);
  if (!deletedUser) {
    return res.sendStatus(404);
  }
  return res.json(deletedUser);
});

module.exports = router;
