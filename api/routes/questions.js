const express = require('express');

const {
  readOneQuestion,
} = require('../models/questions');

const router = express.Router();

router.get('/', (req, res) => {
  const category = req?.query?.category && typeof req.query.category === 'string' && (req.query.categorie === 'informatique' || req.query.categorie === 'science') ? req.query.categorie : undefined; // categorie ??
  if (!category) {
    res.sendStatus(400);
  }
  const question = readOneQuestion(category);
  res.json(question);
});

module.exports = router;
