import React from "react";
import socials from "../../data/socials.json";
import { ReactComponent as Facebook } from "../../assets/social/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/social/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/social/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/social/youtube.svg";

const socialList = [<Facebook />,<Instagram />,<Twitter />,<Youtube />];

function SocialList() {
  return (
    <ul className="flex list-none justify-center gap-[15px]">
      {socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.url}
            className="h-[40px] w-[40px]"
            target="_blank"
            rel="noreferrer"
          >
            {socialList[social.id]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialList;
