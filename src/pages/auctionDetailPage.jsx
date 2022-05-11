import { Grid } from "@mui/material";
import { auctions } from "statics/fakeDataMyAuction";
import { AuctionDetailCard } from "components/auctionDetail/auctionDetailCard";
import { CommentBox } from "components/auctionDetail/commentBox";

const auction = {
  ...auctions[0],
  private: false,
  bestPrice: false,
  canEnterPrice: true,
  tags: ["شرکتی", "مهندسی", "کانونی"],
  location: "تهران، خیابان رجایی، کوچه ذاکری",
  userName: "محمد اجباری",
  description:
    "ین مزایده در این مکان ساعت مقرر برگزار می‌شود لطفا توجه داشته‌باشید که اعدادی که وارد می‌کنید معقول باشدین مزایده در این مکان ساعت مقرر برگزار می‌شود لطفا توجه داشته‌باشید که اعدادی که وارد می‌کنید معقول باشدین مزایده در این مکان ساعت مقرر برگزار می‌شود لطفا توجه داشته‌باشید که اعدادی که وارد می‌کنید معقول باشداین مزایده در این مکان ساعت مقرر برگزار می‌شود لطفا توجه داشته‌باشید که اعدادی که وارد می‌کنید معقول باشد",
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
