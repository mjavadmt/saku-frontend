import React, { useState } from "react";
import Box from "@mui/material/Box";
import { FcInspection } from "react-icons/fc";
import OutlinedInput from "@mui/material/OutlinedInput";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import top100Films from "constant/FilterungTag";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FcInfo, FcCalendar } from "react-icons/fc";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import InputAdornment from "@mui/material/InputAdornment";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

export const CreateAuction = () => {
  const [sortBy, setSortBy] = useState("");
  const [auctionType, setAuctionType] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [isOpen , setOpen]= useState(false);
  const [isOpenTwo , setOpenTwo]= useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'black',
    borderRadius:'25px',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const renderCustomInput = ({ ref }) => (
    <Box
      className="col-span-2 ml-24"
      sx={{ display: "flex", alignItems: "flex-end" }}
    >
      <OutlinedInput
        ref={ref}
        fullWidth
        value={
          !!selectedDay
            ? `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`
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
  return (
    <div className="flex justify-center">
      <div className="mt-12 bg-cardColor rounded-3xl w-11/12">
        <div className="flex justify-center mt-10">
          <FcInspection  size={150} />
        </div>

        <div className="mt-5 mb-10 grid grid-cols-3 gap-8">
          <div className="mt-5 flex justify-center">
            <p>نوع:</p>
          </div>
          <Box
            className="col-span-2 ml-24"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Select
              fullWidth
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              defaultValue={10}
            >
              <MenuItem value={10}>مزایده</MenuItem>
              <MenuItem value={20}>مناقصه</MenuItem>
            </Select>
          </Box>

          <div className="mt-5 flex justify-center">
            <p>نام:</p>
          </div>
          <Box
            className="col-span-2 ml-24"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <OutlinedInput fullWidth id="input-with-sx" variant="standard" />
          </Box>

          <div className="mt-5 flex justify-center">
            <p>دسته بندی:</p>
          </div>
          <Box
            className="col-span-2 ml-24"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <OutlinedInput fullWidth id="input-with-sx" variant="standard" />
          </Box>

          <div className="mt-5 flex justify-center gap-2">
            <FcInfo onClick={handleOpen} color="" size={24} />
            <p>نوع:</p>
          </div>
          <Box
            className="col-span-2 ml-24"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Select
              fullWidth
              value={auctionType}
              onChange={(e) => setAuctionType(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              defaultValue={10}
            >
              <MenuItem value={10}>آفلاین</MenuItem>
              <MenuItem value={20}>آنلاین</MenuItem>
              <MenuItem value={30}>به‌روز‌رسانی دلخواه</MenuItem>
            </Select>
          </Box>

          <div className="mt-5 flex justify-center gap-2">
            <FcInfo onClick={handleOpenTwo} color="" size={24} />
            <p>قیمت پایه:</p>
          </div>
          <Box
            className="col-span-2 ml-24"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <OutlinedInput
              fullWidth
              endAdornment={
                <InputAdornment position="end">تومان</InputAdornment>
              }
              id="input-with-sx"
              variant="standard"
            />
          </Box>

          <div className="mt-5 flex justify-center">
            <p>مهلت ارسال:</p>
          </div>
          <div className="w-full col-span-2 ml-24">
            <DatePicker
              wrapperClassName="w-full"
              value={selectedDay}
              onChange={setSelectedDay}
              renderInput={renderCustomInput} // render a custom input
              locale="fa"
              shouldHighlightWeekends
            />
          </div>

          <div className="mt-5 flex justify-center">
            <p>تگ های مرتبط:</p>
          </div>
          <Box
            className="col-span-2 ml-24"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Autocomplete
              fullWidth
              multiple
              id="tags-standard"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} placeholder="فیلتر ها" />
              )}
            />
          </Box>
        </div>
        <div className="flex justify-center mb-5">
          <button className="bg-gray-700 py-4 w-1/2 rounded-3xl ">
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
        <Box sx= {style}>
          <Typography className="text-white" id="modal-modal-title" variant="h6" component="h2">
                انواع مزایده
          </Typography>
          <Typography className="text-white" id="modal-modal-description" sx={{ mt: 2 }}>
            <ul>
              <li className="flex gap-3 justify-between">
              <span className="font-semibold text-sky-400/100 text-xl"> افلاین: </span> 
                قیمت ها برای کسانی که می‌خواهند قیمت ثبت کنند تا آخر تازیخ ثبت قیمت پنهان است و در آخر برنده و مبلغ آن مشخص می‌شود.
              </li>
              <li className="flex gap-3 justify-between">
              <span className="font-semibold text-sky-400/100 text-xl"> انلاین: </span>
                قیمت ها برای همه قابل نمایش است و در هر لحظه قیمت ها تغییر خواهد کرد.
              </li>
              {/* <li className="flex gap-3 justify-between">
              <span className="font-semibold text-sky-400/100 text-xl"> آپدیت زمان دار:</span>
                قیمت و مبلغ پیشنهادی در زمان های مشخص شده آپدیت می‌شوند.
              </li> */}
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
        <Box sx= {style}>
          <Typography className="text-white" id="modal-modal-title" variant="h6" component="h2">
                نکات
          </Typography>
          <Typography className="text-white" id="modal-modal-description" sx={{ mt: 2 }}>
            <ul>
              <li className=" gap-3 justify-between">
              <span className="flex font-semibold text-sky-400/100 text-xl"> نکته اول: </span> 
                در مناقصه ها در حالت آفلاین میبایست از این قیمت پایین تر باشد.
              </li>
              <li className=" gap-3 justify-between">
              <span className="flex font-semibold text-sky-400/100 text-xl"> نکته دوم: </span>
            در مزایده ها در حالت آفلاین میبایست از این قیمت بالاتر باشد.
              </li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
