import { ActionCard } from "components/AuctionCard";
import { Filtering } from "components/Filtering";
import { useEffect, useState } from "react";
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
      {/* <ActionCard
        imgSrc="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        title="مزایده اول"
        city="تهران"
        companyName="وزارت نیرو"
        date="1401/05/02"
        price="500,000,000"
        remainingDay="20"
        tags={["عمرانی", "فوری", "پیش پرداختی", "دولتی"]}
        id={1}
      />
      <ActionCard
        imgSrc="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        title="مزایده اول"
        city="تهران"
        companyName="وزارت نیرو"
        date="1401/05/02"
        price="500,000,000"
        remainingDay="20"
        tags={["عمرانی", "فوری", "پیش پرداختی", "دولتی"]}
        id={1}
      />
      <ActionCard
        imgSrc="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        title="مزایده اول"
        city="تهران"
        companyName="وزارت نیرو"
        date="1401/05/02"
        price="500,000,000"
        remainingDay="20"
        tags={["عمرانی", "فوری", "پیش پرداختی", "دولتی"]}
        id={1}
      />
      <ActionCard
        imgSrc="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        title="مزایده اول"
        city="تهران"
        companyName="وزارت نیرو"
        date="1401/05/02"
        price="500,000,000"
        remainingDay="20"
        tags={["عمرانی", "فوری", "پیش پرداختی", "دولتی"]}
        id={1}
      /> */}
    </div>
  );
};
