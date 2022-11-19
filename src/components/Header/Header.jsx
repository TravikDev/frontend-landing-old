import React, { useState, useRef, useEffect } from "react";
import { ListMenu, MobileMenu } from "./ListMenu";
import MobileMenuOverlay from "./MobileMenuOverlay";

function Header({ itemsRefScroll, categoriesRefScroll, contactUsRefScroll }) {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);

  const mobileMenuRef = useRef();
  const mobileMenuIconRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (
        !event.path.includes(mobileMenuRef.current) &&
        !event.path.includes(mobileMenuIconRef.current)
      ) {
        toggleMobileMenu(false);
      }
    });
  }, []);

  const handleMobileMenuToggle = () => {
    toggleMobileMenu(true);
  };

  return (
    <div className="flex justify-center">
      <MobileMenuOverlay
        itemsRefScroll={itemsRefScroll}
        categoriesRef={categoriesRefScroll}
        contactUsRefScroll={contactUsRefScroll}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMenuRef={mobileMenuRef}
        toggleMobileMenu={toggleMobileMenu}
        MobileMenu={MobileMenu}
      />
      <article
        className="
            absolute top-[10px] z-10 mx-[10px] flex
            h-[60px] w-[95%] items-center
            justify-between 
            rounded-[92px] bg-black
            bg-opacity-[65%] text-[1rem] font-light
            text-white sm:w-11/12 md:top-[40px]
            md:mx-0 md:h-[70px] xl:w-[1170px]"
      >
        <section className="ml-[50px] flex gap-[10px]">
          <img
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            alt="logo"
            width="44"
            height="33"
          />
          <span className="text-[21px] font-bold">Logotype</span>
        </section>

        <section className="hidden md:block">
          <ListMenu
            itemsRefScroll={itemsRefScroll}
            categoriesRef={categoriesRefScroll}
            contactUsRefScroll={contactUsRefScroll}
          />
        </section>

        <button
          className="mr-[24px] block md:hidden"
          ref={mobileMenuIconRef}
          onClick={handleMobileMenuToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <section className="hidden md:flex md:flex-row md:items-center">
          <span className="cursor-pointer">Login</span>
          <div
            className="
            mx-[8px] flex h-[55px]
            w-[123px] cursor-pointer items-center justify-center rounded-[42px]
            bg-red-600 px-[28px]
            py-[18px]"
          >
            Register
          </div>
        </section>
      </article>
    </div>
  );
}

export default Header;
