import DescriptionIcon from "@mui/icons-material/Description";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import React from "react";
import { defineUnit } from "utils/formatPrice";
import { useNavigate } from "react-router-dom";
import { AUCTION_DETAIL_WITHOUT_SUFFIX } from "constant/routes";
import "./styles.scss";
import noAuctionImage from "assets/img/no-auction-image-2.svg";
import cx from "classnames";

const defineStatus = (startDate, endDate) => {
  if (new Date(startDate) > new Date() && new Date(endDate) < new Date())
    return (
      <React.Fragment>
        <div className="h-2 w-2 m-1 rounded-full bg-success shadow-slate-700" />
        <p className="text-sm">در جریان</p>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      <div className="h-2 w-2 m-1 rounded-full bg-danger" />
      <p className="text-sm">اتمام یافته</p>
    </React.Fragment>
  );
};

const defineType = (num) => {
  if (num === 1) return "مزایده";
  return "مناقصه";
};

export const Card = ({
  auction_image,
  name,
  participants_num,
  mode,
  finished_at,
  created_at,
  category,
  limit,
  token,
}) => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${AUCTION_DETAIL_WITHOUT_SUFFIX}/${token}`)}
      className="bg-cardColor rounded-3xl cursor-pointer my-auction-card"
    >
      <img
        className={cx("flex w-full rounded-3xl", {
          "h-44 object-cover": auction_image,
          "h-44 ": !auction_image,
        })}
        src={auction_image ? auction_image : noAuctionImage}
        alt="عکس مزایده"
      />

      <div className="mt-2 p-4 grid grid-cols-2 grid-rows-3">
        <div className="flex items-center m-1">
          <DescriptionIcon className="m-0.5" fontSize="inherit" />
          <p className="text-sm font-bold">عنوان : ‌</p>
          <p className="text-sm">{name}</p>
        </div>
        <div className="flex items-center m-1">
          <PeopleOutlineRoundedIcon className="m-0.5" fontSize="inherit" />
          <p className="text-sm font-bold"> شرکت‌کنندگان : ‌</p>
          <p className="text-sm">{participants_num} نفر</p>
        </div>
        <div className="flex items-center m-1">
          <GavelRoundedIcon className="m-0.5" fontSize="inherit" />
          <p className="text-sm font-bold">نوع : ‌</p>
          <p className="text-sm">{defineType(mode)}</p>
        </div>
        <div className="flex items-center m-1">
          <DescriptionIcon className="m-0.5" fontSize="inherit" />
          <p className="text-sm font-bold">وضعیت : ‌</p>
          {defineStatus(created_at, finished_at)}
        </div>
        <div className="flex items-center m-1">
          <CategoryRoundedIcon className="m-0.5" fontSize="inherit" />
          <p className="text-sm font-bold">‌دسته‌بندی : ‌</p>
          <p className="text-sm">{category}</p>
        </div>
        <div className="flex items-center m-1">
          <AttachMoneyRoundedIcon className="m-0.5" fontSize="inherit" />
          <p className="text-sm font-bold">قیمت : ‌</p>
          <p className="text-sm">{defineUnit(limit, 1)}</p>
        </div>
      </div>
    </div>
  );
};
