import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { host } from './../../utils/config';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@mui/material";

export const Consultation = () => {

    const [open, setopen] = useState(false);
    const [result, setresult] = useState("");
    const [flag, setflag] = useState(false);
    let tmp = ""
  
    const [value, setValue] = React.useState();
    const handleChange = (event) => {
      setValue(event.currentTarget.value);
    };
  
    const [value2, setValue2] = React.useState();
    const handleChange2 = (event) => {
      setValue2(event.currentTarget.value);
    };
  
    const [value3, setValue3] = React.useState();
    const handleChange3 = (event) => {
      setValue3(event.currentTarget.value);
    };
  
    const [value4, setValue4] = React.useState();
    const handleChange4 = (event) => {
      setValue4(event.currentTarget.value);
    };
  
    const [value5, setValue5] = React.useState();
    const handleChange5 = (event) => {
      setValue5(event.currentTarget.value);
    };

    const [value6, setValue6] = React.useState();
    const handleChange6 = (event) => {
      setValue6(event.currentTarget.value);
    };
  
    const [value7, setValue7] = React.useState();
    const handleChange7 = (event) => {
      setValue7(event.currentTarget.value);
    };
  
    const [value8, setValue8] = React.useState();
    const handleChange8 = (event) => {
      setValue8(event.currentTarget.value);
    };
  
    const [value9, setValue9] = React.useState();
    const handleChange9 = (event) => {
      setValue9(event.currentTarget.value);
    };
  
    const [value10, setValue10] = React.useState();
    const handleChange10 = (event) => {
      setValue10(event.currentTarget.value);
    };
  
    let token = `Bearer ${localStorage.getItem(
        "access"
    )}`;

    const handleSubmit = async () => {
        const answer = {
            q1 : value,
            q2 : value2,
            q3 : value3,
            q4 : value4,
            q5 : value5,
            q6 : value6,
            q7 : value7,
            q8 : value8,
            q9 : value9,
            q10 : value10
        }
        await axios.post(
            `${host}support/advice`,
            JSON.stringify(answer),
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': token
                }
            }
        ).then((res) => {
            if (res.status === 200) {
                tmp = res.data;
                setresult(tmp.data.level);
                setflag(true);
                setopen(true);
            }
        });

        
    };

    let show = null;
    if (flag === false) {
      show = null;
    } else if (flag === true) {
      show = (
        <div>
            <Dialog open={open} onClose={() => setopen(false)}>
                <DialogTitle>نتیجه‌ی مشاوره</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{color:"white"}}>
                        از نظر تیم مشاوره‌ی ما شما در سطح {result} هستید.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                     variant="outlined" 
                     size="small" 
                     style={{color:"white"}} 
                     onClick={() => setopen(false)}>متوجه شدم</Button>
                </DialogActions>
            </Dialog>
        </div>
      );
    }
  
    return (
      <Paper style={{ height: "2200px", borderRadius: "15px" }} elevation={0}>
        <Grid style={{ marginTop: "20px" }}>
          <Divider>
            <Chip
              style={{ backgroundColor: "#a8c3f0", color: "black"}}
              label="پرسش 1"
            />
          </Divider>
  
          <Grid style={{ margin: "10px 15px auto auto" }}>
            <Typography style={{ fontSize: 20 }}>
                آیا به قوانین مزایده/مناقصه‌ها در ایران آگاهی کامل دارید؟
            </Typography>
          </Grid>
  
          <Grid>
            <FormControl>
              <RadioGroup
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio color="default"/>}
                  label="آگاهی کامل دارم"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="default"/>}
                  label="آگاهی کامل ندارم"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
  
        <Grid>
          <Divider>
            <Chip
              style={{ backgroundColor: "#a8c3f0", color: "black" }}
              label="پرسش 2"
            />
          </Divider>
  
          <Grid style={{ margin: "10px 15px auto auto" }}>
            <Typography style={{ fontSize: 20 }}>
                شما تا چه میزان ریسک‌‌پذیر هستید؟
            </Typography>
          </Grid>
  
          <Grid>
            <FormControl>
              <RadioGroup
                value={value2}
                onChange={handleChange2}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio color="default"/>}
                  label="زیاد"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="default"/>}
                  label="متوسط"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio color="default"/>}
                  label="کم"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
  
        <Grid>
          <Divider>
            <Chip
              style={{ backgroundColor: "#a8c3f0", color: "black" }}
              label="پرسش 3"
            />
          </Divider>
  
          <Grid style={{ margin: "10px 15px auto auto" }}>
            <Typography style={{ fontSize: 20 }}>
                آیا سابقه شرکت در مزایده/مناقصه داشتید؟
            </Typography>
          </Grid>
  
          <Grid>
            <FormControl>
              <RadioGroup
                value={value3}
                onChange={handleChange3}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="1"
                  control={<Radio color="default"/>}
                  label="سابقه شرکت داشتم"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="default"/>}
                  label="سابقه شرکت نداشتم"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
  
        <Grid>
          <Divider>
            <Chip
              style={{ backgroundColor: "#a8c3f0", color: "black" }}
              label= "پرسش 4"
            />
          </Divider>
  
          <Grid style={{ margin: "10px 15px auto auto" }}>
            <Typography style={{ fontSize: 20 }}>
                آیا سابقه موفقیت در مزایده/مناقصه‌ای را داشتید؟
            </Typography>
          </Grid>
  
          <Grid>
            <FormControl>
              <RadioGroup
                value={value4}
                onChange={handleChange4}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio color="default"/>}
                  label= "سابقه موفقیت داشتم"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="default"/>}
                  label= "سابقه موفقیت نداشتم"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
  
        <Grid>
          <Divider>
            <Chip
              style={{ backgroundColor: "#a8c3f0", color: "black" }}
              label="پرسش 5"
            />
          </Divider>
  
          <Grid style={{ margin: "10px 15px auto auto" }}>
            <Typography style={{ fontSize: 20 }}>
                سرمایه مد نظر شما جهت شرکت در مزایده به صورت کیفی، چقدر می‌باشد؟
            </Typography>
          </Grid>
  
          <Grid>
            <FormControl>
              <RadioGroup value={value5} onChange={handleChange5}>
                <FormControlLabel
                  value="1"
                  control={<Radio color="default"/>}
                  label="زیاد"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="default"/>}
                  label="متوسط"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio color="default"/>}
                  label="کم"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid style={{ marginTop: "20px" }}>
          <Divider>
            <Chip
              style={{ backgroundColor: "#a8c3f0", color: "black"}}
              label="پرسش 6"
            />
          </Divider>
  
          <Grid style={{ margin: "10px 15px auto auto" }}>
            <Typography style={{ fontSize: 20 }}>
                انگیزه شما جهت شرکت در مزایده/مناقصه چیست؟
            </Typography>
          </Grid>
  
          <Grid>
            <FormControl>
              <RadioGroup
                value={value6}
                onChange={handleChange6}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio color="default"/>}
                  label="جهت تفریح"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="default"/>}
                  label="جهت کسب و کار"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio color="default"/>}
                  label="موارد دیگر"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid style={{ marginTop: "20px" }}>
          <Divider>
            <Chip
              style={{ backgroundColor: "#a8c3f0", color: "black"}}
              label="پرسش 7"
            />
          </Divider>
  
          <Grid style={{ margin: "10px 15px auto auto" }}>
            <Typography style={{ fontSize: 20 }}>
              آیا تا به حال مزایده/مناقصه‌ای را در میانه‌ی فرایند لغو کرده‌اید؟
            </Typography>
          </Grid>
  
          <Grid>
            <FormControl>
              <RadioGroup
                value={value7}
                onChange={handleChange7}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio color="default"/>}
                  label="بله، و بعد از این کار پشیمان شدم"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="default"/>}
                  label="بله، و بعد  از این کار پشیمان نشدم"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio color="default"/>}
                  label="خیر"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid style={{ marginTop: "20px" }}>
          <Divider>
            <Chip
              style={{ backgroundColor: "#a8c3f0", color: "black"}}
              label="پرسش 8"
            />
          </Divider>
  
          <Grid style={{ margin: "10px 15px auto auto" }}>
            <Typography style={{ fontSize: 20 }}>
                آیا تا به حال از شرکت در مزایده/مناقصه‌ای پشیمان شده‌اید؟
            </Typography>
          </Grid>
  
          <Grid>
            <FormControl>
              <RadioGroup
                value={value8}
                onChange={handleChange8}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio color="default"/>}
                  label="بله"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="default"/>}
                  label="خیر"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid style={{ marginTop: "20px" }}>
          <Divider>
            <Chip
              style={{ backgroundColor: "#a8c3f0", color: "black"}}
              label="پرسش 9"
            />
          </Divider>
  
          <Grid style={{ margin: "10px 15px auto auto" }}>
            <Typography style={{ fontSize: 20 }}>
                مزایده/مناقصه‌هایی که تا به حال شرکت کرده‌اید، بیشتر در بخش دولتی بودند یا خصوصی؟
            </Typography>
          </Grid>
  
          <Grid>
            <FormControl>
              <RadioGroup
                value={value9}
                onChange={handleChange9}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio color="default"/>}
                  label="دولتی"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="default"/>}
                  label="خصوصی"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio color="default"/>}
                  label="هر دو مورد"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio color="default"/>}
                  label="تا به حال شرکت نکرده‌ام"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid style={{ marginTop: "20px" }}>
          <Divider>
            <Chip
              style={{ backgroundColor: "#a8c3f0", color: "black"}}
              label="پرسش 10"
            />
          </Divider>
  
          <Grid style={{ margin: "10px 15px auto auto" }}>
            <Typography style={{ fontSize: 20 }}>
                آیا شما به صورت هدفمند در مزایده/مناقصه‌ها شرکت می‌کنید؟
            </Typography>
          </Grid>
  
          <Grid>
            <FormControl>
              <RadioGroup
                value={value10}
                onChange={handleChange10}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio color="default"/>}
                  label="بله"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="default"/>}
                  label="خیر"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
  
        <Grid style={{ marginBottom: "50px", marginRight: "95%", marginLeft: "5%", direction: "ltr"}}>
          <Button
            dir="ltr"
            variant="contained"
            onClick={handleSubmit}
            style={{ margin: "50px auto auto 30px" }}
          >
            مشاهده نتیجه
          </Button>
        </Grid>

        {show}
        
      </Paper>
    );

};

export default Consultation;