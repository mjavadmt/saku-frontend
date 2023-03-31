let primary = "#adc4f0";
let success = "#7bca5c";
let danger = "#eb658f";
let warning = "#f5c462";
let warning_light = "#FFC085";
let danger_light = "#f29292";
let success_light = "#43ff6b";
let primary_light = "#7848c0";


const pieChartData = {
  options: {
    chart: {
      dropShadow: {
        enabled: false,
        blur: 5,
        left: 1,
        top: 1,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      theme : "dark",
      style: {
        fontSize: "12px",
        fontFamily: "Dana-FaNum, Arial, sans-serif",
      },
    },
    colors: [success, warning, danger, primary],
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: [
          success_light,
          warning_light,
          danger_light,
          primary_light,
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: { show: false },
    stroke: {
      width: 5,
    },
    labels: [
      "مناقصه‌های شرکت‌کرده",
      "مناقصه‌های ایجادکرده",
      "مزایده‌های ایجادکرده",
      "مزایده‌های شرکت‌کرده",
    ],
  },
  series: [2, 1, 3, 1],
};

export default pieChartData;
