import React, { useState, useRef, useEffect, useMemo } from "react";
import stones from "../../../data/stones.json";
import ItemsSelectors from "../../UI/ItemsSelections";
import LatestItems from "./LatestItems";
import RedButton from "../../UI/RedButton";
import Titles from "../../UI/Titles";

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
    console.log("work");
    setSelectedType(title);
    togglePopupType(false);
  };

  const handleSelectCountry = (title) => {
    console.log("work");
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
      <Titles
        refs={itemsRef}
        titleH1="Discover Latest Items"
        titleH2="Thousands of new products from quality exports around the world"
      />
      <section className="mt-[20px] flex w-full flex-col justify-center gap-[5px] md:flex-row md:gap-[15px]">
        {/* Country selection */}

        <ItemsSelectors
          selectText={"Choose country"}
          selected={selectedCountry}
          sortRef={countrySortRef}
          list={countries}
          isOpenPopup={isOpenPopupCountry}
          handleClickSort={handleClickCountrySort}
          handleSelect={handleSelectCountry}
        />

        {/* Type selection */}
        <ItemsSelectors
          selectText="Choose type"
          selected={selectedType}
          sortRef={typeSortRef}
          list={types}
          isOpenPopup={isOpenPopupType}
          handleClickSort={handleClickTypeSort}
          handleSelect={handleSelectType}
        />
      </section>
      <section className="mt-[30px] flex w-full flex-col justify-center gap-[20px] md:max-w-[1200px] md:flex-row md:flex-wrap md:gap-[30px]">
        <LatestItems stones={filteredStones} />
      </section>
      <RedButton
        isItemsList={isFullListLatest}
        handleEvent={() => toggleFullListLatest(true)}
        title="LOAD MORE"
      />
    </div>
  );
}

export default Main;
