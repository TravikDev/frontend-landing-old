import React, { useState, useRef, useEffect } from "react";
import { ListMenu, MobileMenu } from "./ListMenu";
import MobileMenuOverlay from "./MobileMenuOverlay";

function Header({ itemsRefScroll, catsRefScroll, contactUsRefScroll }) {
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
    <>
      <MobileMenuOverlay
        itemsRefScroll={itemsRefScroll}
        catsRefScroll={catsRefScroll}
        contactUsRefScroll={contactUsRefScroll}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMenuRef={mobileMenuRef}
        toggleMobileMenu={toggleMobileMenu}
        MobileMenu={MobileMenu}
      />
      <header className="flex justify-center">
        <div className="header-menu">
          <div className="ml-[30px] flex gap-[10px] md:ml-[50px]">
            <img
              src={process.env.PUBLIC_URL + "/img/logo.png"}
              alt="logo"
              width="44"
              height="33"
            />
            <span className="text-[21px] font-bold">Logotype</span>
          </div>

          <nav aria-label="primary-navigation" className="hidden md:block">
            <ListMenu
              itemsRefScroll={itemsRefScroll}
              catsRefScroll={catsRefScroll}
              contactUsRefScroll={contactUsRefScroll}
            />
          </nav>

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

          <div className="hidden md:flex md:flex-row md:items-center">
            <button>Login</button>
            <div
              className="
            mx-[8px] flex h-[55px]
            w-[123px] items-center justify-center rounded-[42px]
            bg-red-600 px-[28px]
            py-[18px]"
            >
              Register
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
