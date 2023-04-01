import { useState } from "react";
import { ActionCard } from "components/AuctionCard";
import { Filtering } from "components/Filtering";
import { useEffect } from "react";
import { GET_ALL_AUCTIONS } from "constant/apiRoutes";
import Pagination from "@mui/material/Pagination";
import { CircularProgress } from "@mui/material";
import noAuctionImage from "assets/img/no-auction-image-2.svg";
import { getAllAuctions, getFilteredAuctions } from "requests/myAuctions";

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
  const filterSubmited = async () => {
    setPage(1);
    let filteredObj = {};
    if (name !== "") filteredObj["name"] = name;
    if (basePrice !== "") filteredObj["limit"] = basePrice;
    const getAllAuctionsRes = await getFilteredAuctions(`${GET_ALL_AUCTIONS}`,{params: filteredObj});
    if(getAllAuctionsRes && getAllAuctionsRes.status === 200){
      setAuctios(getAllAuctionsRes.data)
    }
    setIsLoading(false);
  };
  useEffect(() => {
    async function fetchData(){
      const getAllAuctionsRes = await getAllAuctions({GET_ALL_AUCTIONS});
      if(getAllAuctionsRes && getAllAuctionsRes.status === 200){
        setAuctios(getAllAuctionsRes.data);
      }
      setIsLoading(false);
    }
    fetchData();
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
