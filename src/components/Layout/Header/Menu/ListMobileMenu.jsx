import menuItems from "./menu.json";
//
export const ListMobileMenu = ({
  itemsRefScroll,
  catsRefScroll,
  contactUsRefScroll,
}) => {
  // Array of urls
  const refArray = [itemsRefScroll, catsRefScroll, contactUsRefScroll];
  // List of mobile menu items
  return menuItems.map((item) => (
    <li
      className="cursor-pointer text-[16px] font-bold uppercase leading-8 text-black"
      key={item.id}
    >
      <button onClick={refArray[item.id - 1]}>{item.title}</button>
    </li>
  ));
};
