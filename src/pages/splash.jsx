import { Grid } from "@mui/material";
import {
  AuctionActivity,
  AuctionCreatedTable,
  AuctionParticipatedTable,
  RevenueOnMonth,
  IncomeGain,
  ViewFromDashboard,
  PurchasedStats,
  AuctionViewStats,
  InComeStats,
  NumberOfAuctionCreated,
  SuccessfulAuctionParticipated,
  UniqueProfileParticipated,
} from ".";
import { useEffect, useState } from "react";
import { homePageData } from "statics/homePageStats";
import randomIntFromInterval from "utils/generateRandomNumber";


const makeRandomNumberList = () => {
  let randomNums = [];
  for (let i = 0; i < 10; i++) {
    randomNums.push(randomIntFromInterval(0, 100));
  }
  return randomNums;
};

const handleEmptyList = (listObj) => {
  return listObj.length === 0 ? makeRandomNumberList() : listObj 
}

const chartHandler = (name, listObj) => {
  return [
    {
      name,
      data: listObj ? handleEmptyList(listObj) : [],
    },
  ];
};

export const Splash = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(homePageData);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <ViewFromDashboard
          list={chartHandler("میزان بازدید", data.your_colaberation_list)}
          total={data.your_colaberation_count}
        />
        <div className="h-3" />
        <PurchasedStats
          list={chartHandler("میزان هزینه", data.expense_list)}
          total={data.expense}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <InComeStats
          list={chartHandler("میزان درآمد", data.income_list)}
          total={data.income}
        />
        <div className="h-3" />
        <AuctionViewStats
          list={chartHandler("میزان مشاهده", data.others_colaberation_list)}
          total={data.others_colaberation_count}
        />
      </Grid>
      <Grid container className="mt-4" xs={12} md={6}>
        <Grid item xs={12} md={6}>
          <SuccessfulAuctionParticipated number={data.seccussfull_auction_count}/>
          <NumberOfAuctionCreated number={data.auctions_count}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <IncomeGain number={data.income}/>
          <UniqueProfileParticipated number={data.auctions_participants_num}/>
        </Grid>
        <Grid item xs={12}>
          <AuctionParticipatedTable />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <AuctionCreatedTable />
      </Grid>
      <Grid item xs={12} md={4}>
        <AuctionActivity />
      </Grid>
      <Grid item xs={12}>
        <RevenueOnMonth />
      </Grid>
    </Grid>
  );
};
