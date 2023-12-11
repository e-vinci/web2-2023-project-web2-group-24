const express = require('express');
const { authorize } = require('../utils/auths');

const { readAllStatisticsOfAnUser, updateStatisticsOfAnUser } = require('../models/statistics');

const router = express.Router();

// route to get all the statistics of a player
router.get('/:id', authorize, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const statistics = await readAllStatisticsOfAnUser(id);

  if (!statistics) {
    return res.sendStatus(404);
  }

  return res.json(statistics);
});

// route to update all the statistics of a player
router.put('/:id', authorize, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const nbQuestionsAsked = req?.body?.nbQuestionsAsked;
  const gameWin = req?.body?.gameWin;
  const favoriteCategory = req?.body?.favoriteCategory;

  if (!req.body || !nbQuestionsAsked || !gameWin || !favoriteCategory || typeof nbQuestionsAsked !== 'number' || nbQuestionsAsked <= 0 || typeof gameWin !== 'boolean' || typeof favoriteCategory !== 'string') {
    return res.sendStatus(400);
  }

  // eslint-disable-next-line max-len
  const updateStatistics = await updateStatisticsOfAnUser(id, { nbQuestionsAsked, gameWin, favoriteCategory });

  if (!updateStatistics) {
    return res.sendStatus(404);
  }

  return res.json(updateStatistics);
});

module.exports = router;
