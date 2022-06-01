import React from "react";
import { cardClass } from "constant/cardClass";
import cx from "classnames";
import {
  typeChipMaker,
  attendanceStatusChip,
  defineParticipantsColor,
} from "pages/homePageComponents/tableCellFunctions";
import "./auctionDetailCard.css";
import { defineUnit } from "utils/formatPrice";
import ReactTooltip from "react-tooltip";
import { useWindowDimensions } from "pages/homePageComponents/lastMessages";
import { dateConverter } from "utils/dateConverter";

const setLengthOfDescription = (width) => {
  if (width < 500) return 100;
  return 220;
};

export const AuctionDetailCard = ({ auction }) => {
  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      <div
        // style={{ height: "500px" }}
        className={cx(cardClass, "grid grid-cols-12")}
      >
        <img
          className="p-3 rounded-3xl h-52 col-span-5 md:col-span-6"
          src={auction.img}
          alt="عکس جزئیات مزایده"
        />
        <div className="p-0 m-1 col-span-7 md:col-span-6">
          <div className="flex m-3 mr-1">
            <div className="font-bold"> عنوان :‌ </div>
            <div className="mr-2">{auction.title}</div>
          </div>
          <div className="flex m-3 mr-1">
            <div className="font-bold"> نام : </div>
            <div className="mr-2">{auction.userName}</div>
          </div>
          <div className="flex m-3 mr-1">
            <div className="font-bold"> نوع : </div>
            <div className="mr-1">{typeChipMaker(auction.type)}</div>
          </div>
          <div className="flex m-3 mr-1">
            <div className="font-bold"> شرکت : </div>
            <div className="mr-2">{attendanceStatusChip(auction.private)}</div>
          </div>

          <div className="flex m-3 mr-1">
            <div className="font-bold"> شرکت‌کنندگان : </div>
            <div className="mr-2">
              {defineParticipantsColor(auction.participantsNum)}
            </div>
          </div>
        </div>
        <div className="p-3 flex col-span-12 md:col-span-6">
          <div className="font-bold"> تاریخ شروع : </div>
          <div className="mr-2">{dateConverter(auction.startDate)}</div>
        </div>

        <div className="p-3 flex col-span-12 md:col-span-6">
          <div className="font-bold"> قیمت پایه : </div>
          <div className="mr-2">{defineUnit(auction.price, 1)}</div>
        </div>
        <div className="p-5 col-span-12 ">
          <div className="font-bold"> توضیحات : </div>
          <div
            data-tip
            data-for={`description-toolbox`}
            className="mr-2 text-justify"
          >
            {auction.description.length < 300
              ? auction.description
              : auction.description.substring(
                  0,
                  setLengthOfDescription(width)
                ) + "..."}
          </div>
          {auction.description.length > 300 && (
            <ReactTooltip
              className="opaque w-72"
              effect="solid"
              backgroundColor="white"
              textColor="#000"
              place="top"
              id={`description-toolbox`}
              scrollHide={true}
            >
              {auction.description}
            </ReactTooltip>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
