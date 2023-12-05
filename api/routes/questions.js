const express = require('express');

const {
  readOneQuestion,
} = require('../models/questions');

/* const {
  readAllCategories,
} = require('../models/categories');
*/

const router = express.Router();

// get one question by category
router.get('/', async (req, res) => {
  const category = req?.query?.category;
  if (!category) {
    return res.sendStatus(400);
  }
  const question = await readOneQuestion(category);
  return res.json(question);
});

module.exports = router;
