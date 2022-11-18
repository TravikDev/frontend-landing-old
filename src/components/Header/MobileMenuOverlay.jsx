import React from "react";

function MobileMenuOverlay({
  itemsRefScroll, 
  categoriesRefScroll, 
  contactUsRefScroll,
  isMobileMenuOpen,
  mobileMenuRef,
  toggleMobileMenu,
  MobileMenu,
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-[36px] w-[36px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav>
          <ul className="mt-[111px] flex list-none flex-col items-center">
            <MobileMenu 
              itemsRefScroll={itemsRefScroll}
              categoriesRef={categoriesRefScroll}
              contactUsRefScroll={contactUsRefScroll}
            />

            <section className="mt-[40px] flex flex-col text-center leading-8 text-[#ff5454]">
              <span>Login</span>
              <span>Register</span>
            </section>
          </ul>
        </nav>
      </article>
    )
  );
}

export default MobileMenuOverlay;
