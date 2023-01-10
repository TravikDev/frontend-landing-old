import React from "react";

function LatestItems({ stones }) {
  return stones.length !== 0 ? (
    stones.map((stone) => (
      <div key={stone.id}>
        <div className="relative">
          <img
            className="w-full max-w-[330px] md:max-w-[270px]"
            src={process.env.PUBLIC_URL + "/img/stones/img" + stone.id + ".jpg"}
            alt={stone.title}
            width="270px"
            height="200px"
          />
          {stone.discount > 0 && (
            <div className="absolute top-[10px] left-[15px] h-[48px] w-[48px] rounded-full  bg-[#FF5454] text-white">
              <span className="flex items-center justify-center pt-[11px]">
                {stone.discount}%
              </span>
            </div>
          )}
        </div>

        <div className="mt-[15px] flex flex-col items-start md:mt-[20px]">
          <span className="text-[16px]">{stone.title}</span>
          <div className="flex gap-[10px]">
            <span className="text-[20px] font-bold">
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
