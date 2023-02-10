import { useEffect, useMemo, useState } from "react";
import { PlayOverlay } from "./PlayOverlay";
import { Button } from "../../../common/UI/Button";
import sliderImage1 from "../../../assets/slider/sliderImage1.jpg";
import sliderImage2 from "../../../assets/slider/sliderImage2.jpg";
import { ReactComponent as LeftArrowSliderIcon } from "../../../assets/slider/leftArrowSliderIcon.svg";
import { ReactComponent as RightArrowSliderIcon } from "../../../assets/slider/rightArrowSliderIcon.svg";
import { ReactComponent as LeftMobileArrowSliderIcon } from "../../../assets/slider/leftMobileArrowSliderIcon.svg";
import { ReactComponent as RightMobileArrowSliderIcon } from "../../../assets/slider/rightMobileArrowSliderIcon.svg";

export const Slider = () => {
  const [sliderImages] = useState([
    {
      id: 1,
      firstTitle: "The largest platform of",
      secondTitle: "Natural and ! Cultured Stones",
    },
    {
      id: 2,
      firstTitle: "The best deals for you",
      secondTitle: "Browse and Shop ! Stones Online",
    },
  ]);
  const [activeSlider, toggleActiveSlider] = useState(1);
  const [activePlayOverlay, setActivePlayOverlay] = useState(false);

  // Disable scrollbar if PlayOverlay is showing
  useEffect(() => {
    activePlayOverlay
      ? document.body.classList.add("disable-scroll")
      : document.body.classList.remove("disable-scroll");
    return () => document.body.classList.remove("disable-scroll");
  }, [activePlayOverlay]);

  // Right arrow click -> Next Slider
  const handleClickNextSlider = () => {
    if (activeSlider !== sliderImages.length)
      toggleActiveSlider((active) => active + 1);
  };

  // Left arrow click -> Prevoius slider
  const handleClickPreviousSlider = () => {
    if (activeSlider !== 1) toggleActiveSlider((active) => active - 1);
  };

  const handlePlayOverlayButton = () => {
    setActivePlayOverlay(true);
  };

  // Slider changer
  const activeSliderImage = useMemo(() => {
    if (activeSlider === 1) return sliderImage1;
    if (activeSlider === 2) return sliderImage2;
    // ...
  }, [activeSlider]);

  // Split text for good viewability
  const firstSliderString = sliderImages[0].secondTitle.split("!");
  const secondSliderString = sliderImages[1].secondTitle.split("!");

  // Preconfigured styles for active/unactive arrows
  const leftArrow = activeSlider === 1 ? "opacity-70" : "opacity-100";
  const rightArrow =
    activeSlider === sliderImages.length ? "opacity-70" : "opacity-100";

  // Current slider small title
  const currentSmallTitle =
    activeSlider === 1
      ? sliderImages[0].firstTitle
      : sliderImages[1].firstTitle;

  // Current slider big title (first string)
  const currentBigTitleFirstString =
    activeSlider === 1 ? firstSliderString[0] : secondSliderString[0];

  // Current slider big title (second string)
  const currentBigTitleSecondString =
    activeSlider === 1 ? firstSliderString[1] : secondSliderString[1];

  return (
    <div
      className={"relative flex h-[500px] w-full justify-center md:h-[960px] "}
    >
      {/* Current image of slider */}
      <img
        className="absolute min-h-[500px] object-none md:min-h-[960px]"
        height="960"
        width="1920"
        src={activeSliderImage}
        alt="Slider"
      />

      {/* Show overlay with youtube video player */}
      {!!activePlayOverlay && (
        <PlayOverlay
          activePlayOverlay={activePlayOverlay}
          onClose={setActivePlayOverlay}
        />
      )}

      <div className="flex w-full max-w-[1170px]">
        {/* Slider PC prevoius/left arrow  */}
        <div className="absolute left-0 top-[445px] z-10 ml-[100px] hidden md:block">
          <button onClick={handleClickPreviousSlider}>
            <LeftArrowSliderIcon className={leftArrow} />
          </button>
        </div>

        {/* Slider PC next/right arrow  */}
        <div className="absolute right-0 z-10 mr-[100px] hidden md:top-[445px] md:block">
          <button onClick={handleClickNextSlider}>
            <RightArrowSliderIcon className={rightArrow} />
          </button>
        </div>

        {/* Mobile slider prevoius/left arrow */}
        <button
          className="absolute top-[240px] ml-[10px] block md:hidden"
          onClick={handleClickPreviousSlider}
        >
          <LeftMobileArrowSliderIcon className={leftArrow} />
        </button>

        {/* Mobile slider next/right arrow */}
        <button
          className="absolute right-0 top-[240px] mr-[10px] block md:hidden"
          onClick={handleClickNextSlider}
        >
          <RightMobileArrowSliderIcon className={rightArrow} />
        </button>

        {/* Slide title */}
        <div className="z-0 mt-[267px] flex w-full flex-col text-center text-white md:mt-[373px] md:px-[170px] xl:w-[1170px] 2xl:text-left">
          <span className="slider-small-title">{currentSmallTitle}</span>

          {/* Slide description */}
          <h1 className="slider-big-title">
            {currentBigTitleFirstString}
            <br />
            {currentBigTitleSecondString}
          </h1>
          {/* Slider buttons */}
          <div className="mt-[15px] flex justify-center gap-[10px] md:mt-8 md:gap-6 2xl:justify-start">
            {/* Register button */}
            <Button>Register now</Button>
            {/* Play Overlay buttons */}
            <div className="flex items-center gap-[10px]">
              <button
                className="play-btn h-[55px] w-[55px] bg-white pl-1 md:h-[40px] md:w-[40px]"
                onClick={handlePlayOverlayButton}
              >
                <span />
              </button>
              <button
                className="hidden cursor-pointer uppercase underline md:block"
                onClick={handlePlayOverlayButton}
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
