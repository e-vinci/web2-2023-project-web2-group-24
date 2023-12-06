const express = require('express');

const {
  readAllCategories,
} = require('../models/categories');

const router = express.Router();

// get all the categories
router.get('/', async (req, res) => {
  const categories = await readAllCategories();

  if (!categories) {
    return res.sendStatus(404);
  }

  return res.json(categories);
});

module.exports = router;
