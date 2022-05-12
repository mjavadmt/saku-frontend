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
import InputAdornment from "@mui/material/InputAdornment";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import { toast } from "react-toastify";
import { useWindowDimensions } from "pages/homePageComponents/lastMessages";
import { dateConverter } from "utils/dateConverter";

const showErrorInput = (value, basePrice) => {
  return value < basePrice;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "#7848c0",
  border: "2px solid #353131",
  backgroundColor: "black",
  color: "white",
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
};

const ChildModal = ({
  confirmPriceModal,
  setConfirmPriceModal,
  onSubmitPrice,
}) => {
  const handleClose = () => {
    setConfirmPriceModal(false);
  };

  return (
    <React.Fragment>
      <Modal
        hideBackdrop
        open={confirmPriceModal}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <div>آیا از ثبت این قیمت اطمینان دارید؟</div>
          <div className="flex justify-evenly m-4">
            <Button onClick={handleClose} color="error" variant="outlined">
              لغو
            </Button>
            <Button onClick={onSubmitPrice} color="success" variant="outlined">
              تایید
            </Button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

const setLengthOfDescription = (width) => {
  if (width < 500) return 100;
  return 220;
};

export const AuctionDetailCard = ({ auction }) => {
  const [enterPriceModal, setEnterPriceModal] = React.useState(false);
  const [valuePriceModal, setValuePriceModal] = React.useState("");
  const [onInitializedInput, setOnInitializedInput] = React.useState(true);
  const [confirmPriceModal, setConfirmPriceModal] = React.useState(false);
  const { width } = useWindowDimensions();

  const onSubmitPrice = () => {
    // do the api things and send the price to server
    toast.success("ثبت قیمت با موفقیت انجام شد");
    setValuePriceModal(0);
    setEnterPriceModal(false);
    setConfirmPriceModal(false);
  };

  return (
    <React.Fragment>
      <div
        // style={{ height: "500px" }}
        className={cx(cardClass, "grid grid-cols-12")}
      >
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
          <div
            data-tip
            data-for={`description-toolbox`}
            className="mr-2 text-justify"
          >
            {auction.description.length < 300
              ? auction.description
              : auction.description.substring(
                  0,
                  setLengthOfDescription(width)
                ) + "..."}
          </div>
          {auction.description.length > 300 && (
            <ReactTooltip
              className="opaque w-72"
              effect="solid"
              backgroundColor="white"
              textColor="#000"
              place="top"
              id={`description-toolbox`}
              scrollHide={true}
            >
              {auction.description}
            </ReactTooltip>
          )}
        </div>
        <div className="flex justify-end col-span-12 p-4">
          <Button
            className="rounded-lg submit-price"
            variant="contained"
            size="medium"
            disabled={!auction.canEnterPrice}
            onClick={() => setEnterPriceModal(true)}
          >
            ثبت قیمت
          </Button>
        </div>
      </div>
      <Modal onClose={() => setEnterPriceModal(false)} open={enterPriceModal}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            ثبت قیمت
          </Typography>
          <div className="mt-2">
            <Input
              autoFocus
              value={valuePriceModal}
              onChange={(e) => {
                setOnInitializedInput(false);
                if (e.target.value.length < 12)
                  setValuePriceModal(e.target.value);
              }}
              type="number"
              className="w-full"
              inputProps={{ maxLength: 4 }}
              error={
                !onInitializedInput &&
                showErrorInput(valuePriceModal, auction.price)
              }
              placeholder="قیمت وارد شده به تومان می‌باشد"
              startAdornment={
                <InputAdornment className="mb-1" position="start">
                  <AttachMoneyRoundedIcon color="success" />
                </InputAdornment>
              }
            />
            {!onInitializedInput &&
              showErrorInput(valuePriceModal, auction.price) && (
                <p className="font-thin text-xs text-red-600 mt-2 mr-2">
                  قیمت ثبت شده باید از قیمت پایه وارد شده بالاتر باشد
                </p>
              )}
          </div>
          <div className="flex justify-end mt-4">
            <Button
              onClick={() => {
                if (!showErrorInput(valuePriceModal, auction.price)) {
                  setConfirmPriceModal(true);
                }
              }}
              variant="contained"
              className="submit-price "
            >
              ثبت
            </Button>
          </div>
          <ChildModal
            confirmPriceModal={confirmPriceModal}
            setConfirmPriceModal={setConfirmPriceModal}
            onSubmitPrice={onSubmitPrice}
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
};
