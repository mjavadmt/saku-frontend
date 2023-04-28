import { useState } from "react";
import { ActionCard } from "components/AuctionCard";
import { Filtering } from "components/Filtering";
import { useEffect } from "react";
import { GET_ALL_AUCTIONS } from "utils/constant/apiRoutes";
import Pagination from "@mui/material/Pagination";
import { CircularProgress } from "@mui/material";
import noAuctionImage from "assets/img/no-auction-image-2.svg";
import {
  getAllAuctions,
  getFilteredAuctions,
} from "utils/api/requests/myAuctions";
import { useDispatch, useSelector } from "react-redux";
import { END_LOADING, SET_PAGE, ALL_AUCTIONS } from "constants/actionTypes";
import { getallAuctoins, getfilteredAuctoin } from "actions/auctions";

export const AuctionPage = () => {
  const { auctions, page, name, basePrice, isLoading } = useSelector((data) => {
    return data.auction;
  });
  const dataOnPage = 5;
  const dispatch = useDispatch();
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
    if (name !== "") filteredObj["name"] = name;
    if (basePrice !== "") filteredObj["limit"] = basePrice;
    dispatch(getfilteredAuctoin(filteredObj, `${GET_ALL_AUCTIONS}`));
    dispatch({ type: END_LOADING });
  };
  useEffect(() => {
    dispatch(getallAuctoins(`${GET_ALL_AUCTIONS}`));
    dispatch({ type: END_LOADING });
  }, []);
  return (
    <div>
      <Filtering
        name={name}
        basePrice={basePrice}
        filterSubmited={filterSubmited}
      />
      {isLoading ? (
        <span className="flex h-full justify-center items-center mt-16  ">
          <CircularProgress color="inherit" />
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
                  date={new Date(auction.finished_at).toLocaleDateString(
                    "fa-IR"
                  )}
                  price={auction.limit}
                  mode={auction.mode}
                  isOnline={auction.is_online}
                  remainingDay={Math.ceil(
                    (new Date(auction.finished_at).getTime() -
                      new Date().getTime()) /
                      (1000 * 3600 * 24)
                  )}
                  tags={[...auction.tags.map((tag) => tag.name)]}
                  id={1}
                  token={auction.token}
                />
              ))}

              <div className="flex justify-center mt-5">
                <Pagination
                  count={Math.ceil(auctions?.length / dataOnPage)}
                  page={page}
                  onChange={handleChange}
                  color="primary"
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
