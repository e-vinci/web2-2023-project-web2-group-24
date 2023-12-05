const express = require('express');

const {
  readAllCategories,
} = require('../models/categories');

const router = express.Router();

// get all the categories
router.get('/', (req, res) => {
  const categories = readAllCategories();
  res.json(categories);
});

router.get('/categories', async (req, res) => {
  try {
    // Effectuez une requête SQL pour obtenir toutes les catégories
    const result = await pool.query('SELECT * FROM categories');

    // Récupérez les résultats de la requête
    const categories = result.rows;

    // Répondez à la requête avec les catégories récupérées
    res.json({ categories });
  } catch (error) {
    // En cas d'erreur, renvoyez une réponse d'erreur
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
