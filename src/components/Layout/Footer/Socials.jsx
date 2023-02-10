import React from "react";
import socialList from "./socialList.json";
//Import icon for the current social site
import { ReactComponent as Facebook } from "../../../assets/social/facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/social/instagram.svg";
import { ReactComponent as Twitter } from "../../../assets/social/twitter.svg";
import { ReactComponent as Youtube } from "../../../assets/social/youtube.svg";

// Array for current assignment
const socialListIcons = [<Facebook />, <Instagram />, <Twitter />, <Youtube />];

export const Socials = () => {
  return (
    // Rendering full social list
    <ul className="flex list-none justify-center gap-[15px]">
      {socialList.map((social) => (
        // Rendering each social element
        <li key={social.id}>
          <a
            href={social.url}
            className="h-[40px] w-[40px]"
            target="_blank"
            rel="noreferrer"
          >
            {socialListIcons[social.id]}
          </a>
        </li>
      ))}
    </ul>
  );
}
