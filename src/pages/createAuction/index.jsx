import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import { FcAddImage, FcInspection } from "react-icons/fc";
import OutlinedInput from "@mui/material/OutlinedInput";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import top100Films from "utils/constant/FilterungTag";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FcInfo, FcCalendar } from "react-icons/fc";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import InputAdornment from "@mui/material/InputAdornment";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import { useEffect } from "react";
import { GET_CATEGORIES } from "../../utils/constant/apiRoutes";
import { POST_AUCTION } from "utils/constant/apiRoutes";
import { toast } from "react-toastify";
import { toUsDate } from "utils/dateConverter";
import {
  addAuction,
  getCategories,
  updateAuction,
} from "utils/api/requests/createAuction";

export const CreateAuction = ({ inTestEnvierment = false }) => {
  const [auctionType, setAuctionType] = useState("");
  const [finishDate, setFinishDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [isOpenTwo, setOpenTwo] = useState(false);
  const [auctionValue, setAuctionValue] = useState({});
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [img, setImg] = useState();
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploadImg, setIsUploadImg] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);
  const fileRef = useRef();
  const handleSubmit = async () => {
    setIsLoading(true);
    const addAuctionRes = await addAuction(POST_AUCTION, {
      auctionValue,
      user: localStorage.getItem("userId"),
    });
    if (addAuctionRes && addAuctionRes.status === 200) {
      toast.success("با موفقیت انجام شد");
      setIsLoading(false);
      setIsUploadImg(false);
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      setAuctionValue({});
      setAuctionType("");
      setCategory("");
      setFinishDate(null);
      setStartDate(null);
      setDescription("");
      setTags([]);
      let form_data = new FormData();
      form_data.append("auction_image", img);
      await updateAuction(
        `${POST_AUCTION}/${addAuctionRes.data.token}`,
        form_data
      );
    } else {
      setIsLoading(false);
    }
  };
  const uploadFile = (event) => {
    setIsUploadImg(true);
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImgUrl(URL.createObjectURL(img));
      setImg(img);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const getCategoriesRes = await getCategories(GET_CATEGORIES);
      if (getCategoriesRes && getCategoriesRes.status === 200) {
        setCategories(getCategoriesRes.data);
      }
    }
    if (!inTestEnvierment) fetchData();
  }, [inTestEnvierment]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "black",
    borderRadius: "25px",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const renderStartCustomInput = ({ ref }) => (
    <Box
      className="col-span-2 md:ml-24 "
      sx={{ display: "flex", alignItems: "flex-end" }}
    >
      <OutlinedInput
        ref={ref}
        fullWidth
        value={
          !!startDate
            ? `${startDate.year}/${startDate.month}/${startDate.day}`
            : ""
        }
        endAdornment={
          <InputAdornment position="end">
            <FcCalendar size={24} />
          </InputAdornment>
        }
        id="input-with-sx"
        variant="standard"
      />
    </Box>
  );
  const renderEndCustomInput = ({ ref }) => (
    <Box
      className="col-span-2 md:ml-24"
      sx={{ display: "flex", alignItems: "flex-end" }}
    >
      <OutlinedInput
        ref={ref}
        fullWidth
        value={
          !!finishDate
            ? `${finishDate.year}/${finishDate.month}/${finishDate.day}`
            : ""
        }
        inputProps={{
          "data-testid": "startDate",
        }}
        endAdornment={
          <InputAdornment position="end">
            <FcCalendar size={24} />
          </InputAdornment>
        }
        id="input-with-sx"
        variant="standard"
      />
    </Box>
  );
  const changeDIR = (value) => {
    if (value && value[0].match(/[a-z]/i)) {
      return "ltr";
    }
    return "rtl";
  };
  const handleData = (e) => {
    setAuctionValue({ ...auctionValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex justify-center">
      <div className="mt-12 bg-cardColor rounded-3xl w-11/12">
        <div className="flex justify-center mt-10">
          <FcInspection data-testid="icon" size={150} />
        </div>

        <div className="mt-5 mb-10 grid md:grid-cols-8 gap-8">
          <div className="mt-5 flex justify-center">
            <p>نوع:</p>
          </div>
          <Box
            className="col-span-7 md:ml-24 px-5"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Select
              fullWidth
              value={auctionValue.mode}
              name="mode"
              onChange={(e) =>
                setAuctionValue({
                  ...auctionValue,
                  mode: e.target.value,
                })
              }
              displayEmpty
              inputProps={{
                "aria-label": "Without label",
                "data-testid": "select",
              }}
            >
              <MenuItem data-testid="select-option" value={1}>
                مزایده
              </MenuItem>
              <MenuItem data-testid="select-option" value={2}>
                مناقصه
              </MenuItem>
            </Select>
          </Box>

          <div className="mt-5 flex justify-center">
            <p>نام:</p>
          </div>
          <Box
            className="col-span-7 md:ml-24 px-5"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <OutlinedInput
              style={{
                direction: changeDIR(auctionValue["name"]),
              }}
              fullWidth
              id="input-with-sx"
              name="name"
              value={auctionValue.name}
              onChange={handleData}
              variant="standard"
              inputProps={{
                "data-testid": "nameInp",
              }}
            />
          </Box>

          <div className="mt-5 flex justify-center">
            <p>دسته بندی:</p>
          </div>
          <Box
            className="col-span-7 md:ml-24 px-5"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Select
              fullWidth
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setAuctionValue({
                  ...auctionValue,
                  category: e.target.value,
                });
              }}
              displayEmpty
              inputProps={{
                "aria-label": "Without label",
                "data-testid": "CatgorySelect",
              }}
            >
              {categories.map((cat) => (
                <MenuItem value={cat.name}>{cat.name}</MenuItem>
              ))}
            </Select>
          </Box>

          <div className="mt-5 flex justify-center gap-2">
            <FcInfo
              data-testid="modalOpen"
              onClick={handleOpen}
              color=""
              size={24}
            />
            <p>نوع:</p>
          </div>
          <Box
            className="col-span-7  md:ml-24 px-5"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Select
              fullWidth
              value={auctionType}
              onChange={(e) => {
                setAuctionType(e.target.value);
                setAuctionValue({
                  ...auctionValue,
                  is_online: e.target.value !== 10,
                });
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              defaultValue={10}
            >
              <MenuItem value={10}>آفلاین</MenuItem>
              <MenuItem value={20}>آنلاین</MenuItem>
              {/* <MenuItem value={30}>به‌روز‌رسانی دلخواه</MenuItem> */}
            </Select>
          </Box>

          <div className="mt-5 flex justify-center gap-2">
            <FcInfo
              data-testid="2modal"
              onClick={handleOpenTwo}
              color=""
              size={24}
            />
            <p>قیمت پایه:</p>
          </div>
          <Box
            className="col-span-7 md:ml-24 px-5"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <OutlinedInput
              fullWidth
              endAdornment={
                <InputAdornment position="start">تومان</InputAdornment>
              }
              style={{
                direction: "ltr",
              }}
              id="input-with-sx"
              variant="standard"
              value={auctionValue.limit}
              name="limit"
              onChange={handleData}
              inputProps={{
                "data-testid": "PriceInp",
              }}
            />
          </Box>
          <div className="mt-5 flex justify-center">
            <p>تاریخ شروع:</p>
          </div>
          <div className="w-full col-span-7 md:ml-24 px-5">
            <DatePicker
              wrapperClassName="w-full"
              value={startDate}
              onChange={(e) => {
                setStartDate(e);
                var x = toUsDate(e.year, e.month, e.day);
                setAuctionValue({
                  ...auctionValue,
                  created_at: new Date(x[0], x[1], x[2]).toISOString(),
                });
              }}
              renderInput={renderStartCustomInput} // render a custom input
              locale="fa"
              shouldHighlightWeekends
            />
          </div>
          <div className="mt-5 flex justify-center">
            <p>مهلت ارسال:</p>
          </div>
          <div className="w-full col-span-7 md:ml-24 px-5">
            <DatePicker
              wrapperClassName="w-full"
              value={finishDate}
              onChange={(e) => {
                setFinishDate(e);
                var x = toUsDate(e.year, e.month, e.day);
                setAuctionValue({
                  ...auctionValue,
                  finished_at: new Date(x[0], x[1], x[2]).toISOString(),
                });
              }}
              renderInput={renderEndCustomInput} // render a custom input
              locale="fa"
              shouldHighlightWeekends
            />
          </div>

          <div className="mt-5 flex justify-center">
            <p>تگ های مرتبط:</p>
          </div>
          <Box
            className="col-span-7 md:ml-24 px-5"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Autocomplete
              freeSolo
              fullWidth
              multiple
              value={tags}
              id="tags-standard"
              options={top100Films.map((option) => option.title)}
              renderTags={(value, getTagProps) => {
                return value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ));
              }}
              onChange={(e, newval) => {
                setAuctionValue({
                  ...auctionValue,
                  tags: newval.toString(),
                });
                setTags(newval);
              }}
              renderInput={(params) => (
                <TextField
                  data-testid="tagInp"
                  {...params}
                  placeholder="فیلتر ها"
                />
              )}
            />
          </Box>
          <div className="mt-5 flex justify-center">
            <p>تصویر:</p>
          </div>
          <div
            role="button"
            onClick={() => fileRef.current.click()}
            className="w-52 flex justify-center items-end col-span-7 border mr-4 "
          >
            <input type="file" onChange={uploadFile} hidden ref={fileRef} />
            {!!imgUrl ? (
              <img className="w-32 h-32 p-2  flex " src={imgUrl} alt="img" />
            ) : (
              <FcAddImage className="w-32 h-32 p-2  flex " />
            )}
          </div>
          <div className="mt-5 flex justify-center">
            <p>توضیحات:</p>
          </div>
          <Box
            className="col-span-7 md:ml-24 px-5"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <OutlinedInput
              style={{
                direction: changeDIR(description),
              }}
              fullWidth
              multiline
              id="input-with-sx"
              name="description"
              value={description}
              onChange={(e) => {
                handleData(e);
                setDescription(e.target.value);
              }}
              variant="standard"
            />
          </Box>
        </div>

        <div className="flex justify-center mb-5">
          <button
            onClick={handleSubmit}
            className="bg-gray-700 py-4 w-1/2 rounded-3xl "
            disabled={
              tags.length === 0 ||
              auctionType === "" ||
              category === "" ||
              !auctionValue.name ||
              !auctionValue.limit ||
              !finishDate ||
              !startDate ||
              !auctionValue.description
            }
            data-testid="subBtn"
          >
            ثبت درخواست
          </button>
        </div>
      </div>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={isOpen}
        onClose={handleClose}
      >
        <Box className="md:w-96 w-full" sx={style}>
          <Typography
            className="text-white"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            انواع مزایده
          </Typography>
          <Typography
            className="text-white"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <ul data-testid="modalContent">
              <li className="flex gap-3 justify-between">
                <span className="font-semibold text-sky-400/100 text-xl">
                  افلاین:
                </span>
                قیمت ها برای کسانی که می‌خواهند قیمت ثبت کنند تا آخر تازیخ ثبت
                قیمت پنهان است و در آخر برنده و مبلغ آن مشخص می‌شود.
              </li>
              <li className="flex gap-3 justify-between">
                <span className="font-semibold text-sky-400/100 text-xl">
                  انلاین:
                </span>
                قیمت ها برای همه قابل نمایش است و در هر لحظه قیمت ها تغییر خواهد
                کرد.
              </li>
            </ul>
          </Typography>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={isOpenTwo}
        onClose={handleCloseTwo}
      >
        <Box className="md:w-96 w-full" sx={style}>
          <Typography
            className="text-white"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            نکات
          </Typography>
          <Typography
            className="text-white"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <ul data-testid="modalContent2">
              <li className=" gap-3 justify-between">
                <span className="flex font-semibold text-sky-400/100 text-xl">
                  نکته اول:
                </span>
                در مناقصه ها در حالت آفلاین میبایست از این قیمت پایین تر باشد.
              </li>
              <li className=" gap-3 justify-between">
                <span className="flex font-semibold text-sky-400/100 text-xl">
                  نکته دوم:
                </span>
                در مزایده ها در حالت آفلاین میبایست از این قیمت بالاتر باشد.
              </li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
