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
        <li className="cursor-pointer" key={item.id}>
          <button onClick={refArray[item.id - 1]}>{item.title}</button>
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
      className="cursor-pointer text-[16px] font-bold uppercase leading-8 text-black"
      key={item.id}
    >
      <button onClick={refArray[item.id - 1]}>{item.title}</button>
    </li>
  ));
};
