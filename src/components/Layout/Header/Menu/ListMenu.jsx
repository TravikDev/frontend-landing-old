import menuItems from "./menu.json";
//
export const ListMenu = ({
  itemsRefScroll,
  catsRefScroll,
  contactUsRefScroll,
}) => {
  // Array of urls
  const refArray = [itemsRefScroll, catsRefScroll, contactUsRefScroll];
  // List of menu items
  return (
    <ul className="flex list-none gap-[40px]">
      {menuItems.map((item) => (
        <li className="cursor-pointer" key={item.id}>
          <button onClick={refArray[item.id - 1]}>{item.title}</button>
        </li>
      ))}
    </ul>
  )
}