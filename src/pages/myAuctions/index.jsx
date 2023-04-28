import { Filtering } from "components/Filtering/index";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Card } from "components/MyAuction/card";
import Pagination from "@mui/material/Pagination";
import { useEffect } from "react";
import { GET_ALL_AUCTIONS } from "utils/constant/apiRoutes";
import { CircularProgress } from "@mui/material";
import {
  getFilteredAuctions,
  getAllAuctions,
} from "utils/api/requests/myAuctions";
import { getallAuctoins, getfilteredAuctoin } from "actions/auctions";

import { useDispatch, useSelector } from "react-redux";
import { END_LOADING, SET_PAGE, ALL_AUCTIONS } from "constants/actionTypes";

export const MyAuctions = () => {
  const { auctions, page, name, basePrice, isLoading } = useSelector(
    (data) => data.auction
  );
  const dispatch = useDispatch();
  const [type, setType] = React.useState("");
  const [status, setStatus] = React.useState("");
  const dataOnPage = 6;
  const handleChange = (event, value) => {
    dispatch({ type: SET_PAGE, payload: { page: value } });
  };
  const paginatedData = () => {
    let currentItem = (page - 1) * dataOnPage;
    return auctions.slice(currentItem, currentItem + dataOnPage);
  };
  const filterSubmited = async () => {
    dispatch({ type: SET_PAGE, payload: { page: 1 } });
    let username = localStorage.getItem("username");
    let filteredObj = {};
    if (name !== "") filteredObj["name"] = name;
    if (status !== "") filteredObj["finished"] = !status;
    if (type !== "") filteredObj["mode"] = type;
    if (basePrice !== "") filteredObj["limit"] = basePrice;
    dispatch(
      getfilteredAuctoin(
        filteredObj,
        `${GET_ALL_AUCTIONS}?username=${username}`
      )
    );
    dispatch({ type: END_LOADING });
  };
  useEffect(async () => {
    let username = localStorage.getItem("username");
    dispatch(getallAuctoins(`${GET_ALL_AUCTIONS}?username=${username}`));
    dispatch({ type: END_LOADING });
  }, []);

  return (
    <React.Fragment>
      <div className="mt-3">
        <Filtering
          hasRadioBtn={true}
          type={type}
          setType={setType}
          status={status}
          setStatus={setStatus}
          name={name}
          basePrice={basePrice}
          filterSubmited={filterSubmited}
        />
      </div>
      {isLoading ? (
        <span className="flex h-full justify-center items-center mt-24">
          <CircularProgress color="inherit" />
        </span>
      ) : (
        <>
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
              count={Math.ceil(auctions.length / dataOnPage)}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </div>
        </>
      )}
    </React.Fragment>
  );
};
