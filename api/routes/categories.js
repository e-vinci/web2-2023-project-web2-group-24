const express = require('express');

const {
  readAllCategories,
} = require('../models/categories');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = readAllCategories();
  res.json(categories);
});

module.exports = router;
