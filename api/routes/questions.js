const express = require('express');
const { authorize } = require('../utils/auths');

const {
  readOneQuestion,
} = require('../models/questions');

const {
  readAllCategories,
} = require('../models/categories');

const router = express.Router();

// get one question by category
router.get('/', authorize, async (req, res) => {
  const categories = await readAllCategories();
  // eslint-disable-next-line max-len
  const category = req?.query?.category && categories.findIndex((c) => c.id_categorie === req.query.category) !== -1 ? req.query.category : undefined;
  if (!category) {
    return res.sendStatus(400);
  }
  const question = await readOneQuestion(category);
  return res.json(question);
});

module.exports = router;
