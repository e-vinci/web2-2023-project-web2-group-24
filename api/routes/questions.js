const express = require('express');

const {
  readOneQuestion,
} = require('../models/questions');

const {
  readAllCategories,
} = require('../models/categories');

const router = express.Router();

// get one question by category
router.get('/', (req, res) => {
  const category = req?.query?.category && typeof req.query.category === 'string' /* && (readAllCategories().contains(req.query.category)) */ ? req.query.categorie : undefined; // categorie ??
  if (!category) {
    res.sendStatus(400);
  }
  const question = readOneQuestion(category);
  res.json(question);
});

module.exports = router;
