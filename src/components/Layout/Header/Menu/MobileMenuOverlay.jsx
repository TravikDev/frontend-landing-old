import { useRef, useState } from "react";
import { useOnClickOutside } from '../../../../common/Hooks/useOnClickOutside';
import { ListMobileMenu } from "./ListMobileMenu";
import { ReactComponent as MobileMenuIcon } from "../../../../assets/mobile/mobileMenu.svg";
import { ReactComponent as MobileCloseIcon } from "../../../../assets/mobile/mobileClose.svg";
// import { ReactComponent as Youtube } from "../../../../assets/social/youtube.svg";

export const MobileMenuOverlay = ({
  itemsRefScroll,
  catsRefScroll,
  contactUsRefScroll,
}) => {
  // state of menu overlay
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);

  // show on/off menu overlay
  const onBurgerClick = () => {
    toggleMobileMenu(state => !state);
  };

  const overlayRef = useRef(null);
  const btnRef = useRef(null);
  // hook that can help us close popup when clicked outside
  useOnClickOutside(overlayRef, btnRef, () => toggleMobileMenu(false));

  return (
    // Burger button
    <>
      <button
        className="mr-[24px] block md:hidden"
        onClick={onBurgerClick}
        ref={btnRef}
      >
        {/* <Youtube />  */}
        <MobileMenuIcon />
        {/* <img
          src={process.env.PUBLIC_URL + "/img/mobile/mobileMenu.svg"}
          alt=""
          width="24"
          height="24"
        /> */}
      </button>

      {/* Overlay mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed right-0 top-0 z-50 h-[120%] w-[260px] bg-white"
          ref={overlayRef}
        >
          {/* Close Button */}
          <button
            className="absolute top-[10px] right-[21px]"
            onClick={onBurgerClick}
          >
            
            <MobileCloseIcon />
            {/* <img
              src={process.env.PUBLIC_URL + "/img/mobile/mobileClose.svg"}
              alt="close menu"
              width="36"
              height="36"
            /> */}
          </button>

          {/* Mobile navigation list menu */}
          <nav aria-label="mobile-menu">
            <ul className="mt-[111px] flex list-none flex-col items-center">
              <ListMobileMenu
                itemsRefScroll={itemsRefScroll}
                catsRefScroll={catsRefScroll}
                contactUsRefScroll={contactUsRefScroll}
              />
            </ul>

            {/* Login and Register list */}
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
