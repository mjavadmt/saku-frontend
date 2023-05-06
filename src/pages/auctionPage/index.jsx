import React, { useState } from "react";
import { ActionCard } from "components/AuctionCard";
import { Filtering } from "components/Filtering";
import { useEffect } from "react";
import { GET_ALL_AUCTIONS, GET_ALL_CITY } from "utils/constant/apiRoutes";
import Pagination from "@mui/material/Pagination";
import { CircularProgress } from "@mui/material";
import noAuctionImage from "assets/img/no-auction-image-2.svg";
import {
    getAllAuctions,
    getFilteredAuctions,
} from "utils/api/requests/myAuctions";
import { useDispatch, useSelector } from "react-redux";
import { END_LOADING, SET_PAGE, ALL_AUCTIONS } from "constants/actionTypes";
import { useNavigate, useLocation } from "react-router-dom";
import {
    getallAuctoins,
    getallCity,
    getfilteredAuctoin,
} from "actions/auctions";
//import { useLocation } from "react-router-dom";

export const AuctionPage = () => {
    const { auctions, page, name, basePrice, isLoading } = useSelector(
        (data) => {
            return data.auction;
        }
    );
    const dataOnPage = 5;
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const [type, setType] = React.useState("");
    const [city, setCity] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [tag, setTag] = React.useState([]);
    const [is_online, setIs_online] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [category, setCategory] = React.useState("");
    const handleChange = (event, value) => {
        dispatch({ type: SET_PAGE, payload: { page: value } });
    };
    const paginatedData = () => {
        let currentItem = (page - 1) * dataOnPage;
        return auctions?.slice(currentItem, currentItem + dataOnPage);
    };
    const filterSubmited = async () => {
        dispatch({ type: SET_PAGE, payload: { page: 1 } });
        let filteredObj = {};
        if (city !== "") filteredObj["city"] = city;
        if (name !== "") filteredObj["name"] = name;
        if (type !== "") filteredObj["mode"] = type;
        if (basePrice !== "") filteredObj["limit"] = basePrice;
        if (tag !== "") filteredObj["tags"] = tag.join(",");
        console.log("is Online is :", is_online);
        if (is_online || is_online == "0") filteredObj["is_online"] = is_online;
        if (description !== "") filteredObj["desc"] = description;
        if (category !== "") filteredObj["category"] = category;
        dispatch(getfilteredAuctoin(filteredObj, `${GET_ALL_AUCTIONS}`));
        dispatch({ type: END_LOADING });
    };

    useEffect(() => {
        if (city) filterSubmited();
    }, [city]);
    
    useEffect(() => {
        if (location?.state?.id) {
            console.log("id ", location?.state?.id);
            console.log("saalllllllam");
            setCity(location.state.id);
            dispatch({ type: END_LOADING });
        } else {
            dispatch(getallAuctoins(`${GET_ALL_AUCTIONS}`));
            dispatch({ type: END_LOADING });
        }
    }, []);

    return (
        <div>
            <Filtering
                hasRadioBtn={true}
                type={type}
                setType={setType}
                status={status}
                setStatus={setStatus}
                tag={tag}
                setTag={setTag}
                is_online={is_online}
                setIs_online={setIs_online}
                description={description}
                setDescription={setDescription}
                category={category}
                setCategory={setCategory}
                name={name}
                basePrice={basePrice}
                filterSubmited={filterSubmited}
            />
            {isLoading ? (
                <span className='flex h-full justify-center items-center mt-16  '>
                    <CircularProgress color='inherit' />
                </span>
            ) : (
                <>
                    {auctions?.length > 0 && (
                        <>
                            {paginatedData()?.map((auction) => (
                                <ActionCard
                                    imgSrc={
                                        !!auction.auction_image
                                            ? auction.auction_image
                                            : noAuctionImage
                                    }
                                    ourImage={!!auction.auction_image}
                                    title={auction.name}
                                    city={auction.location}
                                    companyName={auction.user.username}
                                    date={new Date(
                                        auction.finished_at
                                    ).toLocaleDateString("fa-IR")}
                                    price={auction.limit}
                                    mode={auction.mode}
                                    isOnline={auction.is_online}
                                    remainingDay={Math.ceil(
                                        (new Date(
                                            auction.finished_at
                                        ).getTime() -
                                            new Date().getTime()) /
                                            (1000 * 3600 * 24)
                                    )}
                                    tags={[
                                        ...auction.tags.map((tag) => tag.name),
                                    ]}
                                    id={1}
                                    token={auction.token}
                                />
                            ))}

                            <div className='flex justify-center mt-5'>
                                <Pagination
                                    count={Math.ceil(
                                        auctions?.length / dataOnPage
                                    )}
                                    page={page}
                                    onChange={handleChange}
                                    color='primary'
                                />
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};
