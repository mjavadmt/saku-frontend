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
import eStste from "assets/img/777.svg";
import slideph from "assets/img/111.png";
import slidephh from "assets/img/333.png";

const slideImages = [slideph, slidephh];

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
            {/* <div className='text'>مزایده / مناقصه بر اساس دسته بندی </div> */}{" "}
            <Slide
                className='div-style'
                {...properties}
                style={{ color: "red" }}
            >
                <div className='each-slide'>
                    <div
                        style={{
                            backgroundImage: `url(${slideImages[0]})`,
                        }}
                    >
                        <div className='text'>
                            مزایده / مناقصه بر اساس دسته بندی{" "}
                        </div>
                    </div>
                </div>
                <div className='each-slide'>
                    <div
                        style={{
                            backgroundImage: `url(${slideImages[1]})`,
                        }}
                    >
                        {/* <span>Slide 2</span> */}
                    </div>
                </div>
            </Slide>
            <div className='category-div'>
                {categories.map((cat, i) => {
                    return (
                        <div key={i}>
                            <button
                                style={{ width: "565px " }}
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
