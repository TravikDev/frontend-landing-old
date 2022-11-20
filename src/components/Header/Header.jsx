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
      <article className="header-menu">
        <section className="ml-[30px] flex gap-[10px] md:ml-[50px]">
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
          <img
            src={process.env.PUBLIC_URL + "/img/mobile/mobileMenu.svg"}
            alt=""
            width="24"
            height="24"
          />
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
