import { useEffect } from "react";
import { fetchCategories } from "../slices/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hook";

const CategoriesList = () => {
  const dispatch = useAppDispatch();
  const { categories, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Meal Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.idCategory}>
            <h2>{category.strCategory}</h2>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <p>{category.strCategoryDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
