import React from "react";
import Titles from "../../UI/Titles";
import categories from "../../../data/categories.json";
import CategoryItem from "../../UI/CategoryItem";
import { useResultColRowArray } from "../../Hooks/catRenderHook";

function Categories({ catsRef }) {
  // hook that compute some value for each class category with inversion every 6 items
  const resultColRowArray = useResultColRowArray(categories.length);

  return (
    <div className="pt-[40px] md:pt-[60px]">
      {/* UI Component for titles */}
      <Titles
        refs={catsRef}
        description="Explore high-quality products from our top-rated sellers and
      manufacturers"
      >
        Our Categories
      </Titles>

      {/* All categories of items */}
      <div
        className={`mx-auto mt-[30px] flex w-full flex-col gap-[5px] md:grid md:max-w-[1920px] md:grid-flow-row md:grid-cols-4 md:gap-[10px] md:grid-rows-${
          categories.length / 2
        }`}
      >
        {categories.map((category) => {
          return (
            <CategoryItem
              key={category.id}
              {...category}
              {...resultColRowArray}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
