import React from "react";
import socials from "../../data/socials.json";

function SocialList() {
  return (
    <ul className="flex list-none justify-center gap-[15px]">
      {socials.map((social) => (
        <li key={social.id}>
          <a href={social.url} target="_blank" rel="noreferrer">
            <img
              src={process.env.PUBLIC_URL + social.img}
              width="40px"
              height="40px"
              alt={social.title}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialList;
