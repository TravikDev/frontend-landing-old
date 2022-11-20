import React from "react";
import Titles from "../../UI/Titles";

function Categories({ catsRef }) {
  return (
    <article className="pt-[40px] md:pt-[60px]">
      <Titles
        refs={catsRef}
        titleH1="Our Categories"
        titleH2="Explore high-quality products from our top-rated sellers and
      manufacturers"
      />

      <article className="mt-[30px] flex w-full flex-col gap-[5px] md:grid md:h-[755px] md:grid-cols-4 md:grid-rows-3 md:gap-[10px]">
        <section className="cat-items bg-cat1 md:col-span-2 md:row-span-3">
          <span className="cat-btn">
            Cultured Stone
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
            Decorative Stone
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
            Decorative Stone
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
            Interior Stone
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
            Street Stone
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
            Facade Stone
            <span className="cat-btn-items">576 items</span>
            <img
              src={process.env.PUBLIC_URL + "/img/arrows/arrowRight.svg"}
              width="9"
              height="14"
              alt="right Arrow"
            />
          </span>
        </section>
      </article>
    </article>
  );
}

export default Categories;
