const chartData = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
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
      title: {
        text: "ساعت برگزاری ",
        // offsetY: 5,
        style: {
          color: "white",
          fontFamily: "Dana-FaNum, Arial, sans-serif",
        },
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
        offsetX: -23,
        offsetY: 0,
        rotate: 0,
      },
      title: {
        text: "درصد شرکت ",
        offsetX: -40,
        style: {
          color: "white",
          fontFamily: "Dana-FaNum, Arial, sans-serif",
        },
      },
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 67, 60, 70, 91],
    },
  ],
};

export default chartData;