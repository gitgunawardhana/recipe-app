import axios from 'axios';
import { createContext, useEffect, useState } from "react";

export const FavRecipesProviderContext = createContext();

const FavRecipesProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [userId, setUserId] = useState(sessionStorage.getItem('userId'));

  useEffect(() => {
    const fetchFavorites = async () => {
      setUserId(sessionStorage.getItem('userId'))
      if (userId === null) return;
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/recipes/${sessionStorage.getItem('userId')}`);
      setFavorites(res.data);
    };
    fetchFavorites();
  }, [userId]);

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
