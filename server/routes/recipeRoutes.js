const express = require('express');
const { getAllFavRecipes, addFavRecipe, removeFavRecipe } = require('../controller/recipeController');
const router = express.Router();

router.get('/:userId', getAllFavRecipes);
router.post('/', addFavRecipe);
router.delete('/:idMeal/:userId', removeFavRecipe);

module.exports = router;
