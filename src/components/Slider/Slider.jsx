import React, {useState} from "react";

function Slider() {

    const [sliderImages, setsliderImages] = useState([
        {
            id: 1,
            firstTitle: "The largest platform of",
            secondTitle: "Natural and ! Cultured Stones",
        },
        {
            id: 2,
            firstTitle: "The best deals for you",
            secondTitle: "Browse and Shop ! Stones Online",
        }
    ])
    const [activeSlider, toggleActiveSlider] = useState(1)

    const firstSliderString = sliderImages[0].secondTitle.split("!")
    const secondSliderString = sliderImages[1].secondTitle.split("!")

    const handleClickNextSlider = () => {
if(activeSlider !== sliderImages.length) toggleActiveSlider(active => active + 1)
    }

    const handleClickPreviousSlider = () => {
if(activeSlider !== 1) toggleActiveSlider(active => active - 1)
    }

    const leftArrow = activeSlider === 1 ? "opacity-70" : "opacity-100"
    const rightArrow = activeSlider === sliderImages.length ? "opacity-70" : "opacity-100"

  return (
    <div className={`flex h-[500px] w-full bg-auto bg-center bg-no-repeat md:h-[960px] bg-bg${activeSlider}`}>
      <div className="flex w-full">

        {/* START SLIDER ARROWS */}

        {/* FULL */}
        <div className="absolute top-[445px] ml-[100px] hidden md:block">
        <button onClick={handleClickPreviousSlider}>
          <img
            className={leftArrow}
            alt="leftArrow"
            src={process.env.PUBLIC_URL + "/img/slider/leftArrowSlider.svg"}
            width="70px"
            height="70px"
          />
          </button>
        </div>

        <div className="absolute md:top-[445px] right-0 hidden md:block mr-[100px] ">
        <button onClick={handleClickNextSlider}>
        <img
          className={rightArrow}
          alt="rightArrow"
          src={process.env.PUBLIC_URL + "/img/slider/rightArrowSlider.svg"}
          width="70px"
          height="70px"
        />
        </button>
        </div>
        
        {/* MOBILE */}

        <button className="absolute ml-[10px] top-[240px] block md:hidden" onClick={handleClickPreviousSlider} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="white"
            className={`h-6 w-6 rotate-180 ${leftArrow}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <button className="absolute mr-[10px] right-0 top-[240px] block md:hidden" onClick={handleClickNextSlider}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="white"
            className={`h-6 w-6 ${rightArrow}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* NEXT */}

        {/* END SLIDER ARROWS */}

        <section className="mx-auto mt-[267px] flex flex-col text-center text-white md:mt-[373px] xl:w-[1170px] md:w-2/4 md:text-left">
          <span className="text-[16px] md:text-[26px]">
            {sliderImages[0].firstTitle}
          </span>
          <h1 className="text-[34px] font-bold md:text-[60px]">
          {firstSliderString[0]} <br /> {firstSliderString[1]}
          </h1>
          <div className="mx-[10px] mt-[15px] flex gap-[10px] md:mt-8 md:gap-6">
            <div className="flex h-[55px] w-[265px] items-center justify-center rounded-[42px] bg-[#FF5454] text-[16px] uppercase md:h-[65px] md:w-[225px]">
              Register Now
            </div>
            <div className="flex items-center gap-[10px]">
              <button className="play-btn pl-1 h-[55px] w-[55px] bg-white md:h-[40px] md:w-[40px]">
                <span />
              </button>
              <span className="hidden uppercase underline md:block">
                Watch Video
              </span>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}

export default Slider;
