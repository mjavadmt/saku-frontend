const subscribersGained = {
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
    x: { show: false },
  },
};

const subscribersGainedSeries = [
  {
    name: "",
    data: [28, 40, 36, 52, 38, 60, 55],
  },
];

const inComeGain = {
  options: subscribersGained,
  series: subscribersGainedSeries,
};

export default inComeGain;
