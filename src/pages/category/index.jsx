import React, { useState, useEffect } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import "./index.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { getCategories } from "utils/api/requests/createAuction";
import { GET_CATEGORIES } from "utils/constant/apiRoutes";
import eStste from "assets/img/estate.svg";

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
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    // const categoryData=[
    //     {
    //         id: 1,
    //         name: "",
    //         Image: ""
    //     }
    // ]
    useEffect(() => {
        async function fetchData() {
            const getCategoriesRes = await getCategories(GET_CATEGORIES);
            if (getCategoriesRes && getCategoriesRes.status === 200) {
                setCategories(getCategoriesRes.data);
            }
        }
        fetchData();
    }, []);
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

            <div className="category-div">
                {categories.map((cat, i) => {
                    return (
                        <div key={i}>
                            <button
                                className='cat-button'
                                onClick={() => {
                                    navigate("/auction-page", {
                                        state: { catId: cat.name },
                                    });
                                }}
                            >
                                <img
                                    src={eStste}
                                    className='cat-image'
                                    alt='cat'
                                />
                                <span className='cat-name'>
                                    دسته بندی {cat.name}
                                </span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Category;
