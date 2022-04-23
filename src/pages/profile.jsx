import React from "react";

import {
  Box,
  Button,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { GoLocation } from "react-icons/go";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import "components/Filtering/index.css";
import { GrEdit } from "react-icons/gr";
export const Profile = () => {
  return (
    <div className="inline">
      <div className="mt-8 bg-cardColor rounded-3xl pt-8 px-6 pb-4 lg:w-2/5 md:w-1/2 ">
        <div className=" grid grid-rows-2 grid-cols-2 gap-2">
          <div className="row-span-2">
            <img
              alt="Profile"
              className="rounded-3xl  "
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
            />
            <GrEdit style={{ marginTop: -25 }} size={24} />
          </div>
          <div className="">
            <div>
              <b className="text-xl"> جعفر کاظمی</b>
            </div>

            <div className="flex gap-3">
              <Chip color="secondary" label="حقیقی" />

              <GoLocation size={20} />
              <p>تهران</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap ">
            <Rating
              name="half-rating-read"
              defaultValue={2}
              precision={1}
              readOnly
            />
            <b className="text-xl">2.5</b>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-cardColor rounded-3xl ">
        <form autoComplete="off" noValidate>
          <div>
            <CardHeader
              subheader="در صورت نیاز میتوانید موارد ذیل را اصلاح نمایید."
              title="اطلاعات شخصی"
            />
            <Divider />
            <div className="p-6">
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <small>نام‌ونام‌خانوادگی/نام‌شرکت:</small>
                  <TextField
                    fullWidth
                    // helperText="Please specify the first name"
                    name="firstName"
                    // onChange={handleChange}
                    required
                    // value={values.firstName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <small>نوع شخصیت:</small>
                  <Select
                    fullWidth
                    // value={sortBy}
                    // onChange={(e) => setSortBy(e.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    defaultValue={10}
                  >
                    <MenuItem value={10}>حقیقی</MenuItem>
                    <MenuItem value={20}>حقوقی</MenuItem>
                  </Select>
                </Grid>
                <Grid item md={6} xs={12}>
                  <small>کد/شناسه‌ملی:</small>
                  <TextField
                    fullWidth
                    name="lastName"
                    // onChange={handleChange}
                    required
                    // value={values.lastName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <small>تلفن همراه:</small>

                  <TextField
                    fullWidth
                    name="phone"
                    // onChange={handleChange}
                    type="text"
                    // value={values.phone}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <small>استان:</small>
                  <TextField
                    fullWidth
                    name="country"
                    // onChange={handleChange}
                    required
                    // value={values.country}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <small>شهر:</small>
                  <TextField
                    fullWidth
                    name="country"
                    // onChange={handleChange}
                    required
                    // value={values.country}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <small>ایمیل:</small>
                  <TextField
                    fullWidth
                    name="country"
                    // onChange={handleChange}
                    required
                    // value={values.country}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <small>آدرس:</small>
                  <TextField
                    fullWidth
                    name="country"
                    multiline
                    // onChange={handleChange}
                    required
                    // value={values.country}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </div>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 2,
              }}
            >
              <Button color="primary" variant="contained">
                ثبت تغییرات
              </Button>
            </Box>
          </div>
        </form>
      </div>
    </div>
  );
};
