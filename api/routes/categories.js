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
router.get('/', async (req, res) => {
  console.log('coucoiu');
  const categories = await readAllCategories();

  if (!categories) {
    return res.sendStatus(404);
  }

  return res.json(categories);
});

module.exports = router;
