import Chart from "react-apexcharts";
import { Grid } from "@mui/material";
import chartData from "statics/chartData";
import inComeGain from "statics/noAxisplot";

export const Splash = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md="6">
        <div className=" bg-cardColor m-4 mt-7 rounded-xl p-3 shadow-2xl">
          <Chart
            series={chartData.series}
            options={chartData.options}
            type="area"
          />
        </div>
      </Grid>
      <Grid item xs={12} md="3">
        <div className=" bg-cardColor m-4 mt-7 rounded-xl pb-0 overflow-hidden shadow-2xl text-black">
          <Chart
            series={inComeGain.series}
            options={inComeGain.options}
            type="area"
            height="100"
          />
        </div>
      </Grid>
    </Grid>
  );
};
