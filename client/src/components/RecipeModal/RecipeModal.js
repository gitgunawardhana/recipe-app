import axios from "axios";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "auto", 
    backgroundColor: "#fef8f9"
  },
};

const RecipeModal = ({ isOpen, onClose, idMeal = 52772 }) => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        setMeal(res.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal:", error);
      }
    };
    fetchRecipes();
  }, [idMeal]);

  if (!meal) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Recipe Modal"
    >
      <div className="flex justify-between items-start gap-5">
        <h2 className="font-semibold text-sm max-w-60">{meal.strMeal}</h2>
        <button onClick={onClose} className="text-pink-500">
          <IoMdClose />
        </button>
      </div>
      <h5 className="text-sm font-medium text-[#00000079]">
        {meal.strCategory}
      </h5>
      <br />
      <div className="flex flex-wrap gap-4 justify-between">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="max-w-52 max-h-52 min-w-32 mb-4 rounded-xl md:rounded-2xl lg:rounded-3xl"
        />
        <div className="">
          <h2 className="text-sm font-semibold text-[#000000] uppercase">Instructions: </h2>
          <p className="md:max-w-60 max-w-full max-h-60 overflow-x-auto">{meal.strInstructions}</p>
        </div>
      </div>
    </Modal>
  );
};

export default RecipeModal;
