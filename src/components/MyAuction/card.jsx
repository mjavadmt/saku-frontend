import DescriptionIcon from "@mui/icons-material/Description";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import React, { useState } from "react";
import { defineUnit } from "utils/formatPrice";
import { useNavigate } from "react-router-dom";
import { AUCTION_DETAIL_WITHOUT_SUFFIX } from "utils/constant/routes";
import "./styles.scss";
import noAuctionImage from "assets/img/no-auction-image-2.svg";
import cx from "classnames";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
// import Transition from "@mui/material/Transition";
const defineStatus = (startDate, endDate) => {
  if (new Date(startDate) > new Date() && new Date(endDate) < new Date())
    return (
      <React.Fragment>
        <div className="h-2 w-2 m-1 rounded-full bg-success shadow-slate-700" />
        <p className="text-sm">در جریان</p>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      <div className="h-2 w-2 m-1 rounded-full bg-danger" />
      <p className="text-sm">اتمام یافته</p>
    </React.Fragment>
  );
};

const defineType = (num) => {
  if (num === 1) return "مزایده";
  return "مناقصه";
};

export const Card = ({
  auction_image,
  name,
  participants_num,
  mode,
  finished_at,
  created_at,
  category,
  limit,
  token,
}) => {
    const [openAlart, setOpenAlart] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState([20, 37]);
    const [sortBy, setSortBy] = useState(10);
    const [auctionName, setAuctionName] = useState("");
    const handleChangeRadio = (event, identifier) => {
        // if (identifier === "type") onChangeType(event.target.value);
        // else onChangeStatus(event.target.value);
    };
    const handleClickOpen = (e) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
            setOpen(true);
        }
    };

    const handleClose = (e) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
            setOpen(false);
        }
    };

    const handleClickAlart = () => {
        setOpen(true);
    };

    const handleCloseAlart = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenAlart(false);
    };
    let navigate = useNavigate();
    return (
        <div>
        <div
            onClick={(e) => {
                if (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    navigate(`${AUCTION_DETAIL_WITHOUT_SUFFIX}/${token}`);
                }
            }}
            className='bg-cardColor rounded-3xl cursor-pointer my-auction-card'
        >
            <img
                className={cx("flex w-full rounded-3xl", {
                    "h-44 object-cover": auction_image,
                    "h-44 ": !auction_image,
                })}
                src={auction_image ? auction_image : noAuctionImage}
                alt='عکس مزایده'
            />

            <div className='mt-2 p-4 grid grid-cols-2 grid-rows-3'>
                <div className='flex items-center m-1'>
                    <DescriptionIcon className='m-0.5' fontSize='inherit' />
                    <p className='text-sm font-bold'>عنوان : ‌</p>
                    <p className='text-sm'>{name}</p>
                </div>
                <div className='flex items-center m-1'>
                    <PeopleOutlineRoundedIcon
                        className='m-0.5'
                        fontSize='inherit'
                    />
                    <p className='text-sm font-bold'> شرکت‌کنندگان : ‌</p>
                    <p className='text-sm'>{participants_num} نفر</p>
                </div>
                <div className='flex items-center m-1'>
                    <GavelRoundedIcon className='m-0.5' fontSize='inherit' />
                    <p className='text-sm font-bold'>نوع : ‌</p>
                    <p className='text-sm'>{defineType(mode)}</p>
                </div>
                <div className='flex items-center m-1'>
                    <DescriptionIcon className='m-0.5' fontSize='inherit' />
                    <p className='text-sm font-bold'>وضعیت : ‌</p>
                    {defineStatus(created_at, finished_at)}
                </div>
                <div className='flex items-center m-1'>
                    <CategoryRoundedIcon className='m-0.5' fontSize='inherit' />
                    <p className='text-sm font-bold'>‌دسته‌بندی : ‌</p>
                    <p className='text-sm'>{category}</p>
                </div>
                <div className='flex items-center m-1'>
                    <AttachMoneyRoundedIcon
                        className='m-0.5'
                        fontSize='inherit'
                    />
                    <p className='text-sm font-bold'>قیمت : ‌</p>
                    <p className='text-sm'>{defineUnit(limit, 1)}</p>
                </div>
            </div>
            <div>
                <Button variant='outlined' onClick={(e) => handleClickOpen(e)}>
                    ثبت نظر
                </Button>
                <Dialog
                    open={open}
                    // TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby='alert-dialog-slide-description'
                >
                    <DialogTitle>{"فرم نظرسنجی"}</DialogTitle>
                    <DialogContent>
                        <FormControl>
                            <FormLabel id='demo-row-radio-buttons-group-label'>
                                1.نسبت ارزش به هزینه در این مزایده مناقصه معقول
                                بود:
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby='demo-row-radio-buttons-group-label'
                                name='row-radio-buttons-group'
                            >
                                <FormControlLabel
                                    value='best'
                                    control={<Radio />}
                                    label='عالی'
                                />
                                <FormControlLabel
                                    value='good'
                                    control={<Radio />}
                                    label='خوب'
                                />
                                <FormControlLabel
                                    value='normal'
                                    control={<Radio />}
                                    label='متوسط'
                                />
                                <FormControlLabel
                                    value='bad'
                                    control={<Radio />}
                                    label='ضعیف'
                                />
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogContent>
                        <FormControl>
                            <FormLabel id='demo-row-radio-buttons-group-label'>
                                2.میزان در دسترس پذیری فرد مناقصه/مزایده گزار:
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby='demo-row-radio-buttons-group-label'
                                name='row-radio-buttons-group'
                            >
                                <FormControlLabel
                                    value='best'
                                    control={<Radio />}
                                    label='عالی'
                                />
                                <FormControlLabel
                                    value='good'
                                    control={<Radio />}
                                    label='خوب'
                                />
                                <FormControlLabel
                                    value='normal'
                                    control={<Radio />}
                                    label='متوسط'
                                />
                                <FormControlLabel
                                    value='bad'
                                    control={<Radio />}
                                    label='ضعیف'
                                />
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogContent>
                        <FormControl>
                            <FormLabel id='demo-row-radio-buttons-group-label'>
                                3. پکیج مزایده/مناقصه کامل و گویا بود:
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby='demo-row-radio-buttons-group-label'
                                name='row-radio-buttons-group'
                            >
                                <FormControlLabel
                                    value='best'
                                    control={<Radio />}
                                    label='عالی'
                                />
                                <FormControlLabel
                                    value='good'
                                    control={<Radio />}
                                    label='خوب'
                                />
                                <FormControlLabel
                                    value='normal'
                                    control={<Radio />}
                                    label='متوسط'
                                />
                                <FormControlLabel
                                    value='bad'
                                    control={<Radio />}
                                    label='ضعیف'
                                />
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogContent>
                        <FormControl>
                            <FormLabel id='demo-row-radio-buttons-group-label'>
                                4.زمان، مکان و تاریخ گشایش پیشنهاد مناسب بود:
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby='demo-row-radio-buttons-group-label'
                                name='row-radio-buttons-group'
                            >
                                <FormControlLabel
                                    value='best'
                                    control={<Radio />}
                                    label='عالی'
                                />
                                <FormControlLabel
                                    value='good'
                                    control={<Radio />}
                                    label='خوب'
                                />
                                <FormControlLabel
                                    value='normal'
                                    control={<Radio />}
                                    label='متوسط'
                                />
                                <FormControlLabel
                                    value='bad'
                                    control={<Radio />}
                                    label='ضعیف'
                                />
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogContent>
                        <FormControl>
                            <FormLabel id='demo-row-radio-buttons-group-label'>
                                5. نیازهای شما از طریق این مزایده/مناقصه برآورده
                                شد:
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby='demo-row-radio-buttons-group-label'
                                name='row-radio-buttons-group'
                            >
                                <FormControlLabel
                                    value='best'
                                    control={<Radio />}
                                    label='عالی'
                                />
                                <FormControlLabel
                                    value='good'
                                    control={<Radio />}
                                    label='خوب'
                                />
                                <FormControlLabel
                                    value='normal'
                                    control={<Radio />}
                                    label='متوسط'
                                />
                                <FormControlLabel
                                    value='bad'
                                    control={<Radio />}
                                    label='ضعیف'
                                />
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={(e) => handleClose(e)}
                            style={{ color: "#f06292" }}
                        >
                            لغو
                        </Button>
                        <Stack>
                            <Button
                                onClick={handleClickAlart}
                                style={{ color: "#1de9b6" }}
                            >
                                ثبت
                            </Button>
                            <Snackbar
                                open={openAlart}
                                autoHideDuration={3000}
                                onClose={handleCloseAlart}
                            >
                                <Alert
                                    onClose={handleCloseAlart}
                                    severity='success'
                                    sx={{ width: "100%" }}
                                >
                                    نظر شما با موفقیت ثبت شد.
                                </Alert>
                            </Snackbar>
                        </Stack>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
        {/* <div className="flex items-center m-1">
          <PeopleOutlineRoundedIcon className="m-0.5" fontSize="inherit" />
          <p className="text-sm font-bold"> شرکت‌کنندگان : ‌</p>
          <p className="text-sm">{participants_num} نفر</p>
        </div>
        <div className="flex items-center m-1">
          <GavelRoundedIcon className="m-0.5" fontSize="inherit" />
          <p className="text-sm font-bold">نوع : ‌</p>
          <p className="text-sm">{defineType(mode)}</p>
        </div>
        <div className="flex items-center m-1">
          <DescriptionIcon className="m-0.5" fontSize="inherit" />
          <p className="text-sm font-bold">وضعیت : ‌</p>
          {defineStatus(created_at, finished_at)}
        </div>
        <div className="flex items-center m-1">
          <CategoryRoundedIcon className="m-0.5" fontSize="inherit" />
          <p className="text-sm font-bold">‌دسته‌بندی : ‌</p>
          <p className="text-sm">{category}</p>
        </div>
        <div className="flex items-center m-1">
          <AttachMoneyRoundedIcon className="m-0.5" fontSize="inherit" />
          <p className="text-sm font-bold">قیمت : ‌</p>
          <p className="text-sm">{defineUnit(limit, 1)}</p>
        </div> */}
    
    </div>
   
    
  );
};
