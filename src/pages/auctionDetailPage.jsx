import { Grid } from "@mui/material";
import { auctions } from "statics/fakeDataMyAuction";
import { AuctionDetailCard } from "components/auctionDetail/auctionDetailCard";
import { CommentBox } from "components/auctionDetail/commentBox";

const auction = {
  ...auctions[0],
  private: false,
  bestPrice: false,
  tags: ["شرکتی", "مهندسی", "کانونی"],
  location: "تهران، خیابان رجایی، کوچه ذاکری",
  userName: "محمد اجباری",
};

export const AuctionDetialPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <AuctionDetailCard auction={auction} />
      </Grid>
      <Grid item xs={12} md={6}>
        <CommentBox />
      </Grid>
    </Grid>
  );
};
