import React, { useState } from "react";
import cx from "classnames";
import { Search } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./index.css";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import { useDispatch } from "react-redux";
import { setTheName, setTheBasePrice } from "../../actions/auctions";

export const Filtering = ({
  hasRadioBtn = false,
  onChangeStatus,
  onChangeType,
  status,
  setStatus,
  type,
  setType,
  category,
  setCategory,
  description,
  setDescription,
  is_online,
  setIs_online,
  tag,
  setTag,
  name,
  setName,
  basePrice,
  setBasePrice,
  filterSubmited,
}) => {
  const dispatch = useDispatch();

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
        <div className=" m-4 mb-0 ">
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="نام"
            value={name}
            onChange={(e) => {
              dispatch(setTheName(e.target.value));
            }}
            InputProps={{
              startAdornment: <Search className="m-2" />,
            }}
          />
        </div>

        <div className="m-4 mb-0 ">
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="پایه قیمت"
            value={basePrice}
            onChange={(e) => {
              if (e.target.value.length < 10)
                dispatch(setTheBasePrice(e.target.value));
            }}
            type="number"
            InputProps={{
              startAdornment: <AttachMoneyRoundedIcon className="m-2" />,
            }}
          />
        </div>

        <div className=" m-4 mb-0 ">
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="توضیحات"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            InputProps={{
              startAdornment: <Search className="m-2" />,
            }}
          />
        </div>

        {hasRadioBtn && (
          <React.Fragment>
            <div className="m-4 mb-0">
              <div className="mb-1">نوع :‌</div>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value={1}>مزایده</MenuItem>
                <MenuItem value={2}>مناقصه</MenuItem>
              </Select>
            </div>
            <div className="m-4 mb-0">
              <div className="mb-1">دسته بندی :‌</div>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value={1}>مزایده</MenuItem>
                <MenuItem value={2}>مناقصه</MenuItem>
              </Select>
            </div>
            <div className="m-4 mb-0">
              <div className="mb-1">آفلاین/آنلاین</div>
              <Select
                value={is_online}
                onChange={(e) => setIs_online(e.target.value)}
              >
                <MenuItem value={1}>آنلاین</MenuItem>
                <MenuItem value={0}>آفلاین</MenuItem>
              </Select>
            </div>
          </React.Fragment>
        )}

        <div className="flex md:col-span-2 m-3">
          <div className="grow"></div>

          <Button
            onClick={filterSubmited}
            variant="contained"
            className="w-1/6 h-10"
          >
            اعمال
          </Button>
        </div>
      </div>
    </>
  );
};
