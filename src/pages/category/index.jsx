import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import "./index.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
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
            <Slide {...properties} style={{color:"red"}}>
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
        </div>
    );
};

export default Category;
