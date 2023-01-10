import React, { useEffect } from "react";
import { ListMenu } from "./ListMenu";
import MobileMenuOverlay from "./MobileMenuOverlay";

function Header({ itemsRefScroll, catsRefScroll, contactUsRefScroll }) {
  // const mobileMenuRef = useRef();
  // const mobileMenuIconRef = useRef();

  useEffect(() => {
    console.log("rendered");
  }, []);

  return (
    <header className="z-10 flex justify-center">
      <div className="header-menu">
        <a href="/" className="ml-[30px] flex gap-[10px] md:ml-[50px]">
          <img
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            alt="logo"
            width="44"
            height="33"
          />
          <span className="text-[21px] font-bold">Logotype</span>
        </a>

        <nav aria-label="primary-navigation" className="hidden md:block">
          <ListMenu
            itemsRefScroll={itemsRefScroll}
            catsRefScroll={catsRefScroll}
            contactUsRefScroll={contactUsRefScroll}
          />
        </nav>

        <MobileMenuOverlay
          itemsRefScroll={itemsRefScroll}
          catsRefScroll={catsRefScroll}
          contactUsRefScroll={contactUsRefScroll}
          // mobileMenuRef={mobileMenuRef}
          // MobileMenu={MobileMenu}
          // onClick={toggleMenu}
        />

        <div className="hidden md:flex md:flex-row md:items-center">
          <a href="/">Login</a>
          <a
            href="/"
            className="
            mx-[8px] flex h-[55px]
            w-[123px] items-center justify-center rounded-[42px]
            bg-red-600 px-[28px]
            py-[18px]"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
