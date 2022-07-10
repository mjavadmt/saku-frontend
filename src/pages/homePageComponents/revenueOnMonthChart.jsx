import React from "react";
import { cardClass, headerClass } from "constant/cardClass";
import Chart from "react-apexcharts";
import chartData from "statics/chartData";
import cx from "classnames";
import Select from "react-select";
import "styles/chart.css";

const options = [
  { value: "1400", label: "1400" },
  { value: "1399", label: "1399" },
  { value: "1398", label: "1398" },
];

export const RevenueOnMonth = ({ data }) => {
  // const [selectedOption, setSelectedOption] = React.useState(options[0]);

  return (
    <div className={cardClass}>
      <div className={cx(headerClass, "flex")}>
        <div>کسب درآمد</div>
        <div className="flex-grow" />
        <div>
          {/* <div className="text-xs font-thin">انتخاب سال</div>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            // theme={(theme) => ({
            //   ...theme,
            //   colors: {
            //     ...theme.colors,
            //     primary25: "#f5e1ce",
            //     primary: "#ff9f43",
            //     neutral0: "black",
            //     neutral90 : "white",

            //   },
            // })}
            options={options}
            className="text-sm text-black"
          /> */}
        </div>
      </div>
      <div className="p-5">
        <Chart
          series={chartData.series}
          options={chartData.options}
          type="area"
          height="400px"
        />
      </div>
    </div>
  );
};
