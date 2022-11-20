import React from "react";
import SocialList from "./SocialList";

function Footer() {
  return (
    <article className="flex items-center justify-center bg-black py-[40px] px-[28px] text-white md:h-[100px]">
      <section className=" flex flex-col-reverse justify-between md:w-[1170px] md:flex-row">
        <section className="flex flex-col items-center gap-[10px] text-[16px] md:flex-row md:gap-[30px]">
          <span className="mt-[20px] md:mt-0">
            Copyright © 2022. All Rights Reserved.
          </span>
          <section className="flex justify-evenly gap-[20px]">
            <button className="footer-link">User Agreement</button>
            <button className="footer-link">Privacy Policy</button>
          </section>
        </section>

        <section className="gap-[20px]">
          <SocialList />
        </section>
      </section>
    </article>
  );
}

export default Footer;
