import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import { Button, Paper, Typography } from "@mui/material";
//import createCache from "@emotion/cache";
//import rtlPlugin from "stylis-plugin-rtl";
//import { prefixer } from "stylis";
import TextField from '@mui/material/TextField';
import axios from "axios";
import { host } from './../../utils/config';
import { toast } from "react-toastify";

export const Wallet = () => {

    // const cacheRtl = createCache({
    //     key: "muirtl",
    //     stylisPlugins: [prefixer, rtlPlugin],
    //   });

    let token = `Bearer ${localStorage.getItem(
        "access"
    )}`;

    const [value, setValue] = useState("");
    const [balance, setBalance] = useState("");

    const sethandler = (e) => {
        setValue(parseInt(e.target.value));

    }
    const handleb1 = () => {
        setValue(10000);

    }
    const handleb2 = () => {
        setValue(20000);

    }
    const handleb3 = () => {
        setValue(50000);

    }

    useEffect(() => {
        axios
            .get(
                `${host}profile/wallet`,
                {
                    headers: {

                        "Content-Type": "application/json",
                        Authorization: token
                    },
                }
            )
        .then((res) => {
            setBalance(res.data);
        })
    }, []);

    const rerunder = async () => {
        await axios
        .get(
            `${host}profile/wallet`,
            {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: token
                },
            }
        )
    .then((res) => {
        console.log(res.status);
        console.log(res.data);
        setBalance(res.data);
    })
    };


    const handleDeposit = () => {
        const amount = {
            charge_amount: value,
        }
        axios
            .post(
                `${host}profile/wallet/charge`,
                JSON.stringify(amount),
                {
                    headers: {

                        "Content-Type": "application/json",
                        'Authorization': token
                    },
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    toast.success("با موفقیت شارژ شد");
                }
            });

        setValue("");

        rerunder();
        rerunder();
        rerunder();
    }

    return (
        // <CacheProvider value={cacheRtl}>
        <center>
                <Grid container style={{margin: "20px auto auto auto"}}>
                    <Grid item md={2.5} xs={0} ></Grid>
                    <Grid item md={6.5} xs={12} >
                        <Paper elevation={3} style={{ height: "500px", borderRadius: "30px" }}>

                            <Typography style={{ position: "relative", top: "70px" }}>اعتبار شما</Typography>
                            <Typography style={{ position: "relative", top: "75px" }}>{balance.data ? balance.data.wallet : ""} تومان</Typography>

                            <TextField onChange={sethandler} value={value} variant="standard"
                                style={{
                                    position: "relative", top: "150px", width: "212px",
                                    borderRadius: "8px"
                                }}
                                id="outlined-basic" label="مبلغ مورد نظر" placeholder="مبلغ رو به تومان وارد کن" />

                            <Grid container style={{margin: "30px auto auto auto"}}>

                                <Grid item md={1} xs={0.1} ></Grid>
                                <Grid item md={10} xs={11.8} style={{ height: "70px", position: "relative", top: "175px"}}>
                                   
                                   
                                    <button onClick={handleb1} style={{
                                        width: "110px",
                                        height: "42px",
                                        borderRadius: " 8px",
                                        fontSize: "14px",
                                        lineHeight: "1.71",
                                        letterSpacing: "normal",
                                        color: " #000000",
                                        outline: " none",
                                        backgroundColor: " #ebebeb",
                                        border: "0px solid transparent",
                                        padding: "6px 12px",
                                        marginTop: "5px",
                                          marginLeft: "9px"
                                    }}>10,000 تومان</button>
                                    
                                    <button onClick={handleb2} style={{
                                        //float: "right",
                                        width: "110px",
                                        height: "42px",
                                        borderRadius: " 8px",
                                        fontSize: "14px",
                                        lineHeight: "1.71",
                                        letterSpacing: "normal",
                                        color: " #000000",
                                        outline: " none",
                                        backgroundColor: " #ebebeb",
                                        border: "0px solid transparent",
                                        padding: "6px 12px",
                                        marginTop: "5px",
                                    }}>20,000 تومان</button>
                                       
                                    <button onClick={handleb3} style={{
                                        width: "110px",
                                        height: "42px",
                                        borderRadius: " 8px",
                                        fontSize: "14px",
                                        lineHeight: "1.71",
                                        letterSpacing: "normal",
                                        color: " #000000",
                                        outline: " none",
                                        backgroundColor: " #ebebeb",
                                        border: "0px solid transparent",
                                        padding: "6px 12px",
                                         marginRight: "9px",
                                        marginTop: "5px",

                                    }}>50,000 تومان</button>
                                   
                                </Grid>

                                <Grid item md={1} xs={0.1} ></Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={2} xs={1}></Grid>
                                <Grid item md={8} xs={10}>
                                    <Button onClick={handleDeposit} style={{ position: "relative", top: "215px", width: "93%" }} variant="contained">افزایش موجودی</Button>
                                </Grid>
                                <Grid item md={2} xs={1}></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item md={7} xs={1} ></Grid>
                </Grid >
        </center >
        // </CacheProvider>
    )
}

export default Wallet;