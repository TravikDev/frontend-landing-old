import { Title } from "../../common/UI/Title";
import { Description } from "../../common/UI/Description";
import { CategoryItem } from "./CategoryItem";
import { useResultColRowArray } from "../../common/Hooks/useResultColRowArray";
import categoriesList from "./categoriesList.json";

export const Categories = ({ catsRef }) => {
  // hook that compute some value for each class category with inversion every 6 items
  const resultColRowArray = useResultColRowArray(categoriesList.length);

  return (
    <div className="pt-[40px] md:pt-[60px]">
      {/* UI Component for titles */}
      <Title refs={catsRef}>Our Categories</Title>
      <Description>
        Explore high-quality products from our top-rated sellers and
        manufacturers
      </Description>

      {/* All categories of items */}
      <div
        className={`mx-auto mt-[30px] flex w-full flex-col gap-[5px] md:grid md:max-w-[1920px] md:grid-flow-row md:grid-cols-4 md:gap-[10px] md:grid-rows-${
          categoriesList.length / 2
        }`}
      >
        {categoriesList.map((category) => {
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
};
