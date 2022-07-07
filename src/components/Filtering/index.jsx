import React, { useState } from "react";
import cx from "classnames";
import { Search } from "@mui/icons-material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import top100Films from "constant/FilterungTag";
import Slider from "@mui/material/Slider";
import { formatPrice } from "utils/formatPrice";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./index.css";

export const Filtering = ({
  hasRadioBtn = false,
  onChangeStatus,
  onChangeType,
  status,
  setStatus,
  type,
  setType,
}) => {
  const [value, setValue] = useState([20, 37]);
  const [sortBy, setSortBy] = useState(10);
  const handleChangeRadio = (event, identifier) => {
    if (identifier === "type") onChangeType(event.target.value);
    else onChangeStatus(event.target.value);
  };

  return (
    <div
      className={cx(
        "bg-cardColor p-4 grid rounded-3xl md:grid-cols-2 grid-cols-1",
        {
          " md:grid-rows-2  grid-rows-4": !hasRadioBtn,
          " md:grid-rows-2  grid-rows-6": hasRadioBtn,
        }
      )}
    >
      <div className=" m-4 ">
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="جست و جو"
          InputProps={{
            startAdornment: <Search className="m-2" />,
          }}
        />
      </div>
      <div className=" m-4">
        <Autocomplete
          multiple
          id="tags-standard"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              className="text-white"
              {...params}
              placeholder="فیلترها"
            />
          )}
        />
      </div>
      <div className="m-4 mt-2">
        <p>بازه قیمت:</p>
        <Slider
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          valueLabelDisplay="auto"
          getAriaValueText={(w) => `${w} ریال`}
          max={1000000000}
          step={1000000}
          valueLabelFormat={(v) => `${formatPrice(v)} ریال`}
        />
      </div>
      <div className="m-4 ">
        <Select
          fullWidth
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          // defaultValue={10}
          placeholder="مرتب‌سازی"
        >
          <MenuItem value={10}>کمترین قیمت</MenuItem>
          <MenuItem value={20}>بیشترین قیمت</MenuItem>
          <MenuItem value={30}>نزدیک ترین زمان</MenuItem>
          <MenuItem value={40}>دور ترین زمان</MenuItem>
        </Select>
      </div>
      {hasRadioBtn && (
        <React.Fragment>
          <div className="m-4">
            <Select
              fullWidth
              value={type}
              onChange={(e) => setType(e.target.value)}
              defaultValue={10}
              placeholder="نوع"
            >
              <MenuItem value={10}>مزایده</MenuItem>
              <MenuItem value={20}>مناقصه</MenuItem>
              <MenuItem value={30}>همه</MenuItem>
            </Select>
          </div>
          <div className="m-4">
            <Select
              fullWidth
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              defaultValue={10}
              placeholder="نوع"
            >
              <MenuItem value={10}>همه</MenuItem>
              <MenuItem value={20}>درجریان</MenuItem>
              <MenuItem value={30}>پایان یافته</MenuItem>
            </Select>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
