import React from "react";
import menuItems from "../../data/menu.json";

export const ListMenu = ({
  itemsRefScroll,
  catsRefScroll,
  contactUsRefScroll,
}) => {
  const refArray = [itemsRefScroll, catsRefScroll, contactUsRefScroll];

  return (
    <ul className="flex list-none gap-[40px]">
      {menuItems.map((item) => (
        <li
          onClick={refArray[item.id - 1]}
          className="cursor-pointer"
          key={item.id}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export const MobileMenu = ({
  itemsRefScroll,
  catsRefScroll,
  contactUsRefScroll,
}) => {
  const refArray = [itemsRefScroll, catsRefScroll, contactUsRefScroll];

  return menuItems.map((item) => (
    <li
      onClick={refArray[item.id - 1]}
      className="cursor-pointer text-[16px] font-bold uppercase leading-8 text-black"
      key={item.id}
    >
      {item.title}
    </li>
  ));
};
