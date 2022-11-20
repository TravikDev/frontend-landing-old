import React from "react";
import { MobileMenu } from "./ListMenu";

function MobileMenuOverlay({
  itemsRefScroll,
  catsRefScroll,
  contactUsRefScroll,
  isMobileMenuOpen,
  mobileMenuRef,
  toggleMobileMenu,
}) {
  return (
    isMobileMenuOpen && (
      <article
        ref={mobileMenuRef}
        className="fixed right-0 top-0 z-20 h-[120%] w-[260px] bg-white"
      >
        <button
          className="absolute top-[10px] right-[21px]"
          onClick={() => toggleMobileMenu(false)}
        >
          <img
            src={process.env.PUBLIC_URL + "/img/mobile/mobileClose.svg"}
            alt="close menu"
            width="36"
            height="36"
          />
        </button>
        <nav>
          <ul className="mt-[111px] flex list-none flex-col items-center">
            <MobileMenu
              itemsRefScroll={itemsRefScroll}
              categoriesRef={catsRefScroll}
              contactUsRefScroll={contactUsRefScroll}
            />

            <section className="mt-[40px] flex flex-col text-center leading-8 text-[#ff5454]">
              <span className="cursor-pointer">Login</span>
              <span className="cursor-pointer">Register</span>
            </section>
          </ul>
        </nav>
      </article>
    )
  );
}

export default MobileMenuOverlay;
