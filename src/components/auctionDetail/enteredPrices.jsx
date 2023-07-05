import { cardClass, headerClass } from "constant/cardClass";
import { enteredPrices } from "statics/userEnteredPrices";
import React, { useEffect, useState } from "react";
import { dateConverter } from "utils/dateConverter";
import { defineUnit } from "utils/formatPrice";
import { get } from "utils/api/api";
import { GET_MY_BID } from "constant/apiRoutes";
import { Token } from "@mui/icons-material";

const chipConstantClass =
  "rounded-2xl  p-1 pr-2 pl-2 text-xs flex justify-center w-28";

const definePriceColor = (num) => {
  if (num < 100_000)
    return (
      <div className={`${chipConstantClass} bg-purple-100 text-pink-400`}>
        {`${defineUnit(num, 1)} `}
      </div>
    );
  if (num < 1_000_000)
    return (
      <div className={`${chipConstantClass} bg-indigo-300 text-indigo-700`}>
        {`${defineUnit(num, 1)} `}
      </div>
    );
  if (num < 10_000_000)
    return (
      <div className={`${chipConstantClass} bg-yellow-100 text-orange-400`}>
        {`${defineUnit(num, 1)} `}
      </div>
    );
  return (
    <div className={`${chipConstantClass} bg-teal-200 text-green-600`}>
      {`${defineUnit(num, 1)} `}
    </div>
  );
};

export const EnteredPrices = ({ token }) => {
  const [priceList, setPriceList] = useState([]);
  useEffect(() => {
    get(`${GET_MY_BID}/${token}`).then((res) => {
      setPriceList(res.data);
    });
  }, [token]);
  return (
    <div className={cardClass}>
      <div className={headerClass}>قیمت‌های ثبت‌شده شما</div>
      <div className="h-7" />
      <div className="p-3 overflow-y-auto h-80">
        <div className="grid grid-cols-12 m-5">
          <div className="col-span-6">تاریخ وارد شده</div>
          <div className="col-span-6">قیمت وارد شده</div>
        </div>

        {!!priceList &&
          priceList.map((item, index) => (
            <div className="grid grid-cols-12 m-3">
              <div className="col-span-6 text-sm">
                {dateConverter(item.time)}
              </div>
              <div className="col-span-6">{definePriceColor(item.price)}</div>

              {index !== priceList.length - 1 && (
                <hr className="border-none col-span-12  m-3 h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />
              )}
            </div>
          ))}
        {!!priceList && priceList.length === 0 && (
          <div className="flex justify-center items-center h-40">
            <div className="font-bold text-lg ">
              شما تا کنون قیمتی را ثبت نکرده‌اید
            </div>
          </div>
        )}
      </div>
      <div className="h-12" />
    </div>
  );
};