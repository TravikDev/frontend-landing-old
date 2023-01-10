import React, { useEffect, useRef, useState } from "react";
import { MobileMenu } from "./ListMenu";

function MobileMenuOverlay({
  itemsRefScroll,
  catsRefScroll,
  contactUsRefScroll,
  // mobileMenuRef,
}) {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);

  const onBurgerClick = () => {
    toggleMobileMenu((state) => !state);
  };

  const mobileMenuRef = useRef(null);
  const burgerIconRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !burgerIconRef.current.contains(event.target)
      ) {
        toggleMobileMenu(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        className="mr-[24px] block md:hidden"
        // ref={mobileMenuIconRef}
        ref={burgerIconRef}
        onClick={onBurgerClick}
      >
        <img
          src={process.env.PUBLIC_URL + "/img/mobile/mobileMenu.svg"}
          alt=""
          width="24"
          height="24"
        />
      </button>
      {isMobileMenuOpen && (
        <div
          // onClick={onBurgerClick}
          ref={mobileMenuRef}
          className="fixed right-0 top-0 h-[120%] w-[260px] bg-white"
        >
          <button
            className="absolute top-[10px] right-[21px]"
            onClick={onBurgerClick}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/mobile/mobileClose.svg"}
              alt="close menu"
              width="36"
              height="36"
            />
          </button>
          <nav aria-label="mobile-menu">
            <ul className="mt-[111px] flex list-none flex-col items-center">
              <MobileMenu
                itemsRefScroll={itemsRefScroll}
                catsRefScroll={catsRefScroll}
                contactUsRefScroll={contactUsRefScroll}
              />
            </ul>
            <ul className="mt-[40px] flex flex-col text-center leading-8 text-[#ff5454]">
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="/">Register</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default MobileMenuOverlay;
