const express = require('express');
const axios = require('axios');
const Recipe = require('../models/Recipe');
const router = express.Router();

router.get('/categories', async (req, res) => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    res.json(response.data.categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { strCategory, strMeal, strMealThumb, idMeal } = req.body;
  try {
    let recipe = await Recipe.findOne({ idMeal });
    if (recipe) {
      return res.status(400).json({ message: 'Recipe already exists' });
    }

    recipe = new Recipe({
      strCategory,
      strMeal,
      strMealThumb,
      idMeal,
    });

    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.delete('/:idMeal', async (req, res) => {
  try {
    const recipe = await Recipe.findOneAndDelete({ idMeal: req.params.idMeal });
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
