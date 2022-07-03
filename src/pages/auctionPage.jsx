import { useState } from "react";
import { ActionCard } from "components/AuctionCard";
import { Filtering } from "components/Filtering";
import Pagination from "@mui/material/Pagination";

export const AuctionPage = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <Filtering />
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
      <div className="flex justify-center mt-5">
        <Pagination
          count={Math.ceil(20 / 5)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </div>
  );
};
