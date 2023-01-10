import React, { useState, useRef, useEffect, useMemo } from "react";
import stones from "../../../data/stones.json";
import ItemsSelectors from "../../UI/ItemsSelectors";
import LatestItems from "./LatestItems";
import RedButton from "../../UI/RedButton";
import Titles from "../../UI/Titles";

function Main({ itemsRef }) {
  const [countries] = useState([
    "All countries",
    "United Arab Emirates",
    "Russia",
    "Australia",
    "Brasil",
    "India",
  ]);
  const [types] = useState([
    "All types",
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
      if (
        selectedCountry !== "" &&
        selectedCountry !== "All countries" &&
        stone.country !== selectedCountry
      ) {
        return false;
      }
      if (
        selectedType !== "" &&
        selectedType !== "All types" &&
        stone.type !== selectedType
      ) {
        return false;
      }
      return true;
    });
    return filtered;
  }, [selectedCountry, selectedType]);

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
        description="Thousands of new products from quality exports around the world"
      >
        Discover Latest Items
      </Titles>
      <div className="mt-[20px] flex w-full flex-col justify-center gap-[5px] md:flex-row md:gap-[15px]">
        {/* Country selection */}

        <ItemsSelectors
          selected={selectedCountry}
          sortRef={countrySortRef}
          list={countries}
          isOpenPopup={isOpenPopupCountry}
          handleClickSort={handleClickCountrySort}
          handleSelect={handleSelectCountry}
        >
          Choose country
        </ItemsSelectors>

        {/* Type selection */}
        <ItemsSelectors
          selected={selectedType}
          sortRef={typeSortRef}
          list={types}
          isOpenPopup={isOpenPopupType}
          handleClickSort={handleClickTypeSort}
          handleSelect={handleSelectType}
        >
          Choose type
        </ItemsSelectors>
      </div>
      <div className="my-[20px] flex w-full max-w-[330px] flex-col justify-center gap-[20px] md:my-[30px] md:max-w-[1200px] md:flex-row md:flex-wrap md:gap-[30px]">
        <LatestItems
          stones={
            isFullListLatest === false
              ? filteredStones.slice(0, 8)
              : filteredStones
          }
        />
      </div>
      {filteredStones.length > 8 ? (
        <RedButton
          isItemsList={isFullListLatest}
          handleEvent={() => toggleFullListLatest(true)}
        >
          Load more
        </RedButton>
      ) : null}
    </div>
  );
}

export default Main;
