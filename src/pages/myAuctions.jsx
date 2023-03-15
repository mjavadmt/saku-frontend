import { Filtering } from "components/Filtering/index";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Card } from "components/MyAuction/card";
import Pagination from "@mui/material/Pagination";
import { get } from "utils/api";
import { useEffect } from "react";
import { GET_ALL_AUCTIONS } from "constant/apiRoutes";
import { CircularProgress } from "@mui/material";

export const MyAuctions = () => {
    const [type, setType] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [page, setPage] = useState(1);
    const [auctions, setAuctios] = useState([]);
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
    const filterSubmited = () => {
        setPage(1);
        let username = localStorage.getItem("username");
        let filteredObj = {};
        if (name !== "") filteredObj["name"] = name;
        if (status !== "") filteredObj["finished"] = !status;
        if (type !== "") filteredObj["mode"] = type;
        if (basePrice !== "") filteredObj["limit"] = basePrice;

        get(`${GET_ALL_AUCTIONS}?username=${username}`, { params: filteredObj })
            .then((res) => {
                setAuctios(res.data);
                setIsLoading(false);
            })
            .catch((e) => setIsLoading(false));
    };
    useEffect(() => {
        let username = localStorage.getItem("username");
        get(`${GET_ALL_AUCTIONS}?username=${username}`)
            .then((res) => {
                setAuctios(res.data);
                setIsLoading(false);
            })
            .catch((e) => setIsLoading(false));
    }, []);

    return (
        <React.Fragment>
            <div className='mt-3'>
                <Filtering
                    hasRadioBtn={true}
                    setStatus={setStatus}
                    type={type}
                    setType={setType}
                    status={status}
                    name={name}
                    setName={setName}
                    basePrice={basePrice}
                    setBasePrice={setBasePrice}
                    filterSubmited={filterSubmited}
                />
            </div>
            {isLoading ? (
                <span className='flex h-full justify-center items-center mt-24'>
                    <CircularProgress color='inherit' />
                </span>
            ) : (
                <>
                    <div className='mt-6'>
                        <Grid container spacing={2}>
                            {paginatedData().map((auction, index) => (
                                <Grid key={index} item xs={12} md={4}>
                                    <Card {...auction} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <Pagination
                            count={Math.ceil(auctions.length / dataOnPage)}
                            page={page}
                            onChange={handleChange}
                            color='primary'
                        />
                    </div>
                </>
            )}
        </React.Fragment>
    );
};
