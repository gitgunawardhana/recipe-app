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
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', RecipeSchema);
