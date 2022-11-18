import React from "react";
import menuItems from "../../data/menu.json";

export const ListMenu = () => {
  return (
    <ul className="flex list-none">
      {menuItems.map((item) => (
        <li
          className={`${
            item.id !== menuItems.length ? "mr-[40px]" : null
          } cursor-pointer`}
          key={item.id}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export const MobileMenu = () => {
  return menuItems.map((item) => (
    <li
      className="text-[16px] font-bold uppercase leading-8 text-black"
      key={item.id}
    >
      {item.title}
    </li>
  ));
};
