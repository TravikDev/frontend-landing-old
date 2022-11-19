import React from "react";
import menuItems from "../../data/menu.json";

export const ListMenu = ({
  itemsRefScroll,
  categoriesRefScroll,
  contactUsRefScroll,
}) => {
  const refArray = [itemsRefScroll, categoriesRefScroll, contactUsRefScroll];

  return (
    <ul className="flex list-none gap-[40px]">
      {menuItems.map((item, i) => (
        <li
          onClick={refArray[i]}
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
  categoriesRefScroll,
  contactUsRefScroll,
}) => {
  const refArray = [itemsRefScroll, categoriesRefScroll, contactUsRefScroll];

  return menuItems.map((item, i) => (
    <li
      onClick={refArray[i]}
      className="cursor-pointer text-[16px] font-bold uppercase leading-8 text-black"
      key={item.id}
    >
      {item.title}
    </li>
  ));
};
