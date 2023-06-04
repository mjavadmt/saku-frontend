import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { host } from './../../utils/config';
import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@mui/material";
import {
  WALLET,
} from "utils/constant/routes";
import { toast } from "react-toastify";

export const WalletAndSubscription = () => {

  const navigate = useNavigate();

  //const [id, setId] = useState();
  let token = `Bearer ${localStorage.getItem(
    "access"
  )}`;

  const handleBuy = (selfid) => {

    console.log(selfid);

    const buy = {
        id: selfid,
    }
    axios
        .post(
            `${host}subscription/purchase`,
            JSON.stringify(buy),
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': token
                },
            }
        )
        .then((res) => {
            console.log(res.status);
            if (res.status === 200) {
               toast.success("اشتراک با موفقیت خریداری شد");
            }
            if (res.status === 400){
                toast.error("شما در حال حاضر اشتراک فعال دارید یا موجودی کافی ندارید");
            }
        });

}

  return ( 
    <div>
    
        <center>
            <Grid style={{margin:"50px auto 40px auto"}} container item lg={10} xs={10} >
                <Grid item lg={12} xs={12} >
                    <Typography style={{fontSize: 23, fontWeight:"bold", color: "#white"}}> خرید اشتراک </Typography>
                    <br />
                    <Typography>
                      در این قسمت شما می‌توانید انواع اشتراک را خریداری نمایید
                    </Typography>

                </Grid >
            </Grid>
        </center>

        <center>
        <Grid container lg={10} md={10} xs={10} >
        <Paper elevation={3} style={{width:"100%", margin:"auto auto 30px auto"}}>
            <Grid dir="rtl" style={{margin:"20px auto auto auto"}} container lg={10} md={10} xs={10} >
                    
                <Grid item lg={12} md={12} xs={12}>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, fontWeight:"bold", color: "#0D9ECF"}}>اشتراک پایه</Typography>
                </Grid>

                <Grid item lg={12} md={12} xs={12}>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, fontWeight:"bold", color: "white"}}>10 هزار تومان</Typography>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, color: "white"}}>گذاشتن دو آگهی در ماه</Typography>
                </Grid>

                <Grid item lg={12} md={12} xs={12} style={{margin:"auto auto 15px auto"}}>
                    <Button variant="contained"
                    onClick={() => handleBuy(1)}
                    >خرید</Button>
                </Grid>

                <br />
                    
                <br/>
            </Grid>
            </Paper> 
        </Grid>
        </center>


        <center>
        <Grid container lg={10} md={10} xs={10} >
        <Paper elevation={3} style={{width:"100%",margin:"auto auto 30px auto"}}>
            <Grid dir="rtl" style={{margin:"20px auto auto auto"}} container lg={10} md={10} xs={10} >
                 
                <Grid item lg={12} md={12} xs={12}>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, fontWeight:"bold", color: "#CD7F32"}}>اشتراک برنزی</Typography>
                </Grid>

                <Grid item lg={12} md={12} xs={12}>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, fontWeight:"bold", color: "white"}}>30 هزار تومان</Typography>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, color: "white"}}>گذاشتن هفت آگهی در ماه</Typography>
                </Grid>

                <Grid item lg={12} md={12} xs={12} style={{margin:"auto auto 15px auto"}}>
                    <Button variant="contained"
                    onClick={() => handleBuy(2)}
                    >خرید</Button>
                </Grid>

                <br />
                    
                    
                <br/>
                
            </Grid>
        </Paper> 
        </Grid>
        </center>

        <center>
        <Grid container lg={10} md={10} xs={10} >
        <Paper elevation={3} style={{width:"100%",margin:"auto auto 30px auto"}}>
            <Grid dir="rtl" style={{margin:"20px auto auto auto"}} container lg={10} md={10} xs={10} >
                 
                <Grid item lg={12} md={12} xs={12}>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, fontWeight:"bold", color: "#c0c0c0"}}>اشتراک نقره‌ای</Typography>
                </Grid>

                <Grid item lg={12} md={12} xs={12}>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, fontWeight:"bold", color: "white"}}>50 هزار تومان</Typography>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, color: "white"}}>گذاشتن ده آگهی در ماه</Typography>
                </Grid>

                <Grid item lg={12} md={12} xs={12} style={{margin:"auto auto 15px auto"}}>
                    <Button variant="contained"
                    onClick={() => handleBuy(3)}
                    >خرید</Button>
                </Grid>

                <br />
                    
                <br/>
                
            </Grid>
        </Paper> 
        </Grid>
        </center>

        <center>
        <Grid container lg={10} md={10} xs={10} >
        <Paper elevation={3} style={{width:"100%",margin:"auto auto 50px auto"}}>
            <Grid dir="rtl" style={{margin:"20px auto auto auto"}} container lg={10} md={10} xs={10} >
                 
                <Grid item lg={12} md={12} xs={12}>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, fontWeight:"bold", color: "#ffd700"}}>اشتراک طلایی</Typography>
                </Grid>

                <Grid item lg={12} md={12} xs={12}>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, fontWeight:"bold", color: "white"}}>70 هزار تومان</Typography>
                    <Typography style={{margin:"auto auto 10px auto",fontSize: 20, color: "white"}}>گذاشتن پانزده آگهی در ماه</Typography>
                </Grid>

                <Grid item lg={12} md={12} xs={12} style={{margin:"auto auto 15px auto"}}>
                    <Button variant="contained"
                    onClick={() => handleBuy(4)}
                    >خرید</Button>
                </Grid>

                <br />
                    
                <br/>
                
            </Grid>
        </Paper> 
        </Grid>
        </center>

        <center>
        <Grid container lg={10} md={10} xs={10} >
        <Paper elevation={3} style={{width:"50%", height: "120px" ,margin:"auto auto auto auto"}}>
            <Grid dir="rtl" style={{margin:"20px auto auto auto"}} container lg={10} md={10} xs={10} >
                 
                <Grid item lg={12} md={12} xs={12}>
                    <Typography style={{margin:"auto auto 25px auto",fontSize: 20, fontWeight:"bold", color: "white"}}>موجودیت کمه ؟</Typography>
                    <Button variant="contained"
                    active={window.location.pathname === WALLET}
                    onClick={(e) => navigate(WALLET)}
                    >شارژ کن</Button>
                </Grid>

                <br />
                    
                <br/>
                
            </Grid>
        </Paper> 
        </Grid>
        </center>

        {/* <Footer/> */}
    
    </div>
 );

};

export default WalletAndSubscription;