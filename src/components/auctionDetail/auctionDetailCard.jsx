import React from "react";
import { cardClass } from "constant/cardClass";
import cx from "classnames";
import {
  typeChipMaker,
  attendanceStatusChip,
  defineParticipantsColor,
} from "pages/homePageComponents/tableCellFunctions";
import "./auctionDetailCard.css";
import { defineUnit } from "utils/formatPrice";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ReactTooltip from "react-tooltip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";

const dateConverter = (date) => {
  const dateObj = new Date(date);
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  return `${hour}:${minute} , ${dateObj.toLocaleDateString("fa-IR")}`;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "#7848c0",
  border: "2px solid #000",
  backgroundColor: "black",
  color: "white",
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
};

export const AuctionDetailCard = ({ auction }) => {
  const [enterPriceModal, setEnterPriceModal] = React.useState(false);
  const handleEnterPriceModalOpen = () => setEnterPriceModal(true);
  const handleEnterPriceModalClose = () => setEnterPriceModal(false);
  return (
    <React.Fragment>
      <div className={cx(cardClass, "grid grid-cols-12")}>
        <img
          className="p-3 rounded-3xl h-52 col-span-5 md:col-span-6"
          src={auction.img}
          alt="عکس جزئیات مزایده"
        />
        <div className="p-0 m-1 col-span-7 md:col-span-6">
          <div className="flex m-3 mr-1">
            <div className="font-bold"> عنوان :‌ </div>
            <div className="mr-2">{auction.title}</div>
          </div>
          <div className="flex m-3 mr-1">
            <div className="font-bold"> نام : </div>
            <div className="mr-2">{auction.userName}</div>
          </div>
          <div className="flex m-3 mr-1">
            <div className="font-bold"> نوع : </div>
            <div className="mr-2">{typeChipMaker(auction.type)}</div>
          </div>
          <div className="flex m-3 mr-1">
            <div className="font-bold"> شرکت : </div>
            <div className="mr-2">{attendanceStatusChip(auction.private)}</div>
          </div>

          <div className="flex m-3 mr-1">
            <div className="font-bold"> شرکت‌کنندگان : </div>
            <div className="mr-2">
              {defineParticipantsColor(auction.participantsNum)}
            </div>
          </div>
        </div>
        <div className="p-3 flex col-span-12 md:col-span-6">
          <div className="font-bold"> تاریخ شروع : </div>
          <div className="mr-2">{dateConverter(auction.startDate)}</div>
        </div>
        <div className="p-3 flex col-span-12 md:col-span-6">
          <div className="font-bold"> تاریخ پایان : </div>
          <div className="mr-2">{dateConverter(auction.endDate)}</div>
        </div>
        <div className="p-3 flex col-span-12 md:col-span-6">
          <div className="font-bold">بهترین قیمت : </div>
          <div
            className={cx("mr-2", {
              "hidden-price": !auction.bestPrice,
            })}
            data-tip
            data-for={`auction-${auction.id}`}
          >
            {auction.bestPrice
              ? defineUnit(auction.bestPrice, 1)
              : "غیرقابل‌نمایش"}
          </div>
        </div>
        {!auction.bestPrice && (
          <ReactTooltip
            className="opaque"
            effect="solid"
            backgroundColor="white"
            textColor="#000"
            place="top"
            id={`auction-${auction.id}`}
          >
            غیر قابل نمایش
          </ReactTooltip>
        )}

        <div className="p-3 flex col-span-12 md:col-span-6">
          <div className="font-bold"> قیمت پایه : </div>
          <div className="mr-2">{defineUnit(auction.price, 1)}</div>
        </div>
        <div className="p-3 col-span-12 ">
          <div className="font-bold"> توضیحات : </div>
          <div className="mr-2 text-justify">{auction.description}</div>
        </div>
        <div className="flex justify-end col-span-12 p-4">
          <Button
            className="rounded-lg submit-price"
            variant="contained"
            size="medium"
            disabled={!auction.canEnterPrice}
            onClick={handleEnterPriceModalOpen}
          >
            ثبت قیمت
          </Button>
        </div>
      </div>
      <Modal onClose={handleEnterPriceModalClose} open={enterPriceModal}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            ثبت قیمت
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Input />
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
};
