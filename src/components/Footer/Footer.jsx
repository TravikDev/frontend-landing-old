import React from "react";
import SocialList from "./SocialList";

function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="flex items-center justify-center bg-black py-[40px] px-[28px] text-white md:h-[100px]"
    >
      <div className=" flex flex-col-reverse place-items-center justify-between md:w-[1170px] md:flex-row">
        <div className="flex flex-col items-center gap-[10px] text-[16px] md:flex-row md:gap-[30px]">
          <div className="max-w-auto mt-[20px] justify-between md:mt-0 md:w-[180px] footer:w-auto">
            Copyright © 2022. All Rights Reserved.
          </div>
          <div className="flex justify-evenly gap-[20px]">
            <button className="footer-link">User Agreement</button>
            <button className="footer-link">Privacy Policy</button>
          </div>
        </div>

        <div className="mx-2 gap-[20px]">
          <SocialList />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
