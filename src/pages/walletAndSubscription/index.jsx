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

export const WalletAndSubscription = () => {

  const navigate = useNavigate();

  return ( 
    <div>
    
        <center>
            <Grid style={{margin:"50px auto 40px auto"}} container item lg={10} xs={10} >
                <Grid item lg={12} xs={12} >
                    <Typography style={{fontSize: 23, fontWeight:"bold", color: "#0D9ECF"}}> خرید اشتراک </Typography>
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
                    <Typography style={{margin:"auto auto 25px auto",fontSize: 20, fontWeight:"bold", color: "#0D9ECF"}}>اشتراک پایه</Typography>
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
                    <Typography style={{margin:"auto auto 25px auto",fontSize: 20, fontWeight:"bold", color: "#0D9ECF"}}>اشتراک برنزی</Typography>
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
                    <Typography style={{margin:"auto auto 25px auto",fontSize: 20, fontWeight:"bold", color: "#0D9ECF"}}>اشتراک نقره‌ای</Typography>
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
                    <Typography style={{margin:"auto auto 25px auto",fontSize: 20, fontWeight:"bold", color: "#0D9ECF"}}>اشتراک طلایی</Typography>
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