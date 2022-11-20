import React from "react";

function Selections({
  sortRef,
  list,
  isOpenPopup,
  handleClickSort = (f) => f,
  handleSelect = (f) => f,
  selected,
  selectText,
}) {
  return (
    <div className="relative md:mx-0" ref={sortRef}>
      <button className="sort-btn" onClick={handleClickSort}>
        <span className="text-[#333333]">{selected || selectText}</span>
        {isOpenPopup ? (
          <img
            src={process.env.PUBLIC_URL + "/img/arrows/arrowPopUp.svg"}
            alt=""
            width="16"
            height="16"
          />
        ) : (
          <img
            src={process.env.PUBLIC_URL + "/img/arrows/arrowPopDown.svg"}
            alt=""
            width="16"
            height="16"
          />
        )}
      </button>

      {isOpenPopup && (
        <section className="sort-popup">
          <ul className="ul-popup">
            {list.map((item) => (
              <li
                className={
                  "w-full  cursor-pointer pl-[30px] leading-[30px] " +
                  (item === selected && "bg-[#FF5454] text-white")
                }
                key={item}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default Selections;
