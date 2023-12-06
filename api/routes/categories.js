/* eslint-disable camelcase */
/* eslint-disable consistent-return */
const express = require('express');
const { readAllCategories, getOneCategory } = require('../models/categories');

const router = express.Router();
router.get('/', async (req, res) => {
  const category = req?.query?.category;
  if (!category) {
    return res.sendStatus(400);
  }
  const response = await getOneCategory(category);
  return res.json(response);
});

// get all the categories
router.get('/categories', async (req, res) => {
  const question = await readAllCategories();
  return res.json(question);
});

module.exports = router;
