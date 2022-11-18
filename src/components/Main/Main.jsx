import React, { useState, useRef, useEffect } from "react";
// import Slider from "./Slider/Slider"
// import bg1 from "../img/bg1.png"
// import countries from "../data/countries.json";
import stones from "../../data/stones.json";
import Categories from "./Categories/Categories";
import ContactUs from "./Contact/ContactUs";
import LatestItems from "./Latest/LatestItems";

function Main() {
  const [countries] = useState([
    "United Arab Emirates",
    "Russia",
    "Australia",
    "Brasil",
    "India",
  ]);
  const [types] = useState([
    "Cultured Stone",
    "Decorative Stone",
    "Interior Stone",
    "Street Stone",
    "Facade Stone",
  ]);

  const [isFullListLatest, toggleFullListLatest] = useState(false);
  const [isOpenPopupCountry, togglePopupCountry] = useState(false);
  const [isOpenPopupType, togglePopupType] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const countrySortRef = useRef();
  const typeSortRef = useRef();

  const handleSelectType = (title) => {
    setSelectedType(title);
    togglePopupType(false);
  };

  const handleSelectCountry = (title) => {
    setSelectedCountry(title);
    togglePopupCountry(false);
  };

  const handleClickCountrySort = () => {
    togglePopupCountry(!isOpenPopupCountry);
  };

  const handleClickTypeSort = () => {
    togglePopupType(!isOpenPopupType);
  };

  const filteredStones = () => {
    let stoneFiltered = [];
    Object.assign(stoneFiltered, stones);
    if (selectedCountry !== "")
      stoneFiltered = stoneFiltered.filter(
        (stone) => stone.country === selectedCountry
      );
    if (selectedType !== "")
      stoneFiltered = stoneFiltered.filter(
        (stone) => stone.type === selectedType
      );
    if (isFullListLatest === false) stoneFiltered.length = 8;
    return stoneFiltered;
  };

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (!event.path.includes(countrySortRef.current)) {
        togglePopupCountry(false);
      }
      if (!event.path.includes(typeSortRef.current)) {
        togglePopupType(false);
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-h1">Discover Latest Items</h1>
      <h2 className="text-center">
        Thousands of new products from quality exports around the world
      </h2>
      <section className="mt-[20px] flex w-full flex-col justify-center gap-[5px] md:flex-row">
        {/* Country selection */}
        <div className="relative md:mx-0" ref={countrySortRef}>
          <button className="sort-btn" onClick={handleClickCountrySort}>
            <span className="text-[#333333]">
              {selectedCountry || "Choose Country"}
            </span>
            {isOpenPopupCountry ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </button>

          {isOpenPopupCountry && (
            <section className="sort-popup overflow-hidden">
              <ul className="md w-full gap-[15px] pt-[10px] md:pt-[5px] md:pb-[5px]">
                {countries.map((country) => (
                  <li
                    className={
                      "w-full  pl-[30px] leading-[30px] " +
                      (country === selectedCountry && "bg-[#FF5454] text-white")
                    }
                    key={country}
                    onClick={() => handleSelectCountry(country)}
                  >
                    {country}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Type selection */}
        <div ref={typeSortRef} className="relative md:mx-0">
          <button className="sort-btn" onClick={handleClickTypeSort}>
            <span className="text-[#333333]">
              {selectedType || "Choose Type"}
            </span>
            {isOpenPopupType ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </button>

          {isOpenPopupType && (
            <section className="sort-popup overflow-hidden">
              <ul className="md w-full gap-[15px] pt-[10px] md:pt-[5px] md:pb-[5px]">
                {types.map((type) => (
                  <li
                    className={
                      "w-full pl-[30px] leading-[30px] " +
                      (type === selectedType && "bg-[#FF5454] text-white")
                    }
                    key={type}
                    onClick={() => handleSelectType(type)}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </section>
      <section className="mt-[30px] flex w-full flex-col justify-center gap-[20px] md:max-w-[1200px] md:flex-row md:flex-wrap md:gap-[30px]">
        <LatestItems stones={filteredStones()} />
      </section>
      <button
        className={`red-btn mb-[0px] ${
          isFullListLatest === true ? "hidden" : "block"
        }`}
        onClick={() => toggleFullListLatest(true)}
      >
        Load more
      </button>

      <Categories />

      <ContactUs />
    </div>
  );
}

export default Main;
