import React from "react";

function PlayOverlay({ activePlayOverlay, onClose = (f) => f }) {
  return (
    <>
      <section className="fixed z-20 h-full w-full bg-black opacity-30" />

      <section className="fixed z-30 my-[172px] mx-auto h-auto w-[70%] min-w-[350px] max-w-[1310px] bg-white p-[15px] md:p-[30px]">
        <section className="mb-[15px] flex items-center justify-between md:mb-[20px]">
          <h1 className="mt-0 text-center text-[20px] font-bold md:text-[26px]">
            Natural & Cultured Stones
          </h1>
          <button onClick={() => onClose(false)}>
            <img src={process.env.PUBLIC_URL + "/img/close.svg"} />
          </button>
        </section>
        <img
          className="max-h-[505px]"
          src={process.env.PUBLIC_URL + "/img/overlay-you.jpg"}
          width="1250"
          height={505}
        />
      </section>
    </>
  );
}

export default PlayOverlay;
