import { Filtering } from "components/Filtering/index";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Card } from "components/MyAuction/card";
import Pagination from "@mui/material/Pagination";
import { useEffect } from "react";
import { GET_ALL_AUCTIONS } from "constant/apiRoutes";
import { CircularProgress } from "@mui/material";
import { getFilteredAuctions, getAllAuctions } from "requests/myAuctions";

export const MyAuctions = () => {
  const [type, setType] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [page, setPage] = useState(1);
  const [auctions, setAuctions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dataOnPage = 6;
  const [name, setName] = useState("");
  const [basePrice, setBasePrice] = useState("");

  const handleChange = (event, value) => {
    setPage(value);
  };
  const paginatedData = () => {
    let currentItem = (page - 1) * dataOnPage;
    return auctions.slice(currentItem, currentItem + dataOnPage);
  };
  const filterSubmited = async () => {
    setPage(1);
    let username = localStorage.getItem("username");
    let filteredObj = {};
    if (name !== "") filteredObj["name"] = name;
    if (status !== "") filteredObj["finished"] = !status;
    if (type !== "") filteredObj["mode"] = type;
    if (basePrice !== "") filteredObj["limit"] = basePrice;

    const getAllAuctionsRes = await getFilteredAuctions(`${GET_ALL_AUCTIONS}?username=${username}`,{params: filteredObj});
    if(getAllAuctionsRes && getAllAuctionsRes.status === 200){
      setAuctions(getAllAuctionsRes.data)
    }
    setIsLoading(false);
  };
  useEffect(async () => {
    let username = localStorage.getItem("username");
    const getAllAuctionsRes = await getAllAuctions(`${GET_ALL_AUCTIONS}?username=${username}`);
    if(getAllAuctionsRes && getAllAuctionsRes.status === 200){
      setAuctions(getAllAuctionsRes.data);
    }
    setIsLoading(false);
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
          setName={setName}
          basePrice={basePrice}
          setBasePrice={setBasePrice}
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
