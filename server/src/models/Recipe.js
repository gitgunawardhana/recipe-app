const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  strCategory: {
    type: String,
    required: true,
  },
  strMeal: {
    type: String,
    required: true,
  },
  strMealThumb: {
    type: String,
    required: true,
  },
  idMeal: {
    type: String,
    required: true,
    unique: true,  // Ensure that each meal has a unique ID
  },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', RecipeSchema);
