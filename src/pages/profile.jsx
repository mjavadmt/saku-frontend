import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { CircularProgress } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { GoLocation } from "react-icons/go";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import "components/Filtering/index.css";
import { GrEdit } from "react-icons/gr";
import { get, put } from "utils/api";
import { PRIFILE } from "constant/apiRoutes";
import { provinceList } from "constant/iranProvince";
import { cityList } from "constant/iranCities";
import { toast } from "react-toastify";

export const Profile = () => {
  const [userData, setUserData] = useState({});
  const [provinceId, setProvinceId] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e, val) => {
    let data = { ...userData };
    data[e.target.name] = e.target.value;
    if (e.target.name === "province") {
      setProvinceId(val.props.id);
      data["city"] = "";
    }
    setUserData(data);
  };
  const changeDIR = (value) => {
    if (value && value[0].match(/[a-z]/i)) {
      return "ltr";
    }
    return "rtl";
  };
  const updateUserDara = (e) => {
    if (userData.national_id === "0") {
      delete userData.national_id;
    }
    setIsLoading(true);
    put(PRIFILE, userData)
      .then(() => toast.success("عملیات با موفقیت انجام شد"))
      .catch((e) => toast.error("مشکلی در تکمیل اطلاعات وجود دارد."))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    get(PRIFILE).then((res) => setUserData(res.data));
  }, []);
  return isLoading ? (
    <div className="w-full h-full ">
      <span className="flex justify-center items-center">
        <CircularProgress color="inherit" />
      </span>
    </div>
  ) : (
    <React.Fragment>
      <div className="inline">
        <div className="mt-8 bg-cardColor rounded-3xl pt-8 px-6 pb-4 lg:w-2/5 md:w-1/2 ">
          {!!userData.name || !!userData.city ? (
            <div className=" grid grid-rows-2 grid-cols-2 gap-2">
              <div className="row-span-2">
                <img
                  alt="Profile"
                  className="rounded-3xl  "
                  src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                />
                <GrEdit  style={{ marginTop: -25 }} size={24} />
              </div>
              <div className="">
                <div>
                  <b className="text-xl">{userData.name}</b>
                </div>

                <div className="flex gap-3">
                  <Chip
                    color="secondary"
                    label={userData.person_type === "N" ? "حقیقی" : "حقوقی"}
                  />

                  <GoLocation size={20} />
                  <p>{userData.province}</p>
                </div>
              </div>
              {!!userData.email && (
                <div className="flex gap-2 flex-wrap bg-slate-600 rounded-lg items-center justify-center h-1/2 ">
                  <p>{userData.email}</p>
                </div>
              )}
            </div>
          ) : (
            "اطلاعات خود را کامل کنید."
          )}
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
                      style={{
                        direction: changeDIR(userData["name"]),
                      }}
                      fullWidth
                      inputProps={{ maxLength: 20 }}
                      // helperText="Please specify the first name"
                      name="name"
                      onChange={(e, val) => handleChange(e, val)}
                      required
                      value={userData.name}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <small>نوع شخصیت:</small>
                    <Select
                      fullWidth
                      name="person_type"
                      onChange={(e) => {
                        let data = { ...userData };
                        data[e.target.name] = e.target.value === 10 ? "N" : "L";
                        setUserData(data);
                      }}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      defaultValue={userData.person_type === "N" ? 10 : 20}
                      value={userData.person_type === "N" ? 10 : 20}
                    >
                      <MenuItem value={10}>حقیقی</MenuItem>
                      <MenuItem value={20}>حقوقی</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <small>کد/شناسه‌ملی:</small>
                    <TextField
                      style={{
                        direction: "ltr",
                      }}
                      fullWidth
                      inputProps={{ maxLength: 10 }}
                      name="national_id"
                      onChange={handleChange}
                      required
                      value={userData.national_id}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <small>تلفن همراه:</small>

                    <TextField
                      style={{
                        direction: "ltr",
                      }}
                      fullWidth
                      inputProps={{ maxLength: 11 }}
                      name="phone"
                      onChange={handleChange}
                      type="text"
                      value={userData.phone}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <small>استان:</small>
                    <Select
                      fullWidth
                      name="province"
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      defaultValue={userData.province}
                      value={userData.province}
                    >
                      {provinceList.map((p) => (
                        <MenuItem key={p.id} id={p.id} value={p.name}>
                          {p.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <small>شهر:</small>
                    {userData.city !== "" ? (
                      <TextField
                        fullWidth
                        name="email"
                        onChange={handleChange}
                        required
                        value={userData.city}
                        variant="outlined"
                      />
                    ) : (
                      <Select
                        fullWidth
                        name="city"
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        defaultValue={userData.city}
                        value={userData.city}
                      >
                        {cityList
                          .filter((c) => c.province_id === provinceId)
                          .map((c) => (
                            <MenuItem key={c.id} value={c.name}>
                              {c.name}
                            </MenuItem>
                          ))}
                      </Select>
                    )}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <small>ایمیل:</small>
                    <TextField
                      style={{
                        direction: "ltr",
                      }}
                      fullWidth
                      // helperText="لطفا ایمیل صحیح واردکنید"
                      name="email"
                      onChange={handleChange}
                      required
                      value={userData.email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <small>آدرس:</small>
                    <TextField
                      style={{
                        direction: changeDIR(userData["address"]),
                      }}
                      fullWidth
                      inputProps={{ maxLength: 50 }}
                      name="address"
                      multiline
                      onChange={handleChange}
                      required
                      value={userData.address}
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
                <Button
                  onClick={updateUserDara}
                  color="primary"
                  variant="contained"
                >
                  ثبت تغییرات
                </Button>
              </Box>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
