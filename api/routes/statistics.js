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
  const gameWin = req?.body?.nbGameWin;
  const favoriteCategory = req?.body?.favoriteCategory;

  if (!req.body || (nbQuestionsAsked !== undefined && (typeof nbQuestionsAsked !== 'number' || nbQuestionsAsked <= 0)) || (gameWin !== undefined && typeof gameWin !== 'boolean') || (favoriteCategory !== undefined && (typeof favoriteCategory !== 'number' || favoriteCategory <= 0))) {
    return res.sendStatus(400);
  }

  // eslint-disable-next-line max-len
  const updateStatistics = updateStatisticsOfAnUser(req.params.id, { nbQuestionsAsked, gameWin, favoriteCategory });

  if (updateStatistics === undefined) {
    res.sendStatus(404);
  }

  return res.json(updateStatistics);
});

module.exports = router;
