import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Search } from "@mui/icons-material";
//import top100Films from "constant/FilterungTag";
import Slider from "@mui/material/Slider";
import { formatPrice } from "utils/formatPrice";
import { TextField, Button, Autocomplete, Chip } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./index.css";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
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
import MuiAlert from "@mui/material/Alert";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export const Filtering = ({
    hasRadioBtn = false,
    onChangeStatus,
    onChangeType,
    status,
    setStatus,
    type,
    setType,
    name,
    setName,
    basePrice,
    setBasePrice,
    filterSubmited,
}) => {
    const [openAlart, setOpenAlart] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState([20, 37]);
    const [sortBy, setSortBy] = useState(10);
    const [auctionName, setAuctionName] = useState("");
    const handleChangeRadio = (event, identifier) => {
        if (identifier === "type") onChangeType(event.target.value);
        else onChangeStatus(event.target.value);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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

    return (
        <>
            <div
                className={cx(
                    "bg-cardColor p-4 grid rounded-3xl md:grid-cols-2 grid-cols-1",
                    {
                        " md:grid-rows-1  grid-rows-2": !hasRadioBtn,
                        " md:grid-rows-2  grid-rows-4": hasRadioBtn,
                    }
                )}
            >
                <div className=' m-4 mb-0 '>
                    <TextField
                        fullWidth
                        id='outlined-basic'
                        placeholder='جست و جو'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputProps={{
                            startAdornment: <Search className='m-2' />,
                        }}
                    />
                </div>

                <div className='m-4 mb-0 '>
                    <TextField
                        fullWidth
                        id='outlined-basic'
                        placeholder='پایه قیمت'
                        value={basePrice}
                        onChange={(e) => {
                            if (e.target.value.length < 10)
                                setBasePrice(e.target.value);
                        }}
                        type='number'
                        InputProps={{
                            startAdornment: (
                                <AttachMoneyRoundedIcon className='m-2' />
                            ),
                        }}
                    />
                </div>
                {hasRadioBtn && (
                    <React.Fragment>
                        <div className='m-4 mb-0'>
                            <div className='mb-1'>نوع :‌</div>
                            <Select
                                fullWidth
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <MenuItem value={1}>مزایده</MenuItem>
                                <MenuItem value={2}>مناقصه</MenuItem>
                            </Select>
                        </div>
                        <div className='m-4 mb-0'>
                            <div className='mb-1'>وضعیت :‌</div>
                            <Select
                                fullWidth
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                defaultValue={10}
                                placeholder='نوع'
                            >
                                <MenuItem value={false}>درجریان</MenuItem>
                                <MenuItem value={true}>پایان یافته</MenuItem>
                            </Select>
                        </div>
                    </React.Fragment>
                )}

                <div className='flex md:col-span-2 m-3'>
                    <div className='grow'></div>

                    <Button
                        onClick={filterSubmited}
                        variant='contained'
                        className='w-1/6 h-10'
                    >
                        اعمال
                    </Button>
                 
                </div>
            </div>
        </>
    );
};
