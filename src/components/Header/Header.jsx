import React, { useState, useRef, useEffect } from "react";
import { ListMenu, MobileMenu } from "./ListMenu";
// import logo from "img/logo.png"

function Header() {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);

const mobileMenuRef = useRef()
const mobileMenuIconRef = useRef()

  useEffect(() => {
document.body.addEventListener("click", event => {
    if(!event.path.includes(mobileMenuRef.current) && !event.path.includes(mobileMenuIconRef.current)) { toggleMobileMenu(false) }
})
  }, [])

  const handleMobileMenuToggle = () => {
    toggleMobileMenu(true)
  }

  return (
    <div className="flex justify-center">
      {/* <div className="fixed top-0 h-full w-full bg-black z-20" /> */}
      {isMobileMenuOpen && (
        <article ref={mobileMenuRef} className="fixed w-[260px] h-[120%] right-0 top-0 bg-white z-20">
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
              className="w-[36px] h-[36px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav>
            <ul className="flex flex-col items-center list-none mt-[111px]">
              <MobileMenu />

              <section className="flex flex-col mt-[40px] text-center text-[#ff5454] leading-8">
                <span>Login</span>
                <span>Register</span>
              </section>
            </ul>
          </nav>
        </article>
      )}

        <article
          className="
            absolute top-[10px] md:top-[40px] z-10
            flex justify-between items-center
            xl:w-[1170px] 
            mx-[10px] md:h-[70px]
            h-[60px] sm:w-11/12 w-[95%]
            bg-black bg-opacity-[65%] rounded-[92px]
            text-white font-light text-[1rem]"
        >
          <section className="flex ml-[50px]">
            <img
              src={process.env.PUBLIC_URL + "/img/logo.png"}
              alt="logo"
              width="44"
              height="33"
            />
            <span className="my-[4px] ml-[10px] text-[21px] font-bold">
              Logotype
            </span>
          </section>

          <section className="hidden md:block">
            <ListMenu />
          </section>

          <button
            className="block md:hidden mr-[24px]"
            ref={mobileMenuIconRef}
            onClick={handleMobileMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6"
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
            flex justify-center items-center
            w-[123px] h-[55px] mx-[8px] px-[28px] py-[18px]
            bg-red-600 rounded-[42px]
            cursor-pointer"
            >
              Register
            </div>
          </section>
        </article>
    </div>
  );
}

export default Header;
