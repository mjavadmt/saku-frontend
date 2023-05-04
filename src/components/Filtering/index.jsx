import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Search } from "@mui/icons-material";
import { TextField, Button, Autocomplete, Chip } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./index.css";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import { useDispatch } from "react-redux";
import { setTheName, setTheBasePrice } from "../../actions/auctions";
import { getCategories } from "utils/api/requests/createAuction";
import { GET_CATEGORIES } from "utils/constant/apiRoutes";
import top100Films from "utils/constant/FilterungTag";

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
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const getCategoriesRes = await getCategories(GET_CATEGORIES);
      if (getCategoriesRes && getCategoriesRes.status === 200) {
        setCategories(getCategoriesRes.data);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div
        className={cx(
          "bg-cardColor p-4 grid rounded-3xl md:grid-cols-4 grid-cols-1",
          {
            " md:grid-rows-1  grid-rows-2": !hasRadioBtn,
            " md:grid-rows-2  grid-rows-4": hasRadioBtn,
          }
        )}
      >
        <div className=" m-6 mb-0 ">
          <div className="mb-1"> نام :‌</div>
          <TextField
            fullWidth
            id="outlined-basic"
            value={name}
            onChange={(e) => {
              dispatch(setTheName(e.target.value));
            }}
            InputProps={{
              startAdornment: <Search className="m-2" />,
            }}
          />
        </div>

        <div className="m-6 mb-0 ">
          <div className="mb-1">پایه قیمت :‌</div>
          <TextField
            fullWidth
            id="outlined-basic"
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

        <div className=" m-6 mb-0 ">
          <div className="mb-1">توضیحات :‌</div>
          <TextField
            fullWidth
            id="outlined-basic"
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
            <div className="m-6 mb-0">
              <div className="mb-1">نوع :‌</div>
              <Select
                fullWidth
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value={1}>مزایده</MenuItem>
                <MenuItem value={2}>مناقصه</MenuItem>
                <MenuItem value={""}></MenuItem>
              </Select>
            </div>
            <div className="m-6 mb-0">
              <div className="mb-1">دسته بندی :‌</div>
              <Select
                fullWidth
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
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
                <MenuItem value={""}></MenuItem>
              </Select>
            </div>
            <div className="m-6 mb-0">
              <div className="mb-1">آفلاین/آنلاین</div>
              <Select
                fullWidth
                value={is_online}
                onChange={(e) => setIs_online(e.target.value)}
              >
                <MenuItem value={1}>آنلاین</MenuItem>
                <MenuItem value={0}>آفلاین</MenuItem>
                <MenuItem value={""}></MenuItem>
              </Select>
            </div>
            <div className="m-6 mb-0">
              <div className="mb-1">تگ های مرتبط</div>
              <Autocomplete
                fullWidth
                freeSolo
                multiple
                value={tag}
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
                  setTag(newval);
                }}
                renderInput={(params) => (
                  <TextField data-testid="tagInp" {...params} />
                )}
              />
            </div>
            <div className=" m-6 mb-0 pt-6">
              <Button
                fullWidth
                onClick={filterSubmited}
                variant="contained"
                className="w-1/6 h-14"
              >
                اعمال
              </Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </>
  );
};
