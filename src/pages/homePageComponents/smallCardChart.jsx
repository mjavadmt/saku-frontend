import cx from "classnames";
import { cardClass } from "constant/cardClass";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import {
  siteViewDetail,
  purchasedDetail,
  auctionViewDetail,
  inComeDetail,
} from "statics/noAxisplot";
import Chart from "react-apexcharts";

export const ViewFromDashboard = () => {
  return (
    <div className={cx(cardClass, "text-black")}>
      <div className="p-3">
        <div className="bg-purple-100 rounded-full w-11 h-11 flex justify-center items-center">
          <NotesRoundedIcon className="text-pink-400" fontSize="medium" />
        </div>
        <div className="text-white m-2 mt-3 font-bold ">
          {siteViewDetail.series[0].data.reduce((a, b) => a + b, 0)}
        </div>
        <div className="text-white font-thin text-xs"> بازدید ماهانه شما </div>
      </div>
      <Chart
        series={siteViewDetail.series}
        options={siteViewDetail.options}
        type="area"
        height="100"
      />
    </div>
  );
};

export const PurchasedStats = () => {
  return (
    <div className={cx(cardClass, "text-black")}>
      <div className="p-3">
        <div className="bg-teal-200 rounded-full w-11 h-11 flex justify-center items-center">
          <ShoppingCartRoundedIcon
            className="text-green-600"
            fontSize="medium"
          />
        </div>
        <div className="text-white m-2 mt-3 font-bold ">
          {purchasedDetail.series[0].data.reduce((a, b) => a + b, 0)} تومان
        </div>
        <div className="text-white font-thin text-xs"> هزینه‌ها تا کنون </div>
      </div>
      <Chart
        series={purchasedDetail.series}
        options={purchasedDetail.options}
        type="area"
        height="100"
      />
    </div>
  );
};

export const InComeStats = () => {
  return (
    <div className={cx(cardClass, "text-black")}>
      <div className="p-3">
        <div className="bg-yellow-100 rounded-full w-11 h-11 flex justify-center items-center">
          <AttachMoneyRoundedIcon
            className="text-orange-400"
            fontSize="medium"
          />
        </div>
        <div className="text-white m-2 mt-3 font-bold ">
          {inComeDetail.series[0].data.reduce((a, b) => a + b, 0)} تومان
        </div>
        <div className="text-white font-thin text-xs"> درآمدها تا کنون </div>
      </div>
      <Chart
        series={inComeDetail.series}
        options={inComeDetail.options}
        type="area"
        height="100"
      />
    </div>
  );
};

export const AuctionViewStats = () => {
  return (
    <div className={cx(cardClass, "text-black")}>
      <div className="p-3">
        <div className="bg-violet-200 rounded-full w-11 h-11 flex justify-center items-center">
          <GroupsRoundedIcon className="text-violet-500" fontSize="medium" />
        </div>
        <div className="text-white m-2 mt-3 font-bold ">
          {auctionViewDetail.series[0].data.reduce((a, b) => a + b, 0)}
        </div>
        <div className="text-white font-thin text-xs">
          {" "}
          مشاهده افراد از مزایده شما{" "}
        </div>
      </div>
      <Chart
        series={auctionViewDetail.series}
        options={auctionViewDetail.options}
        type="area"
        height="100"
      />
    </div>
  );
};
