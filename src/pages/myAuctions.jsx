import { Filtering } from "components/Filtering/index";
import React from "react";
import { Grid } from "@mui/material";
import { auctions } from "statics/fakeDataMyAuction";
import { Card } from "components/MyAuction/card";


export const MyAuctions = () => {
  const [type, setType] = React.useState("همه");
  const [status, setStatus] = React.useState("همه");
  return (
    <React.Fragment>
      <div className="mt-3">
        <Filtering
          hasRadioBtn={true}
          onChangeType={setType}
          onChangeStatus={setStatus}
          type={type}
          status={status}
        />
      </div>
      <div className="mt-6">
        <Grid container spacing={2}>
          {auctions.map((auction, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Card {...auction} />
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
};
