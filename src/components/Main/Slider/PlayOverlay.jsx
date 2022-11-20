import React from "react";

function PlayOverlay({ onClose = (f) => f }) {

  return (
    <>
      <div
        onClick={() => onClose(false)}
        className="fixed z-20 h-full w-full bg-black opacity-30"
      />

      <div className="fixed z-30 my-[172px] mx-[5px] h-auto md:h-[505px] min-w-[350px] bg-white p-[15px] md:mx-auto md:w-[70%] md:max-w-[1310px] md:p-[30px]">
        <div className="mb-[15px] flex items-center justify-between md:mb-[20px]">
          <span className="mt-0 text-center text-[20px] font-bold md:text-[26px]">
            Natural & Cultured Stones
          </span>
          <button onClick={() => onClose(false)}>
            <img
              src={process.env.PUBLIC_URL + "/img/close.svg"}
              alt="closeButton"
              width="20px"
              height="20px"
            />
          </button>
        </div>
        {/* <img
          className="max-h-[505px]"
          src={process.env.PUBLIC_URL + "/img/overlay-you.jpg"}
          alt="someVideo"
          width="1250"
          height={505}
        /> */}
        <iframe width="100%" height="87%" src="https://www.youtube.com/embed/utOU0sNkRjY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </>
  );
}

export default PlayOverlay;
