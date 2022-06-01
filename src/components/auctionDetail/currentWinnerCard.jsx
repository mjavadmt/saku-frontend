import { cardClass, headerClass } from "constant/cardClass";
import Avatar from "@mui/material/Avatar";
import { dateConverter } from "utils/dateConverter";
import { definePriceColor } from "pages/homePageComponents/tableCellFunctions";
import { winnerStat } from "statics/winnerStat";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";

export const CurrentWinner = () => {
  return (
    <div className={cardClass}>
      <div className={headerClass}>برنده تا کنون</div>
      <div className="flex justify-center mb-8">
        <Avatar
          sx={{
            height: 80,
            width: 80,
            color: "white",
          }}
          src={winnerStat.user.profile_image}
        />
      </div>
      <div className="flex m-3 items-center">
        <AccountCircleRoundedIcon className="mb-0.5" />
        <div className="p-2 font-bold"> نام :</div>
        <div className="p-2">{winnerStat.user.name}</div>
      </div>
      <hr className="border-none col-span-2  m-3 h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />

      <div className="flex m-3 items-center">
        <BusinessCenterRoundedIcon className="mb-0.5" />
        <div className="p-2 font-bold"> نوع کاربر :</div>
        <div className="p-2">حقیقی</div>
      </div>
      <hr className="border-none col-span-2  m-3 h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />

      <div className="flex m-3 items-center">
        <LocalAtmRoundedIcon className="mb-0.5" />
        <div className="p-2 font-bold"> قیمت :</div>
        <div className="p-2">{definePriceColor(winnerStat.price_entered)}</div>
      </div>
      <hr className="border-none col-span-2  m-3 h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />

      <div className="flex m-3 items-center">
        <DateRangeRoundedIcon className="mb-0.5" />
        <div className="p-2 font-bold"> تاریخ ثبت :</div>
        <div className="p-2">{dateConverter(winnerStat.date_entered)}</div>
      </div>
      {/* <div className="col-span-1">قیمت ثبت‌شده</div>
      <div className="col-span-1">
        {definePriceColor(winnerStat.price_entered)}
      </div>
      <hr className="border-none col-span-2  m-3 h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />

      <div className="col-span-1">تاریخ ثبت</div>
      <div className="col-span-1">{dateConverter(winnerStat.date_entered)}</div> */}
    </div>
  );
};