import React from "react";

function Buttons({
  title,
  isItemsList,
  isContactButton,
  handleEvent = (f) => f,
}) {
  return (
    <button
      className={`red-btn mb-[0px] ${
        isItemsList === true ? "hidden" : "block"
      }`}
      onClick={handleEvent}
      type={isContactButton ? "submit" : "button"}
    >
      {title}
    </button>
  );
}

export default Buttons;
