const express = require('express');

const { readAllStatisticsOfAnUser, updateStatisticsOfAnUser } = require('../models/statistics');

const router = express.Router();

// route to get all the statistics of a player
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const statistics = await readAllStatisticsOfAnUser(id);

  if (statistics === null) {
    res.sendStatus(404);
  }

  res.json(statistics);
});

// route to update all the statistics of a player
router.put('/:id', async (req, res) => {
  const nbQuestionsAsked = req?.body?.nbQuestionsAsked;
  const nbGameWin = req?.body?.nbGameWin;
  const favoriteCategory = req?.body?.favoriteCategory;

  if (!req.body || !nbQuestionsAsked || !nbGameWin || !favoriteCategory || typeof nbQuestionsAsked !== 'number' || nbQuestionsAsked <= 0 || typeof nbGameWin !== 'number' || nbGameWin < 0 || typeof favoriteCategory !== 'string') {
    return res.sendStatus(400);
  }

  // eslint-disable-next-line max-len
  const updateStatistics = await updateStatisticsOfAnUser(req.params.id, { nbQuestionsAsked, nbGameWin, favoriteCategory });

  if (updateStatistics === undefined) {
    res.sendStatus(404);
  }

  return res.json(updateStatistics);
});

module.exports = router;
