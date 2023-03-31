import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AuctionType from "assets/img/auction-type.png";

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

const handlerContent = {
  1: [
    `
  قیمت ها برای کسانی که می‌خواهند قیمت ثبت کنند تا آخر تاریخ ثبت قیمت پنهان
  است و در آخر برنده و مبلغ آن مشخص می‌شود.
`,
    "آفلاین",
  ],
  2: [
    `قیمت ها برای همه قابل نمایش است و در هر لحظه قیمت ها تغییر خواهد
    کرد.`,
    "آنلاین",
  ],
};

const handleModalContent = (type) => {
  return (
    <li className="flex gap-3 justify-between">
      <span className="font-semibold text-sky-400/100 text-xl">
        {type ? handlerContent[2][1]:handlerContent[1][1]}
      </span>
      {type ? handlerContent[2][0]:handlerContent[1][0]}
    </li>
  );
};

export const PopUpModal = ({ isOpen, handleClose, type }) => {
  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={isOpen}
      onClose={() => handleClose(false)}
    >
      <Box sx={style}>
        <div className="w-full flex justify-center">
          <img
            className=" rounded-2xl p-3 h-60 "
            alt="submit-price"
            src={AuctionType}
          />
        </div>
        <Typography
          className="text-white"
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          نوع مزایده
        </Typography>
        <Typography
          className="text-white"
          id="modal-modal-description"
          sx={{ mt: 2 }}
        >
          <ul>{handleModalContent(type)}</ul>
        </Typography>
      </Box>
    </Modal>
  );
};
