import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import "./index.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import "./index.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const slideImages = [
    "https://dummyimage.com/600x400/b1e6b2/1c2ae8.png",
    "https://dummyimage.com/700x300.png",
    "https://dummyimage.com/600x400/e8b2e8/1c2ae8.png",
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
};
export const Category = () => {
    return (
        <div>
            <div className='text'>مزایده / مناقصه بر اساس دسته بندی </div>
            <Slide {...properties} style={{ color: "red" }}>
                <div className='each-slide'>
                    <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className='each-slide'>
                    <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className='each-slide'>
                    <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>

            <Grid container>
                <Grid item>
                    <Card sx={{ minWidth: 330 , minHeight:230 }} className='card1'>
                        <CardContent>
                            {/* <Typography
                                variant='h6'
                                component='div'
                                className='city'
                            >
                                تهران
                            </Typography> */}

                        </CardContent>
                        <CardActions>
                            <Button
                                size='small'
                                style={{
                                    color: "white",
                                  marginRight:"98px"
                                }}
                            >
                                       <Typography
                                variant='h6'
                                component='div'
                                className='city'
                            >
                                تهران
                            </Typography>                          </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{minWidth: 330 , minHeight:230 }} className='card1'>
                        <CardContent>
                            <Typography variant='h5' component='div'>
                                اهواز
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                مزایده مناقصه اهواز{" "}
                            </Typography>
                            <Typography variant='body2'>324 آگهی</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size='small'
                                style={{
                                    color: "#c786d3",
                                    marginRight: "140px",
                                }}
                            >
                                مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ minWidth: 330 , minHeight:230 }} className='card1'>
                        <CardContent>
                            <Typography variant='h5' component='div'>
                                مشهد
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                مزایده مناقصه مشهد
                            </Typography>
                            <Typography variant='body2'>7659 آگهی</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size='small'
                                style={{
                                    color: "#c786d3",
                                    marginRight: "140px",
                                }}
                            >
                                مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ minWidth: 330 , minHeight:230 }} className='card1'>
                        <CardContent>
                            <Typography variant='h5' component='div'>
                                اصفهان
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                مزایده مناقصه اصفهان
                            </Typography>
                            <Typography variant='body2'>3456 آگهی</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' style={{ color: "#c786d3" }}>
                                مشاهده بیشتر <KeyboardBackspaceIcon />
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ minWidth: 330 , minHeight:230 }} className='card1'>
                        <CardContent>
                            <Typography
                                variant='h5'
                                component='div'
                                className='city'
                            >
                                شیراز{" "}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                مزایده مناقصه شیراز{" "}
                            </Typography>
                            <Typography variant='body2'>1234 آگهی</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size='small'
                                style={{
                                    color: "#c786d3",
                                    marginRight: "140px",
                                }}
                            >
                                مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ minWidth: 330 , minHeight:230 }} className='card1'>
                        <CardContent>
                            <Typography variant='h5' component='div'>
                                اراک{" "}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                مزایده مناقصه اراک{" "}
                            </Typography>
                            <Typography variant='body2'>324 آگهی</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size='small'
                                style={{
                                    color: "#c786d3",
                                    marginRight: "140px",
                                }}
                            >
                                مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
       
      
            </Grid>
        </div>
    );
};

export default Category;
