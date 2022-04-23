import { Grid } from "@mui/material";
import {
  AuctionActivity,
  LastMessages,
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

export const Splash = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <ViewFromDashboard />
        <div className="h-4" />
        <PurchasedStats />
      </Grid>
      <Grid item xs={12} md={3}>
        <InComeStats />
        <div className="h-4" />
        <AuctionViewStats />
      </Grid>
      <Grid container className="mt-4" xs={12} md={6}>
        <Grid item xs={12} md={6}>
          <SuccessfulAuctionParticipated />
          <NumberOfAuctionCreated />
        </Grid>
        <Grid item xs={12} md={6}>
          <IncomeGain />
          <UniqueProfileParticipated />
        </Grid>
        <Grid item xs={12}>
          <AuctionParticipatedTable />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <LastMessages />
      </Grid>
      <Grid item xs={12} md={4}>
        <AuctionActivity />
      </Grid>
      <Grid item xs={12} md={6}>
        <AuctionCreatedTable />
      </Grid>
      <Grid item xs={12} md={6}>
        <RevenueOnMonth />
      </Grid>
    </Grid>
  );
};
