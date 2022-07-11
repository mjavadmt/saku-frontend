import { useState } from "react";
import { ActionCard } from "components/AuctionCard";
import { Filtering } from "components/Filtering";
import { useEffect } from "react";
import { get } from "utils/api";
import { GET_ALL_AUCTIONS } from "constant/apiRoutes";
import Pagination from "@mui/material/Pagination";
export const AuctionPage = () => {
  const [auctions, setAuctios] = useState([]);
  const [page, setPage] = useState(1);
  const dataOnPage = 5;
  const handleChange = (event, value) => {
    setPage(value);
  };
  const paginatedData = () => {
    let currentItem = (page - 1) * dataOnPage;
    return auctions.slice(currentItem, currentItem + dataOnPage);
  };
  useEffect(() => {
    get(GET_ALL_AUCTIONS).then((res) => setAuctios(res.data));
  }, []);
  return (
    <div>
      <Filtering />
      {paginatedData().map((auction) => (
        <ActionCard
          imgSrc="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          title={auction.name}
          city={auction.location}
          companyName={auction.user.username}
          date={new Date(auction.finished_at).toLocaleDateString("fa-IR")}
          price={auction.limit}
          mode={auction.mode}
          isOnline={auction.is_online}
          remainingDay={Math.ceil(
            (new Date(auction.finished_at).getTime() - new Date().getTime()) /
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
    </div>
  );
};
