const numberWithCommas = (x) => {
  return `${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان`;
};

const chartData = {
  options: {
    chart: {
      id: "basic-bar",
      height: 100,
    },

    legend: {
      show: true,
      fontFamily: "Dana-FaNum, Arial, sans-serif",
      labels: {
        colors: ["red", "white"],
      },
      markers: {
        offsetX: 3,
      },
    },
    colors: ["#eb658f", "#7bca5c"],
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
      categories: [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
      ],
      labels: {
        show: true,
        rotate: 0,
        style: {
          colors: "white",
          fontSize: "12px",
          fontFamily: "Dana-FaNum, Arial, sans-serif",
          fontWeight: 400,
          // cssClass: "apexcharts-yaxis-label",
        },
      },

      tooltip: {
        enabled: false,
      },
      tickAmount: 4,
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        show: true,
        style: {
          colors: ["white"],
          fontSize: "12px",
          fontFamily: "Dana-FaNum, Arial, sans-serif",
          fontWeight: 10,
        },
        offsetX: -65,
        offsetY: 0,
        rotate: 0,
        formatter: (value) => {
          return numberWithCommas(value);
        },
      },

    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: "Dana-FaNum, Arial, sans-serif",
      },
      marker: {
        show: true,
      },
    },
  },
  series: [
    {
      name: "هزینه",
      data: [
        430000,
        100000,
        870000,
        690000,
        910000,
        700000,
        60000,
        670000,
        500000,
        450000,
        400000,
        300000,
      ],
    },
    {
      name: "درآمد",
      data: [
        300000,
        400000,
        450000,
        500000,
        110000,
        60000,
        700000,
        910000,
        690000,
        870000,
        100000,
        430000,
      ],
    },
  ],
};

export default chartData;
