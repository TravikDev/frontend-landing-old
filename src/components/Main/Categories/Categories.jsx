import React from "react";
import Titles from "../../UI/Titles";

function Categories({ catsRef }) {
  return (
    <div className="pt-[40px] md:pt-[60px]">
      <Titles
        refs={catsRef}
        description="Explore high-quality products from our top-rated sellers and
      manufacturers"
      >
        Our Categories
      </Titles>

      <div className="mt-[30px] flex w-full flex-col gap-[5px] md:grid md:h-[755px] md:grid-cols-4 md:grid-rows-3 md:gap-[10px]">
        <section className="cat-items bg-cat1 md:col-span-2 md:row-span-3">
          <span className="cat-btn">
            <h2 className="text-center">Cultured Stone</h2>
            <span className="cat-btn-items">1022 items</span>
            <img
              src={process.env.PUBLIC_URL + "/img/arrows/arrowRight.svg"}
              width="9"
              height="14"
              alt="right Arrow"
            />
          </span>
        </section>
        <section className="cat-items bg-cat2 md:col-span-1 md:row-span-1">
          <span className="cat-btn">
            <h2 className="text-center">Decorative Stone</h2>
            <span className="cat-btn-items">998 items</span>
            <img
              src={process.env.PUBLIC_URL + "/img/arrows/arrowRight.svg"}
              width="9"
              height="14"
              alt="right Arrow"
            />
          </span>
        </section>
        <section className="cat-items bg-cat3 md:col-span-1 md:row-span-1">
          <span className="cat-btn">
            <h2 className="text-center">Decorative Stone</h2>
            <span className="cat-btn-items">842 items</span>
            <img
              src={process.env.PUBLIC_URL + "/img/arrows/arrowRight.svg"}
              width="9"
              height="14"
              alt="right Arrow"
            />
          </span>
        </section>
        <section className="cat-items bg-cat4 md:col-span-2 md:row-span-1">
          <span className="cat-btn">
            <h2 className="text-center">Interior Stone</h2>
            <span className="cat-btn-items">380 items</span>
            <img
              src={process.env.PUBLIC_URL + "/img/arrows/arrowRight.svg"}
              width="9"
              height="14"
              alt="right Arrow"
            />
          </span>
        </section>
        <section className="cat-items bg-cat5 md:col-span-1 md:row-span-1">
          <span className="cat-btn">
            <h2 className="text-center">Street Stone</h2>
            <span className="cat-btn-items">723 items</span>
            <img
              src={process.env.PUBLIC_URL + "/img/arrows/arrowRight.svg"}
              width="9"
              height="14"
              alt="right Arrow"
            />
          </span>
        </section>
        <section className="cat-items bg-cat6 md:col-span-1 md:row-span-1">
          <span className="cat-btn">
            <h2 className="text-center">Facade Stone</h2>
            <span className="cat-btn-items">576 items</span>
            <img
              src={process.env.PUBLIC_URL + "/img/arrows/arrowRight.svg"}
              width="9"
              height="14"
              alt="right Arrow"
            />
          </span>
        </section>
      </div>
    </div>
  );
}

export default Categories;
