import React from "react";
// import stones from "../../data/stones.json"

function LatestItems({ isFullListLatest, stones }) {
  return stones.length !== 0 ? (
    stones.map((stone) => (
      <div className="z-10 mt-[20px]" key={stone.id}>
        <div className="relative">
          <img
            className="w-full md:w-[270px]"
            src={process.env.PUBLIC_URL + "/img/stones/img" + stone.id + ".jpg"}
            alt={stone.title}
            width="270px"
            height="200px"
          />
          {stone.discount > 0 && (
            <div className="absolute top-[15px] left-[15px] h-[48px] w-[48px] rounded-full  bg-[#FF5454] py-[10px] px-[10px] text-white">
              {stone.discount}%
            </div>
          )}
        </div>

        <div className="flex flex-col items-start">
          <span className="text-[16px]">{stone.title}</span>
          <div className="flex">
            <span className="mr-[10px] text-[20px] font-bold">
              $
              {stone.discount
                ? ((stone.price / 100) * (100 - stone.discount)).toFixed(2)
                : stone.price.toFixed(2)}
            </span>
            <span className="text-[20px] text-[#9E9E9E] line-through">
              {stone.discount > 0 && "$" + stone.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    ))
  ) : (
    <h1 className="mt-4 text-xl">Отсутствуют товары данной категории!</h1>
  );
}

export default LatestItems;
