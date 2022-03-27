import pieChartData from "statics/pieChart";
import Chart from "react-apexcharts";
import { cardClass, headerClass } from "constant/cardClass";


export const AuctionActivity = () => {
  return (
    <div className={cardClass}>
      <div className={headerClass}>
        فعالیت در مزایده/مناقصه‌
      </div>
      <div className="flex justify-center pb-3">
        <Chart
          options={pieChartData.options}
          series={pieChartData.series}
          type="pie"
          height={250}
          width={250}
        />
      </div>
      <hr className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />
      <div className="p-3 flex">
        <div className="h-2 w-2 m-1 rounded-full bg-success"></div>
        <div className="text-sm">مناقصه‌های شرکت کرده</div>
        <div className="flex-grow"></div>
        <div>10</div>
      </div>
      <hr className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor " />
      <div className="p-3 flex">
        <div className="h-2 w-2 m-1 rounded-full bg-warning "></div>
        <div className="text-sm">مناقصه‌های ایجاد کرده</div>
        <div className="flex-grow"></div>
        <div>22</div>
      </div>
      <hr className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />
      <div className="p-3 flex">
        <div className="h-2 w-2 m-1 rounded-full bg-palette4 "></div>
        <div className="text-sm">مزایده‌های شرکت کرده</div>
        <div className="flex-grow"></div>
        <div>7</div>
      </div>
      <hr className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />
      <div className="p-3 flex">
        <div className="h-2 w-2 m-1 rounded-full bg-danger "></div>
        <div className="text-sm">مزایده‌های ایجاد کرده</div>
        <div className="flex-grow"></div>
        <div>12</div>
      </div>
    </div>
  );
};
