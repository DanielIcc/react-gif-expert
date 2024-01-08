import { useState } from "react";
import { GifGrid, AddCategory } from "./components/index";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (newCategory) => {
    if (categories.indexOf(newCategory) != -1) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={addCategory} setCategories={setCategories} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
