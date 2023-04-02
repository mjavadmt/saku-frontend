import React from "react";
import { cardClass, headerClass } from "utils/constant/cardClass";
import Chart from "react-apexcharts";
import chartData from "utils/statics/chartData";
import cx from "classnames";
import "./chart.css";

const options = [
    { value: "1400", label: "1400" },
    { value: "1399", label: "1399" },
    { value: "1398", label: "1398" },
];

export const RevenueOnMonth = ({ data }) => {
    return (
        <div className={cardClass}>
            <div className={cx(headerClass, "flex")}>
                <div>کسب درآمد</div>
                <div className='flex-grow' />
                <div></div>
            </div>
            <div className='p-5'>
                <Chart
                    series={chartData.series}
                    options={chartData.options}
                    type='area'
                    height='400px'
                />
            </div>
        </div>
    );
};
