import React, { useRef } from "react";

function PlayOverlay({ onClose = (f) => f }) {
  const overlayRef = useRef(null);
  const playerRef = useRef(null);

  return (
    <>
      {/* Background overlay with opacity*/}
      <div
        onClick={() => onClose(false)}
        className="fixed z-20 h-[120%] w-full bg-black opacity-30"
      />

      <div
        ref={overlayRef}
        className="fixed z-30 my-[15vh] mx-[5px] flex h-auto min-w-[350px] flex-col bg-white p-[15px] md:mx-auto md:h-[70vh] md:w-[70%] md:max-w-[1310px] md:p-[30px]"
      >
        <div className="mb-[15px] flex items-center justify-between md:mb-[20px]">
          {/* Title */}
          <span className="mt-0 text-center text-[20px] font-bold md:text-[26px]">
            Natural & Cultured Stones
          </span>
          {/* Button for close */}
          <button onClick={() => onClose(false)}>
            <img
              src={process.env.PUBLIC_URL + "/img/close.svg"}
              alt="closeButton"
              width="20px"
              height="20px"
            />
          </button>
        </div>
        <div className="flex-grow">
          {/* Youtube player */}
          <iframe
            ref={playerRef}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/utOU0sNkRjY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default PlayOverlay;
