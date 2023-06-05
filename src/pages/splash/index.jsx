import { Grid } from "@mui/material";
import {
    AuctionActivity,
    AuctionCreatedTable,
    AuctionParticipatedTable,
    RevenueOnMonth,
    IncomeGain,
    ViewFromDashboard,
    PurchasedStats,
    AuctionViewStats,
    InComeStats,
    NumberOfAuctionCreated,
    SuccessfulAuctionParticipated,
    UniqueProfileParticipated,
} from "..";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { homePageData } from "utils/statics/homePageStats";
import { CircularProgress } from "@mui/material";
import { getHomeData } from "utils/api/requests/splash";
import "./index.css";
import Home from "./S.jpg";
import { ActionCard } from "components/AuctionCard";
import noAuctionImage from "assets/img/no-auction-image-2.svg";
import { useSelector } from "react-redux";
import { host } from "utils/config";
import axios from "axios";
import { AUCTION_PAGE } from "constant/routes";

const chartHandler = (
    name,
    listObj,
    imgSrc,
    title,
    remainingDay,
    companyName,
    isOnline,
    date,
    mode,
    price,
    tags,
    id,
    token,
    ourImage
) => {
    return [
        {
            name,
            data: listObj ? listObj : [],
        },
    ];
};

const RevenueHandler = (listObj1, listObj2) => {
    return [
        {
            name: "هزینه",
            data: listObj1 ? listObj1.slice(0, 12) : [],
        },
        {
            name: "درآمد",
            data: listObj2 ? listObj2.slice(0, 12) : [],
        },
    ];
};

const tableHandler = (listObj) => {
    return listObj ? listObj : [];
};

const pieChartHanlder = (num1, num2, num3, num4) => {
    return [num1, num2, num3, num4];
};

export const Splash = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({});
    const [cartData, setCartData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dataOnPage = 5;
    const { auctions, page } = useSelector((data) => {
        return data.auction;
    });
    const paginatedData = () => {
        let currentItem = (page - 1) * dataOnPage;
        return auctions?.slice(currentItem, currentItem + dataOnPage);
    };

    async function fetchData() {
        const getHomeDataRes = await getHomeData("/homepage/2022");
        if (getHomeDataRes && getHomeDataRes.status === 200) {
            setData(getHomeDataRes.data.data);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }
    const token = `Bearer ${localStorage.getItem("access")}`;

    function getcarddata() {
        axios
            .get(`${host}auction/recent/4`, {
                headers: {
                    "Content-Type": "application/json ",
                    Authorization: token,
                },
            })
            .then((res) => {
                setCartData(res.data);
                console.log(res.data);
            })

            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        setData(homePageData);
        fetchData();
        getcarddata();
    }, []);

    return isLoading ? (
        <span
            data-testid='loading'
            className='flex h-full justify-center items-center mt-24'
        >
            <CircularProgress color='inherit' />
        </span>
    ) : (
        <div>
            {" "}
            <div class='container'>
                <img
                    className='home_img'
                    src={Home}
                    alt='homeimg'
                    style={{
                        backgroundImage: "url(" + "S.png" + ")",
                        height: "450px",
                        width: "100%",
                    }}
                />

                <div class='centered'>
                    {" "}
                    <h2 className='home_title'>سکو </h2>
                    <div className='home_info'>
                        هیچ آگهی مزایده مناقصه دیگری را از دست ندهید.{" "}
                    </div>
                    <div className='home_info1'>
                        اولین دایرکتوری آگهی های مزایده مناقصه و معرفی شرکت ها و
                        افراد حقیقی حوزه خدمات
                    </div>
                    <button
                        className='button-36'
                        style={{ marginTop: "40px" }}
                        onClick={() => navigate(AUCTION_PAGE)}
                    >
                        مزایده مناقصه ها را مشاهده کن
                    </button>
                </div>
            </div>
            <p style={{ margin: "24px 0px", fontSize: "1.5em" }}>
                جدیدترین آگهی ها
            </p>
            <div className='card-content'>
                {cartData.map((auction) => (
                    <ActionCard
                        imgSrc={
                            !!auction.auction_image
                                ? auction.auction_image
                                : noAuctionImage
                        }
                        ourImage={!!auction.auction_image}
                        title={auction.name}
                        city={auction.location}
                        companyName={auction.user.username}
                        date={new Date(auction.finished_at).toLocaleDateString(
                            "fa-IR"
                        )}
                        price={auction.limit}
                        mode={auction.mode}
                        isOnline={auction.is_online}
                        remainingDay={Math.ceil(
                            (new Date(auction.finished_at).getTime() -
                                new Date().getTime()) /
                                (1000 * 3600 * 24)
                        )}
                        tags={[...auction.tags.map((tag) => tag.name)]}
                        id={1}
                        token={auction.token}
                    />
                ))}
            </div>
            <Grid container spacing={2}>
                <Grid
                    inputProps={{
                        "data-testid": "grid1",
                    }}
                    item
                    xs={12}
                    md={3}
                >
                    <ViewFromDashboard
                        list={chartHandler(
                            "میزان بازدید",
                            data.your_colaberation_list
                        )}
                        total={data.your_colaberation_count}
                    />
                    <div className='h-3' />
                    <PurchasedStats
                        list={chartHandler("میزان هزینه", data.expense_list)}
                        total={data.expense}
                    />
                </Grid>
                <Grid
                    inputProps={{
                        "data-testid": "grid2",
                    }}
                    item
                    xs={12}
                    md={3}
                >
                    <InComeStats
                        list={chartHandler("میزان درآمد", data.income_list)}
                        total={data.income}
                    />
                    <div className='h-3' />
                    <AuctionViewStats
                        list={chartHandler(
                            "میزان مشاهده",
                            data.others_colaberation_list
                        )}
                        total={data.others_colaberation_count}
                    />
                </Grid>
                <Grid
                    inputProps={{
                        "data-testid": "grid3",
                    }}
                    container
                    className='mt-4'
                    xs={12}
                    md={6}
                >
                    <Grid item xs={12} md={6}>
                        <SuccessfulAuctionParticipated
                            number={data.seccussfull_auction_count}
                        />
                        <NumberOfAuctionCreated number={data.auctions_count} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <IncomeGain number={data.income} />
                        <UniqueProfileParticipated
                            number={data.auctions_participants_num}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <AuctionParticipatedTable
                            data={tableHandler(data.last_auctions_participated)}
                        />
                    </Grid>
                </Grid>
                <Grid
                    inputProps={{
                        "data-testid": "grid4",
                    }}
                    item
                    xs={12}
                    md={8}
                >
                    <AuctionCreatedTable
                        data={tableHandler(data.last_auctions_created)}
                    />
                </Grid>
                <Grid
                    inputProps={{
                        "data-testid": "grid5",
                    }}
                    item
                    xs={12}
                    md={4}
                >
                    <AuctionActivity
                        data={pieChartHanlder(
                            data.auction2_participate_count,
                            data.auction2_create_count,
                            data.auction1_participate_count,
                            data.auction1_create_count
                        )}
                    />
                </Grid>
                <Grid data-testid='grid6' item xs={12}>
                    <RevenueOnMonth
                        data={RevenueHandler(
                            data.yearly_expense_list,
                            data.yearly_income_list
                        )}
                    />
                </Grid>
            </Grid>
        </div>
    );
};
