import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CategoryProviderContext } from "../../Provider/CategoryProvider";
import { FavRecipesProviderContext } from "../../Provider/FavRecipesProvider";
import RecipeModal from "../RecipeModal/RecipeModal";

const RecipeList = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(false);

  function openModal(idMeal) {
    setSelectedMeal(idMeal);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  localStorage.setItem("page", 'dashboard')
  const [recipes, setRecipes] = useState([]);

  const { category } = useContext(CategoryProviderContext);
  
  const {favorites, setFavorites} = useContext(FavRecipesProviderContext);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setRecipes(res.data.meals);
    };
    fetchRecipes();
  }, [category]);

  const handleSubmit = async (recipe) => {
    try {
      const res = await axios.post('http://localhost:5000/api/recipes', recipe);
      const fetchFavorites = async () => {
        const res = await axios.get('http://localhost:5000/api/recipes');
        setFavorites(res.data);
      };
      fetchFavorites();
    } catch (err) {
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-8 lg:gap-x-10 lg:gap-y-16">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="rounded">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full mb-4 rounded-xl md:rounded-2xl lg:rounded-3xl"
            onClick={()=>{openModal(recipe.idMeal)}}
          />
          <div className="flex gap-2 items-start">
            <h5 className="text-sm font-medium text-[#00000079] cursor-default" onClick={()=>{openModal(recipe.idMeal)}}>{category}</h5>{" "}
            <button onClick={()=>{handleSubmit({...recipe, strCategory:category})}}>
              {favorites.some(fav => fav.idMeal === recipe.idMeal)?<FaHeart className="text-pink-500" />:
              <FaRegHeart className="text-pink-500" />
              }
            </button>
          </div>
          <h3 className="font-semibold text-sm cursor-default" onClick={()=>{openModal(recipe.idMeal)}}>{recipe.strMeal}</h3>
        </div>
      ))}
      <RecipeModal isOpen={modalIsOpen} onClose={closeModal} idMeal={selectedMeal}/>
    </div>
  );
};

export default RecipeList;
