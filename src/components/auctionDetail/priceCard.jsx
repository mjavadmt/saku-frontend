import { cardClass, headerClass } from "constant/cardClass";
import cx from "classnames";
import { defineUnit } from "utils/formatPrice";
import "./auctionDetailCard.css";
import ReactTooltip from "react-tooltip";
import { dateConverter } from "utils/dateConverter";
import Button from "@mui/material/Button";
import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import { toast } from "react-toastify";
import submitPrice from "assets/img/submit-price.png";
import { post } from "utils/api";
import { POST_BID } from "constant/apiRoutes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #353131",
  backgroundColor: "black",
  color: "white",
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
};

const showErrorInput = (value, basePrice, mode) => {
  if (mode === 1) return value < basePrice;
  return value > basePrice;
};


const disabledSubmitPrice = (enddate) => {
  return new Date(enddate) < new Date();
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

// const extractError = (errObj) => {
//   let keys = Object.keys(errObj);
//   return errObj[keys[0]];
// };

export const PriceCard = ({
  auctionData,
  token,
  isOnline,
  submitOnlinePrice,
  isOwner,
}) => {
  const [enterPriceModal, setEnterPriceModal] = React.useState(false);
  const [valuePriceModal, setValuePriceModal] = React.useState("");
  const [onInitializedInput, setOnInitializedInput] = React.useState(true);
  const [confirmPriceModal, setConfirmPriceModal] = React.useState(false);
  const onSubmitPrice = () => {
    // do the api things and send the price to server
    if (isOnline) {
      submitOnlinePrice({ price: valuePriceModal });
      setConfirmPriceModal(false);
      setEnterPriceModal(false);
      setValuePriceModal(0);
    } else {
      post(`${POST_BID}/${token}`, {
        price: valuePriceModal,
        time: new Date().toISOString(),
        user: localStorage.getItem("userId"),
        auction: 0,
      })
        .then(() => {
          toast.success("ثبت قیمت با موفقیت انجام شد");
          setValuePriceModal(0);
          setEnterPriceModal(false);
          setConfirmPriceModal(false);
        })
        .catch((e) => {
          console.log(e.response.data);
          toast.error("قیمت‌های بهتر برای این مزایده وجود دارد");
        });
    }
  };
  return (
    <React.Fragment>
      <div className={cx(cardClass, "md:h-97 h-fit")}>
        <div className={headerClass}>ثبت قیمت</div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 flex justify-center">
            <img
              className=" rounded-2xl p-3 h-56 "
              alt="submit-price"
              src={submitPrice}
            />
          </div>
          <div className="flex col-span-12 md:col-span-6 p-3">
            <div className="font-bold">بهترین قیمت : </div>
            <div
              className={cx("mr-1", {
                "hidden-price":
                  !!auctionData.best_bid && !auctionData.best_bid.price,
              })}
              data-tip
              data-for={`price-auction-${auctionData.id}`}
            >
              {!!auctionData.show_best_bid && auctionData.show_best_bid
                ? defineUnit(auctionData.best_bid.price, 1)
                : "غیرقابل‌نمایش"}
            </div>
          </div>
          {!!auctionData.best_bid && !auctionData.best_bid.price && (
            <ReactTooltip
              className="opaque"
              effect="solid"
              backgroundColor="white"
              textColor="#000"
              place="top"
              id={`price-auction-${auctionData.id}`}
            >
              غیر قابل نمایش
            </ReactTooltip>
          )}
          <div className="p-3 flex col-span-12 md:col-span-6">
            <div className="font-bold"> تاریخ پایان : </div>
            <div className="mr-1">{dateConverter(auctionData.finished_at)}</div>
          </div>
        </div>
        <div className="flex justify-center p-3">
          <Button
            className="rounded-lg submit-price w-2/3"
            variant="contained"
            size="medium"
            disabled={disabledSubmitPrice(auctionData.finished_at) || isOwner}
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
                if (e.target.value.length < 10)
                  setValuePriceModal(e.target.value);
              }}
              type="number"
              className="w-full"
              inputProps={{ maxLength: 4 }}
              error={
                !onInitializedInput &&
                showErrorInput(
                  valuePriceModal,
                  auctionData.limit,
                  auctionData.mode
                )
              }
              placeholder="قیمت وارد شده به تومان می‌باشد"
              startAdornment={
                <InputAdornment className="mb-1" position="start">
                  <AttachMoneyRoundedIcon color="success" />
                </InputAdornment>
              }
            />
            {!onInitializedInput &&
              showErrorInput(
                valuePriceModal,
                auctionData.limit,
                auctionData.mode
              ) &&
              (auctionData.mode === 1 ? (
                <p className="font-thin text-xs text-red-600 mt-2 mr-2">
                  قیمت ثبت شده باید از قیمت پایه وارد شده بالاتر باشد
                </p>
              ) : (
                <p className="font-thin text-xs text-red-600 mt-2 mr-2">
                  قیمت ثبت شده باید از قیمت پایه وارد شده پایین‌تر باشد
                </p>
              ))}
          </div>
          <div className="flex justify-end mt-4">
            <Button
              onClick={() => {
                if (!showErrorInput(valuePriceModal, auctionData.limit)) {
                  setConfirmPriceModal(true);
                }
              }}
              variant="contained"
              className="submit-price "
              disabled={showErrorInput(valuePriceModal, auctionData.limit)}
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
