import cx from "classnames";
import { cardClass } from "utils/constant/cardClass";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import {
    siteViewDetail,
    purchasedDetail,
    auctionViewDetail,
    inComeDetail,
} from "utils/statics/noAxisplot";
import Chart from "react-apexcharts";
import { formatPrice } from "utils/formatPrice";

export const ViewFromDashboard = ({ list, total }) => {
    return (
        <div className={cx(cardClass, "text-black")}>
            <div className='p-3'>
                <div className='bg-purple-100 rounded-full w-11 h-11 flex justify-center items-center'>
                    <NotesRoundedIcon
                        className='text-pink-400'
                        fontSize='medium'
                    />
                </div>
                <div className='text-white m-2 mt-3 font-bold '>{total}</div>
                <div className='text-white font-thin text-xs'>
                    {" "}
                    بازدید ماهانه شما{" "}
                </div>
            </div>
            <Chart
                series={list}
                options={siteViewDetail.options}
                type='area'
                height='135'
            />
        </div>
    );
};

export const PurchasedStats = ({ list, total }) => {
    return (
        <div className={cx(cardClass, "text-black")}>
            <div className='p-3'>
                <div className='bg-teal-200 rounded-full w-11 h-11 flex justify-center items-center'>
                    <ShoppingCartRoundedIcon
                        className='text-green-600'
                        fontSize='medium'
                    />
                </div>
                <div className='text-white m-2 mt-3 font-bold '>
                    {formatPrice(total)} تومان
                </div>
                <div className='text-white font-thin text-xs'>
                    {" "}
                    هزینه‌ها تا کنون{" "}
                </div>
            </div>
            <Chart
                series={list}
                options={purchasedDetail.options}
                type='area'
                height='135'
            />
        </div>
    );
};

export const InComeStats = ({ list, total }) => {
    return (
        <div className={cx(cardClass, "text-black")}>
            <div className='p-3'>
                <div className='bg-yellow-100 rounded-full w-11 h-11 flex justify-center items-center'>
                    <AttachMoneyRoundedIcon
                        className='text-orange-400'
                        fontSize='medium'
                    />
                </div>
                <div className='text-white m-2 mt-3 font-bold '>
                    {formatPrice(total)} تومان
                </div>
                <div className='text-white font-thin text-xs'>
                    {" "}
                    درآمدها تا کنون{" "}
                </div>
            </div>
            <Chart
                series={list}
                options={inComeDetail.options}
                type='area'
                height='135'
            />
        </div>
    );
};

export const AuctionViewStats = ({ list, total }) => {
    return (
        <div className={cx(cardClass, "text-black")}>
            <div className='p-3'>
                <div className='bg-violet-200 rounded-full w-11 h-11 flex justify-center items-center'>
                    <GroupsRoundedIcon
                        className='text-violet-500'
                        fontSize='medium'
                    />
                </div>
                <div className='text-white m-2 mt-3 font-bold '>{total}</div>
                <div className='text-white font-thin text-xs'>
                    {" "}
                    مشاهده افراد از مزایده/مناقصه شما{" "}
                </div>
            </div>
            <Chart
                series={list}
                options={auctionViewDetail.options}
                type='area'
                height='135'
            />
        </div>
    );
};
