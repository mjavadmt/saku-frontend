import Chart from "react-apexcharts";
import { Grid } from "@mui/material";

const chartData = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

export const Splash = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div className=" bg-cardColor m-2 rounded-l h-40 p-9 shadow-2xl">meow :)</div>
      </Grid>
      <Grid item xs={4}>
        <div className=" bg-cardColor m-2 rounded-l h-60 p-9 shadow-2xl">meow :)</div>
      </Grid> 
    </Grid>
  );
};
