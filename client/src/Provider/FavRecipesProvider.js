import axios from 'axios';
import { createContext, useEffect, useState } from "react";

export const FavRecipesProviderContext = createContext();

const FavRecipesProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/recipes');
      setFavorites(res.data);
    };
    fetchFavorites();
  }, []);

  return (
    <FavRecipesProviderContext.Provider
      value={{
        favorites, setFavorites
      }}
    >
      {props.children}
    </FavRecipesProviderContext.Provider>
  );
};

export default FavRecipesProvider;
