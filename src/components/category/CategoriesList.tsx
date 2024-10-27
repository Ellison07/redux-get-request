import { useEffect, useState } from "react";
import { fetchCategories } from "../slices/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import Category from "./Category";

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
      {categories.map((category, index) => (
        <Category
          key={category.idCategory}
          title={category.strCategory}
          urlToImg={category.strCategoryThumb}
          description={category.strCategoryDescription}
          index={index}
        />
      ))}
    </div>
  );
};

export default CategoriesList;
