import React from "react";

const lengthCount = 100;
const resultColArray = [1];
let count = 1;
let i = 1;
while (i < lengthCount) {
  if (count === 1) {
    i += 3;
    resultColArray.push(i);
    count++;
  }
  if (count === 2) {
    i += 5;
    resultColArray.push(i);
    count++;
  }
  if (count === 3) {
    i += 1;
    resultColArray.push(i);
    count++;
  }
  if (count === 4) {
    i += 3;
    resultColArray.push(i);
    count = 1;
  }
}

const resultRowArray = [1];
count = 1;
i = 1;
while (i < lengthCount) {
  if (count === 1) {
    i += 8;
    resultRowArray.push(i);
    count++;
  }
  if (count === 2) {
    i += 4;
    resultRowArray.push(i);
    count = 1;
  }
  if (count === 3) i += 8;
  resultRowArray.push(i);
  count = 1;
}

function CategoryItem({ id, title, count }) {
  return (
    <button
      className={`cat-items group relative md:col-span-${
        resultColArray.includes(id) ? 2 : 1
      } ${resultRowArray.includes(id) ? "md:h-[755px]" : ""} md:row-span-${
        resultRowArray.includes(id) ? 3 : 1
      } z-0`}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/img/categories/cat" + id + ".jpg"
        })`,
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden rounded-3xl bg-fixed transition delay-150 ease-in-out group-hover:bg-black/50" />
      <div className="group-hover cat-btn mx-6 bg-white px-4">
        <h2 className="text-center">{title}</h2>
        <span className="cat-btn-items">{count} items</span>
        <img
          src={process.env.PUBLIC_URL + "/img/arrows/arrowRight.svg"}
          width="9"
          height="14"
          alt="right Arrow"
        />
      </div>
    </button>
  );
}

export default CategoryItem;
