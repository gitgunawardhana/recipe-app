import { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { FavRecipesProviderContext } from "../../Provider/FavRecipesProvider";
import RecipeModal from "../../components/RecipeModal/RecipeModal";

const FavoriteRecipes = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(false);

  function openModal(idMeal) {
    setSelectedMeal(idMeal);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { favorites, setFavorites } = useContext(FavRecipesProviderContext);

  const handleSubmit = async (idMeal) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/api/recipes/${idMeal}`
      );
      const fetchFavorites = async () => {
        if (sessionStorage.getItem('userId') === null) return;
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/recipes/${sessionStorage.getItem('userId')}`);
        setFavorites(res.data);
      };
      fetchFavorites();
    } catch (err) {}
  };

  if (favorites.length === 0) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-black text-4xl opacity-20 text-pink-500">
        No Data
      </div>
    );
  }

  return (
    <>
      <h2 className="p-4 text-2xl font-bold my-4">Favorite Recipes</h2>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-8 lg:gap-x-10 lg:gap-y-16">
        {favorites.map((recipe) => (
          <div key={recipe.idMeal} className="rounded">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full mb-4 rounded-xl md:rounded-2xl lg:rounded-3xl"
              onClick={() => {
                openModal(recipe.idMeal);
              }}
            />
            <div className="flex gap-2 items-start">
              <h5 className="text-sm font-medium text-[#00000079] cursor-default">
                {recipe.strCategory}
              </h5>{" "}
              <button
                onClick={() => {
                  handleSubmit(recipe.idMeal);
                }}
              >
                <FaHeart className="text-pink-500" />
              </button>
            </div>
            <h3
              className="font-semibold text-sm cursor-default"
              onClick={() => {
                openModal(recipe.idMeal);
              }}
            >
              {recipe.strMeal}
            </h3>
          </div>
        ))}
        <RecipeModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          idMeal={selectedMeal}
        />
      </div>
    </>
  );
};

export default FavoriteRecipes;
