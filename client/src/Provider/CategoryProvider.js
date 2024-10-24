import { createContext, useState } from "react";

export const CategoryProviderContext = createContext();

const CategoryProvider = (props) => {
  const [category, setCategory] = useState("Beef");

  return (
    <CategoryProviderContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {props.children}
    </CategoryProviderContext.Provider>
  );
};

export default CategoryProvider;
