const Recipe = require('../models/Recipe');

const getAllFavRecipes = async (req, res) => {
  const { userId } = req.params;

  console.log(userId)
  try {
    const query = userId ? { user: userId } : {};
    const recipes = await Recipe.find(query);
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}

const addFavRecipe = async (req, res) => {
  const { strCategory, strMeal, strMealThumb, idMeal, userId } = req.body;
  try {
    let recipe = await Recipe.findOne({ idMeal, user: userId });
    if (recipe) {
      return res.status(400).json({ message: 'Recipe already exists for this user' });
    }

    recipe = new Recipe({
      strCategory,
      strMeal,
      strMealThumb,
      idMeal,
      user:userId
    });

    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}

const removeFavRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findOneAndDelete({ idMeal: req.params.idMeal, user: req.params.userId });
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found for this user' });
    }
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}

module.exports = { getAllFavRecipes, addFavRecipe, removeFavRecipe };