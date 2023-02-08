import React from "react";

function Buttons({
  isItemsList,
  isContactButton,
  children,
  handleEvent = (f) => f,
}) {
  return (
    // Template for a button
    <button
      className={`red-btn mb-[0px] ${
        isItemsList === true ? "hidden" : "block"
      }`}
      // Some event
      onClick={handleEvent}
      type={isContactButton ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

export default Buttons;
