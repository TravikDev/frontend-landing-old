export const LatestItems = ({ stoneList }) => {
  // Show list of items. If no items - show the message
  return stoneList.length ? (
    stoneList.map((stone) => {
      // Create variable
      
      const currentPrice = !!stone.discount
        ? "$" +((stone.price / 100) * (100 - stone.discount)).toFixed(2)
        : "$" + stone.price.toFixed(2);

      const previousPrice = !!stone.discount && "$" + stone.price.toFixed(2)

      return (
        <div key={stone.id}>
          {/* Image block of each item */}
          <div className="relative">
            <img
              className="w-full max-w-[330px] md:max-w-[270px]"
              src={
                process.env.PUBLIC_URL + "/img/stones/img" + stone.id + ".jpg"
              }
              alt={stone.title}
              width="270px"
              height="200px"
            />
            {/* If stone discount exists - put icon at the top-left corner */}
            {!!stone.discount && (
              <div className="absolute top-[15px] left-[15px] h-[48px] w-[48px] rounded-full  bg-[#FF5454] text-white">
                <span className="flex items-center justify-center pt-[11px]">
                  {stone.discount}%
                </span>
              </div>
            )}
          </div>

          {/* Desription of items */}
          <div className="mt-[15px] flex flex-col items-start md:mt-[20px]">
            {/* Item title */}
            <span className="text-[16px]">{stone.title}</span>
            {/* Image of item and discount if it exist */}
            <div className="flex gap-[10px]">
              <span className="text-[20px] font-bold">
                {/* Calculate current price if discount exists */}
                {currentPrice}
              </span>
              <span className="text-[20px] text-[#9E9E9E] line-through">
                {/* Previous prise if discount exists */}
                {previousPrice}
              </span>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    // No items message
    <h1 className="mt-4 text-xl">No items</h1>
  );
};
