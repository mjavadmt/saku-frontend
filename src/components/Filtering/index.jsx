import React, { useState } from "react";

import { Search } from "@mui/icons-material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import top100Films from "constant/FilterungTag";
import Slider from "@mui/material/Slider";
import { formatPrice } from "utils/formatPrice";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./index.css";

export const Filtering = () => {
  const [value, setValue] = useState([20, 37]);
  const [sortBy, setSortBy] = useState("");
  return (
    <div className="bg-palette3 grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4  rounded-3xl ">
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
            <TextField {...params} placeholder="فیلتر ها" />
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
          defaultValue={10}
        >
          <MenuItem value={10}>کمترین قیمت</MenuItem>
          <MenuItem value={20}>بیشترین قیمت</MenuItem>
          <MenuItem value={30}>نزدیک ترین زمان</MenuItem>
          <MenuItem value={40}>دور ترین زمان</MenuItem>
        </Select>
      </div>
    </div>
  );
};
