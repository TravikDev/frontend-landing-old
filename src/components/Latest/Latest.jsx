import { useState, useMemo } from "react";
import { Selector } from "./Selector";
import { LatestItems } from "./LatestItems";
import { Button } from "../../common/UI/Button";
import { Title } from "../../common/UI/Title";
import { Description } from "../../common/UI/Description";
import stoneList from "./stoneList.json";

export const Latest = ({ itemsRef }) => {
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
  const [showButton, toggleShowButton] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const openFullList = () => {
    toggleFullListLatest(true);
  };
  // Filtering of items based on selected type and category
  // useMemo for recalculating if deps value was changed
  const filteredStones = useMemo(() => {
    const filtered = stoneList.filter((stone) => {
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
    (filtered.length > 8 && !isFullListLatest)
      ? toggleShowButton(true)
      : toggleShowButton(false);
    return isFullListLatest ? filtered : filtered.splice(0, 8);
  }, [selectedCountry, selectedType, isFullListLatest]);

  return (
    <div className="flex flex-col items-center pt-[40px] md:pt-[60px]">
      <Title refs={itemsRef}>Discover Latest Items</Title>
      <Description>
        Thousands of new products from quality exports around the world
      </Description>
      <div className="mt-[20px] flex w-full flex-col justify-center gap-[5px] md:flex-row md:gap-[15px]">
        {/* Country selection */}

        <Selector
          selected={selectedCountry}
          list={countries}
          handleSelect={(title) => {setSelectedCountry(title); toggleFullListLatest(false)}}
        >
          Choose country
        </Selector>

        {/* Type selection */}
        <Selector
          selected={selectedType}
          list={types}
          handleSelect={(title) => {setSelectedType(title); toggleFullListLatest(false)}}
        >
          Choose type
        </Selector>
      </div>
      {/* Block of listed stoneList */}
      <div className="my-[20px] flex w-full max-w-[330px] flex-col justify-center gap-[20px] md:my-[30px] md:max-w-[1200px] md:flex-row md:flex-wrap md:gap-[30px]">
        <LatestItems
          // if was clicked "show all" button - show all list, if not - only 8 elements
          stoneList={filteredStones}
        />
      </div>
      {/* if filtered stoneList list has more then 8 items - show button */}

      {/* Create CONST variable */}
      {showButton && (
        // Button that can collapse or expand full list
        <Button className="hidden" onClick={openFullList}>
          Load more
        </Button>
      )}
    </div>
  );
};
