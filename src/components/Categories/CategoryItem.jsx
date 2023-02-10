import { ReactComponent as ArrowRightIcon } from "../../assets/arrows/arrowRight.svg";

export const CategoryItem = ({
  id,
  title,
  count,
  resultColArray,
  resultRowArray,
}) => {
  // Class style type
  const col1Row1 = `cat-items group relative md:col-span-1 md:row-span-1 z-0`;
  const col2Row1 = `cat-items group relative md:col-span-2 md:row-span-1 z-0`;
  const col2Row3 = `cat-items group relative md:col-span-2 md:row-span-3 md:h-[755px] z-0`;

  // Class - chooser
  const buttonClass = () => {
    if (resultColArray.includes(id) && resultRowArray.includes(id))
      return col2Row3;
    if (resultColArray.includes(id)) return col2Row1;
    return col1Row1;
  };

  const categoryBgImage = `url(${
    process.env.PUBLIC_URL + "/img/categories/cat" + id + ".jpg"
  })`;

  return (
    // Button with image for each category
    <button
      className={buttonClass()}
      style={{
        backgroundImage: categoryBgImage,
      }}
    >
      {/* Background black overlay with animation and opacity */}
      <div className="group absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden rounded-3xl bg-fixed transition delay-150 ease-in-out group-hover:bg-black/50" />
      {/* White button */}
      <div className="group-hover cat-btn z-10 mx-6 bg-white px-4">
        <h2 className="text-center">{title}</h2>
        <span className="cat-btn-items">{count} items</span>
        <div className="h-[12px] w-[9px]">
          <ArrowRightIcon />
        </div>
      </div>
    </button>
  );
};
