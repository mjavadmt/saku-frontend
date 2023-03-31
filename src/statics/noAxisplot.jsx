import randomIntFromInterval from "utils/generateRandomNumber";

const makeRandomNumberList = () => {
  let randomNums = [];
  for (let i = 0; i < 10; i++) {
    randomNums.push(randomIntFromInterval(0, 100));
  }
  return randomNums;
};

const siteView = {
  chart: {
    id: "subscribers",
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  grid: {
    show: false,
  },
  colors: ["#eb658f"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2.5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.9,
      opacityFrom: 0.7,
      opacityTo: 0.25,
      stops: [0, 80, 100],
    },
  },

  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: "Dana-FaNum, Arial, sans-serif",
      color: "black",
    },
    marker: {
      show: false,
    },
    x: { show: false },
  },
};

const siteViewSeries = [
  {
    name: "مزایده‌های ایجادشده",
    data: makeRandomNumberList(),
  },
];

export const siteViewDetail = {
  options: siteView,
  series: siteViewSeries,
};

const purchasedOptions = {
  chart: {
    id: "subscribers_1",
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  grid: {
    show: false,
  },
  colors: ["#7bca5c"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2.5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.9,
      opacityFrom: 0.7,
      opacityTo: 0.25,
      stops: [0, 80, 100],
    },
  },

  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: "Dana-FaNum, Arial, sans-serif",
      color: "black",
    },
    marker: {
      show: false,
    },
    x: { show: false },
  },
};

const purchasedSeries = [
  {
    name: " هزینه‌ها تا کنون",
    data: makeRandomNumberList(),
  },
];

export const purchasedDetail = {
  options: purchasedOptions,
  series: purchasedSeries,
};

const inComeOptions = {
  chart: {
    id: "subscribers_2",
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  grid: {
    show: false,
  },
  colors: ["#fcba03"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2.5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.9,
      opacityFrom: 0.7,
      opacityTo: 0.25,
      stops: [0, 80, 100],
    },
  },

  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: "Dana-FaNum, Arial, sans-serif",
      color: "black",
    },
    marker: {
      show: false,
    },
    x: { show: false },
  },
};

const inComeSeries = [
  {
    name: "درآمد کسب‌شده",
    data: makeRandomNumberList(),
  },
];

export const inComeDetail = {
  options: inComeOptions,
  series: inComeSeries,
};

const auctionViewOptions = {
  chart: {
    id: "subscribers_3",
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  grid: {
    show: false,
  },
  colors: ["#adc4f0"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2.5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.9,
      opacityFrom: 0.7,
      opacityTo: 0.25,
      stops: [0, 80, 100],
    },
  },

  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: "Dana-FaNum, Arial, sans-serif",
      color: "black",
    },
    marker: {
      show: false,
    },
    x: { show: false },
  },
};

const auctionViewSeries = [
  {
    name: " میزان مشاهده مزایده",
    data: makeRandomNumberList(),
  },
];

export const auctionViewDetail = {
  options: auctionViewOptions,
  series: auctionViewSeries,
};
