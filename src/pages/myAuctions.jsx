import { Filtering } from "components/Filtering/index";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { auctions } from "statics/fakeDataMyAuction";
import { Card } from "components/MyAuction/card";
import Pagination from "@mui/material/Pagination";

export const MyAuctions = () => {
  const [type, setType] = React.useState(10);
  const [status, setStatus] = React.useState(10);
  const [page, setPage] = useState(1);
  const dataOnPage = 5;
  const handleChange = (event, value) => {
    setPage(value);
  };
  const paginatedData = () => {
    let currentItem = (page - 1) * dataOnPage;
    return auctions.slice(currentItem, currentItem + dataOnPage);
  };
  return (
    <React.Fragment>
      <div className="mt-3">
        <Filtering
          hasRadioBtn={true}
          onChangeType={setType}
          onChangeStatus={setStatus}
          type={type}
          setType={setType}
          status={status}
          setStatus={setStatus}
        />
      </div>
      <div className="mt-6">
        <Grid container spacing={2}>
          {paginatedData().map((auction, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Card {...auction} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="flex justify-center mt-5">
        <Pagination
          count={Math.ceil(auctions.length / 5)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </React.Fragment>
  );
};
