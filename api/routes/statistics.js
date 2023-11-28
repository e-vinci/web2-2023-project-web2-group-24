const express = require('express');

const { readAllStatisticsOfAnUser, updateStatisticsOfAnUser } = require('../models/statistics');

const router = express.Router();

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const statistics = readAllStatisticsOfAnUser(id);

  if (statistics === null) {
    res.sendStatus(404);
  }

  res.json(statistics);
});

router.patch('/:id', (req, res) => {
  const nbQuestionsAsked = req?.body?.nbQuestionsAsked;
  const nbGamePlayed = req?.body?.nbGamePlayed;
  const nbGameWin = req?.body?.nbGameWin;
});

module.exports = router;
