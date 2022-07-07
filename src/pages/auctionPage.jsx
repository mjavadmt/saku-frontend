import { useState } from "react";
import { ActionCard } from "components/AuctionCard";
import { Filtering } from "components/Filtering";
import { useEffect } from "react";
import { get } from "utils/api";
import { GET_ALL_AUCTIONS } from "constant/apiRoutes";
export const AuctionPage = () => {
  const [auctions, setAuctios] = useState([]);
  useEffect(() => {
    get(GET_ALL_AUCTIONS).then((res) => setAuctios(res.data));
  }, []);
  return (
    <div>
      <Filtering />
      {auctions.map((auction) => (
        <ActionCard
          imgSrc="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          title={auction.name}
          city={auction.location}
          companyName={auction.user.username}
          date={new Date(auction.finished_at).toLocaleDateString("fa-IR")}
          price={auction.limit}
          remainingDay={
            new Date().getDay() - new Date(auction.finished_at).getDay()
          }
          tags={[...auction.tags.map((tag) => tag.name)]}
          id={1}
        />
      ))}

      {/* <div className="flex justify-center mt-5">
        <Pagination
          count={Math.ceil(20 / 5)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div> */}
    </div>
  );
};
