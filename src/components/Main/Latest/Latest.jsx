import React, { useState, useRef, useEffect, useMemo } from "react";
import stones from "../../../data/stones.json";
import LatestItems from "./LatestItems";

function Main({ itemsRef }) {
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

  const filteredStones = useMemo(() => {
    const filtered = stones.filter((stone) => {
      if (selectedCountry !== "" && stone.country !== selectedCountry) {
        return false;
      }
      if (selectedType !== "" && stone.type !== selectedType) {
        return false;
      }
      return true;
    });
    return isFullListLatest === false ? filtered.slice(0, 8) : filtered;
  }, [selectedCountry, selectedType, isFullListLatest]);

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
    <div className="flex flex-col items-center pt-[40px] md:pt-[60px]">
      <h1 ref={itemsRef} className="text-h1">
        Discover Latest Items
      </h1>
      <h2 className="text-center">
        Thousands of new products from quality exports around the world
      </h2>
      <section className="mt-[20px] flex w-full flex-col justify-center gap-[5px] md:flex-row md:gap-[15px]">
        {/* Country selection */}
        <div className="relative md:mx-0" ref={countrySortRef}>
          <button className="sort-btn" onClick={handleClickCountrySort}>
            <span className="text-[#333333]">
              {selectedCountry || "Choose Country"}
            </span>
            {isOpenPopupCountry ? (
              <img
                src={process.env.PUBLIC_URL + "/img/arrows/arrowPopUp.svg"}
                alt=""
                width="16"
                height="16"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/img/arrows/arrowPopDown.svg"}
                alt=""
                width="16"
                height="16"
              />
            )}
          </button>

          {isOpenPopupCountry && (
            <section className="sort-popup">
              <ul className="ul-popup">
                {countries.map((country) => (
                  <li
                    className={
                      "w-full  cursor-pointer pl-[30px] leading-[30px] " +
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
              <img
                src={process.env.PUBLIC_URL + "/img/arrows/arrowPopUp.svg"}
                alt=""
                width="16"
                height="16"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/img/arrows/arrowPopDown.svg"}
                alt=""
                width="16"
                height="16"
              />
            )}
          </button>

          {isOpenPopupType && (
            <section className="sort-popup">
              <ul className="ul-popup">
                {types.map((type) => (
                  <li
                    className={
                      "w-full cursor-pointer pl-[30px] leading-[30px] " +
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
        <LatestItems stones={filteredStones} />
      </section>
      <button
        className={`red-btn mb-[0px] ${
          isFullListLatest === true ? "hidden" : "block"
        }`}
        onClick={() => toggleFullListLatest(true)}
      >
        Load more
      </button>
    </div>
  );
}

export default Main;
