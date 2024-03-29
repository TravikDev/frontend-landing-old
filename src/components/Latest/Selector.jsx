import { useRef, useState } from "react";
import { useOnClickOutside } from "../../common/Hooks/useOnClickOutside";
import { ReactComponent as ArrowPopUp } from "../../assets/arrows/arrowPopUp.svg";
import { ReactComponent as ArrowPopDown } from "../../assets/arrows/arrowPopDown.svg";

export const Selector = ({
  sortRef,
  list,
  handleSelect = (f) => f,
  selected,
  children,
}) => {
  const [popUpState, setPopUpState] = useState(false);

  const popUpRef = useRef(null);
  const btnRef = useRef(null);

  const showButtonSelector = popUpState ? <ArrowPopUp /> : <ArrowPopDown />

  // hook that can help us close popup when clicked outside
  useOnClickOutside(popUpRef, btnRef, () => setPopUpState(state => !state));

  return (
    <div className="relative md:mx-0" ref={sortRef}>
      {/* Buttons for choosing filtering method */}
      <button
        className="sort-btn"
        ref={btnRef}
        onClick={() => setPopUpState(state => !state)}
      >
        <span className="text-[#333333]">{selected || children}</span>
        {/* If option open - show up arrow, if not - down arrow */}
        {showButtonSelector}
      </button>

      {/* Popup shower */}
      {popUpState && (
        <section ref={popUpRef} className="sort-popup">
          <ul className="ul-popup">
            {/* List of all items (countries or types) */}
            {list.map(item => (
              <li
                className={
                  "w-full cursor-pointer pl-[30px] leading-[30px] " +
                  (item === selected && "bg-[#FF5454] text-white")
                }
                key={item}
                // initialize function above
                onClick={() => {
                  handleSelect(item);
                  setPopUpState(false);
                }}
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