import React, { useState, useMemo } from "react";
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
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // Filtering of items based on selected type and category
  // useMemo for recalculating if deps value was changed
  const filteredStones = useMemo(() => {
    const filtered = stones.filter((stone) => {
      if (
        selectedCountry !== "" &&
        selectedCountry !== "All countries" &&
        selectedCountry !== stone.country
      ) {
        return false;
      }
      if (
        selectedType !== "" &&
        selectedType !== "All types" &&
        selectedType !== stone.type
      ) {
        return false;
      }
      return true;
    });
    return filtered;
  }, [selectedCountry, selectedType]);

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
          list={countries}
          handleSelect={(title) => setSelectedCountry(title)}
        >
          Choose country
        </ItemsSelectors>

        {/* Type selection */}
        <ItemsSelectors
          selected={selectedType}
          list={types}
          handleSelect={(title) => setSelectedType(title)}
        >
          Choose type
        </ItemsSelectors>
      </div>
      {/* Block of listed stones */}
      <div className="my-[20px] flex w-full max-w-[330px] flex-col justify-center gap-[20px] md:my-[30px] md:max-w-[1200px] md:flex-row md:flex-wrap md:gap-[30px]">
        <LatestItems
          // if was clicked "show all" button - show all list, if not - only 8 elements
          stones={
            isFullListLatest === false
              ? filteredStones.slice(0, 8)
              : filteredStones
          }
        />
      </div>
      {/* if filtered stones list has more then 8 items - show button */}
      {filteredStones.length > 8 && (
        // Button that can collapse or expand full list
        <RedButton
          isItemsList={isFullListLatest}
          handleEvent={() => toggleFullListLatest(true)}
        >
          Load more
        </RedButton>
      )}
    </div>
  );
}

export default Main;
