import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import axios, { post } from 'axios';
import { Typography, Grid, Stack, Paper, Divider } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { host } from './../../utils/config';
import { toast } from "react-toastify";

export const PublicProfile = () => {

    let token = `Bearer ${localStorage.getItem(
        "access"
    )}`;
    const [data, setdata] = useState("");
    const [image,setimage] = useState("");
    const [flag,setflag] = useState(true);
    const [follow,setfollow] = useState(false);

    var currentUrl = window.location.href;
    const Url = currentUrl.split("/");

    useEffect(() => {
        axios
          .get(`${host}profile/general/${Url[4]}`, {
            headers: {
              "Content-Type": "application/json ",
              Authorization: token,
            },
          })
          .then((res) => {
            console.log(res.data)
            setdata(res.data);
          });
    }, []);

    const rerunder = async () => {
        await axios
        .get(`${host}profile/general/${Url[4]}`, {
          headers: {
            "Content-Type": "application/json ",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res.data)
          setdata(res.data);
        });
    };

    const handleUnfollow = async () => {
        await axios.delete(
            `${host}profile/unfollow/${Url[4]}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': token
                }
            }
        ).then((res) => {
            console.log(res.status);
            if (res.status === 204) {
                toast.success("با موفقیت آنفالو کردی");
            }
        });
        rerunder();
        rerunder();
    };

    const handlefollow = async () => {

        const answer = {
            username : Url[4],
        }
        await axios.post(
            `${host}profile/follow/`,
            JSON.stringify(answer),
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': token
                }
            }
        ).then((res) => {
            console.log(res.status);
            if (res.status === 201) {
                toast.success("با موفقیت فالو کردی");
                //tmp = res.data;
                //setresult(tmp.data.level);
                //setflag(true);
                //setopen(true);
            }
        });
        rerunder();
    };


    return (
        <Paper style={{ height: "500px", borderRadius:"15px" }} elevation={0}>

            <center>
                <Grid style={{marginTop: "30px"}} container lg={8} xs={12}>

                    <Grid item lg={12} xs={12} className="Editprofile_divider" 
                        style={{ backgroundColor: "#8978f5",
                        borderRadius:"15px",
                        margin: "auto auto auto auto", 
                        height: "350px" }}>
                            
                            <Avatar
                                sx={{ width: 100, height: 100 }}
                                src={image}
                                style={{ margin: "20px auto auto auto",
                                backgroundColor:"white" }}
                            />

                            <Typography style={{marginTop: "20px"}}>
                                {data.data ? data.data.name : ""}
                            </Typography>

                            {(data.data ? data.data.is_followed : null) ? (
                                <Button 
                                disabled
                                onClick={handlefollow} 
                                variant="contained" 
                                style={{ margin: "30px auto auto 15px", width:"100px" }}>
                                فالو
                            </Button>
                            ) : (
                                <Button 
                                onClick={handlefollow} 
                                variant="contained" 
                                style={{ margin: "30px auto auto 15px", width:"100px" }}>
                                فالو 
                            </Button>
                            )}

                            {(data.data ? data.data.is_followed : null) ? (
                                <Button 
                                onClick={handleUnfollow} 
                                variant="contained" 
                                style={{ margin: "30px 15px auto auto", width:"100px" }}>
                                آنفالو 
                            </Button>
                            ) : (
                                <Button 
                                disabled
                                onClick={handleUnfollow} 
                                variant="contained" 
                                style={{ margin: "30px 15px auto auto", width:"100px" }}>
                                آنفالو 
                            </Button>
                            )}
                            
                            <Typography style={{marginTop: "30px"}}>
                                {"تعداد دنبال کنندگان : "}
                                {data.data ? data.data.follower_count : ""}
                            </Typography>

                            <Typography style={{marginTop: "15px"}}>
                                {"تعداد دنبال شوندگان  : "}
                                {data.data ? data.data.following_count : ""}
                            </Typography>

                    </Grid>
                </Grid>            
            </center>
            
        </Paper>
    );
}

 export default PublicProfile;
