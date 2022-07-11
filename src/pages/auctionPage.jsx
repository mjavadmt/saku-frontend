import { useState } from "react";
import { ActionCard } from "components/AuctionCard";
import { Filtering } from "components/Filtering";
import { useEffect } from "react";
import { get } from "utils/api";
import { GET_ALL_AUCTIONS } from "constant/apiRoutes";
import Pagination from "@mui/material/Pagination";
import { CircularProgress } from "@mui/material";
import noAuctionImage from "assets/img/no-auction-image-2.svg";

export const AuctionPage = () => {
  const [auctions, setAuctios] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const dataOnPage = 5;
  const [isLoading, setIsLoading] = useState(true);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const paginatedData = () => {
    let currentItem = (page - 1) * dataOnPage;
    return auctions.slice(currentItem, currentItem + dataOnPage);
  };
  const filterSubmited = () => {
    setPage(1);
    let filteredObj = {};
    if (name !== "") filteredObj["name"] = name;
    if (basePrice !== "") filteredObj["limit"] = basePrice;
    get(`${GET_ALL_AUCTIONS}`, { params: filteredObj })
      .then((res) => {
        setAuctios(res.data);
        setIsLoading(false);
      })
      .catch((e) => setIsLoading(false));
  };
  useEffect(() => {
    get(GET_ALL_AUCTIONS)
      .then((res) => {
        setAuctios(res.data);
        setIsLoading(false);
      })
      .catch((e) => setIsLoading(false));
  }, []);
  return (
    <div>
      <Filtering
        name={name}
        setName={setName}
        basePrice={basePrice}
        setBasePrice={setBasePrice}
        filterSubmited={filterSubmited}
      />
      {isLoading ? (
        <span className="flex h-full justify-center items-center mt-16  ">
          <CircularProgress color="inherit" />
        </span>
      ) : (
        <>
          {paginatedData().map((auction) => (
            <ActionCard
              imgSrc={
                !!auction.auction_image ? auction.auction_image : noAuctionImage
              }
              ourImage={!!auction.auction_image}
              title={auction.name}
              city={auction.location}
              companyName={auction.user.username}
              date={new Date(auction.finished_at).toLocaleDateString("fa-IR")}
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
              count={Math.ceil(auctions.length / dataOnPage)}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </div>
        </>
      )}
    </div>
  );
};
