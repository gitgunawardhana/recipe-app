import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import { CategoryProviderContext } from "../../Provider/CategoryProvider";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { category, setCategory } = useContext(CategoryProviderContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(res.data.categories.splice(0, 5));
    };
    fetchCategories();
  }, []);

  return (
    <div className="p-4 justify-start my-4 flex gap-2 flex-wrap">
      {categories.map((cate) => (
        <Fragment key={cate.idCategory}>
          <button
            
            className={category === cate.strCategory ? `border border-pink-500 text-white bg-pink-500 rounded-full px-5 py-2 text-sm min-w-full sm:min-w-40`:`border border-pink-500 text-pink-500 hover:text-white hover:bg-pink-500 rounded-full px-5 py-2 text-sm min-w-full sm:min-w-40` }
            onClick={() => {
              setCategory(cate.strCategory);
            }}
          >
            {cate.strCategory}
          </button>
        </Fragment>
      ))}
    </div>
  );
};

export default Categories;
