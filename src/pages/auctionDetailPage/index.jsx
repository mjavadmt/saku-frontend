import { Grid } from "@mui/material";
import { auctions } from "statics/fakeDataMyAuction";
import { AuctionDetailCard } from "components/auctionDetail/auctionDetailCard";
import { CommentBox } from "components/auctionDetail/commentBox";
import { PriceCard } from "components/auctionDetail/priceCard";
import { TableLog } from "components/auctionDetail/tableLog";
import { EnteredPrices } from "components/auctionDetail/enteredPrices";
import { PopUpModal } from "components/auctionDetail/popUpModal";
import { CurrentWinner } from "components/auctionDetail/currentWinnerCard";
import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { get } from "utils/api/api";
import { GET_ALL_AUCTIONS } from "constant/apiRoutes";
import useWebSocket from "react-use-websocket";



export const AuctionDetialPage = () => {
  const [popUpModal, setPopUpModal] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [auctionData, setAuctionData] = useState({});
  const { token } = useParams();
  const [socketUrl, setSocketUrl] = useState(
    `ws://188.121.113.13:8888/auction/${token}/${localStorage.getItem(
      "access"
    )}`
  );

  const [bidHistory, setBidHistory] = useState([]);

  const { sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    setIsLoading(true);
    get(`/bid/${token}`)
      .then((res) => {
        setBidHistory(res.data.reverse());
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
    get(`${GET_ALL_AUCTIONS}${token}`).then((res) => {
      setAuctionData(res.data);
      setIsOnline(res.data.is_online);
      if (res.data.user.id == localStorage.getItem("userId")) {
        setIsOwner(true);
      }
    });
    if (lastJsonMessage !== null) {
      console.log(lastJsonMessage);
      setBidHistory([
        {
          price: lastJsonMessage.price,
          user: localStorage.getItem("userId"),
          time: new Date().toISOString(),
        },
        ...bidHistory,
      ]);
    }
  }, [token, lastJsonMessage]);
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12} md={7}>
          <AuctionDetailCard auctionData={auctionData} />
        </Grid>
        <Grid item xs={12} md={5}>
          <PriceCard
            token={token}
            auctionData={auctionData}
            isOnline={isOnline}
            isOwner={isOwner}
            submitOnlinePrice={sendJsonMessage}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          {!isOwner ? (
            <EnteredPrices token={token} />
          ) : (
            <CurrentWinner bestBidUser={auctionData.best_bid} />
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <TableLog
            bidHistory={bidHistory}
            isLoading={isLoading}
            isOwner={isOwner}
            isOnline={isOnline}
          />
        </Grid>
        <Grid item xs={12}>
          <CommentBox token={token} />
        </Grid>
      </Grid>
      <PopUpModal
        handleClose={setPopUpModal}
        isOpen={popUpModal}
        type={isOnline}
      />
    </React.Fragment>
  );
};
