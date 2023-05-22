import * as React from "react";
import { useState} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "./index.css";
import axios, { post } from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect } from "react";
import { host } from "utils/config";
import { useNavigate } from "react-router-dom";
//مزایده مناقصه بر اساس شهر ها

const bull = (
    <Box
        component='span'
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

export const CityAuction = (props) => {
    const token = `Bearer ${localStorage.getItem("access")}`;
    const navigate = useNavigate();
    const [auctionCity, setAuctionCity] = useState([]);
    const [city, setCity] = useState("");
    useEffect(() => {
        axios
            .get(`${host}auction/city/`, {
                headers: {
                    "Content-Type": "application/json ",
                    Authorization: token,
                },
            })
            .then((res) => {
                console.log(res.data);
                setAuctionCity(res.data);
            });
    }, []);
    console.log(props);
    return (
        <Grid container>
            {auctionCity.map((city) => {
                return (
                    <Grid item>
                        <Card sx={{ minWidth: 265 }} className='card1'>
                            <CardContent>
                                <Typography
                                    variant='h5'
                                    component='div'
                                    className='city'
                                >
                                    {city.name}{" "}
                                </Typography>

                                <Typography
                                    sx={{ mb: 1.5 }}
                                    color='text.secondary'
                                >
                                    مزایده مناقصه {city.name}{" "}
                                </Typography>
                                <Typography variant='body2'>
                                    1234 آگهی
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size='small'
                                    style={{
                                        color: "#c786d3",
                                        marginRight: "140px",
                                    }}
                                    onClick={() => {
                                        navigate("/auction-page", {
                                            state: { id: city.id },
                                        });
                                    }}
                                >
                                    مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};
