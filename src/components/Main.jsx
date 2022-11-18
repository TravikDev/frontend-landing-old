import React, { useState, useRef, useEffect } from "react";
// import Slider from "./Slider/Slider"
// import bg1 from "../img/bg1.png"
// import countries from "../data/countries.json";
import stones from "../data/stones.json";
import Categories from "./Categories/Categories";
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
            <section className="sort-popup">
              <ul className="w-full">
                {countries.map((country) => (
                  <li
                    className="w-full leading-[36px]"
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
            <section className="sort-popup">
              <ul className="w-full">
                {types.map((type) => (
                  <li
                    className="w-full leading-[36px]"
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
        {/* 
        <select className="mx-[7.5px] rounded-full border-[#D6D6D6] border-[1px] w-[238px] h-[55px] px-[30px]">
          <option disabled selected>
            Choose type
          </option>
          <option>Cultured Stone</option>
          <option>Decorative Stone</option>
          <option>Interior Stone</option>
          <option>Street Stone</option>
          <option>Facade Stone</option>
        </select> */}
      </section>
      <section className="flex w-full flex-col justify-center md:max-w-[1200px] md:flex-row md:flex-wrap md:gap-[30px]">
        <LatestItems
          isFullListLatest={isFullListLatest}
          stones={filteredStones()}
        />
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

      <article className="w-full md:max-w-[1170px]">
        <h1 className="text-h1">Contact us</h1>
        <h2 className="text-center">
          Contact us anytime, we are ready to help you!
        </h2>
        <form className="flex flex-col">
          <div className="flex flex-col justify-between md:gap-[30px] md:flex-row">
            <section className="flex flex-col w-full">
              <label className="label-input">Full Name</label>
              <input
                type="text"
                className="text-input"
                placeholder="Enter your full name"
              />
            </section>
            <section className="flex flex-col w-full">
              <label className="label-input">Email</label>
              <input
                type="email"
                className="text-input"
                placeholder="Enter your full name"
              />
            </section>
          </div>

          <label className="label-input">Subject</label>
          <input
            type="text"
            className="text-input"
            placeholder="Enter your full name"
          />
          <label className="label-input">Message</label>
          <textarea
            className="h-[180px] w-full rounded-[33px] border-[1px] border-[#9E9E9E] py-[18px] px-[25px] md:h-[180px]"
            placeholder="Enter your full name"
          />
          <section className="flex justify-center">
            <button className="red-btn">Send message</button>
          </section>
        </form>
      </article>
    </div>
  );
}

export default Main;
