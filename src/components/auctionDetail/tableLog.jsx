import { cardClass, headerClass } from "utils/constant/cardClass";
import DataTable from "react-data-table-component";
import tableStyles from "pages/homePageComponents/tableStyles";
import Avatar from "@mui/material/Avatar";
import { definePriceColor } from "pages/homePageComponents/tableCellFunctions";
import { dateConverter } from "utils/dateConverter";
import Pagination from "@mui/material/Pagination";
import React, {useContext} from "react";
import { CircularProgress } from "@mui/material";
import notAccessible from "assets/img/undraw_access_denied_re_awnf.svg";
import { AppContex } from "pages/auctionDetailPage";

const columns = [
    {
        name: "آواتار",
        center: true,
        minWidth: "150px",
        cell: (row) => (
            <Avatar
                sx={{
                    height: 40,
                    width: 40,
                    color: "white",
                }}
                src={row.user.profile_image}
            />
        ),
    },
    {
        name: "نام",
        center: true,
        minWidth: "150px",
        sortable: true,
        selector: "user.name",
        cell: (row) => <span>{row.user.name}</span>,
    },
    {
        name: "قیمت پیشنهادی",
        center: true,
        minWidth: "150px",
        sortable: true,
        selector: "price",
        cell: (row) => <span>{definePriceColor(row.price)}</span>,
    },
    {
        name: "تاریخ ثبت",
        center: true,
        minWidth: "150px",
        sortable: true,
        selector: "time",
        cell: (row) => <span>{dateConverter(row.time)}</span>,
    },
];

export const TableLog = ({ //bidHistory, isLoading, isOwner, isOnline 
}) => {

    const {bidHistory, isLoading, isOwner, isOnline} = useContext(AppContex);

    const [page, setPage] = React.useState(1);
    const dataOnPage = 5;
    const handleChange = (event, value) => {
        setPage(value);
    };
    const paginatedData = () => {
        let currentItem = (page - 1) * dataOnPage;
        return bidHistory.slice(currentItem, currentItem + dataOnPage);
    };
    return (
        <div className={cardClass}>
            <div className={headerClass}>تاریخچه قیمت‌های ثبت‌شده</div>
            <div className='p-6'>
                {isLoading ? (
                    <span className='flex h-97 justify-center items-center'>
                        <CircularProgress color='inherit' />
                    </span>
                ) : isOwner || isOnline ? (
                    <>
                        <DataTable
                            data={paginatedData()}
                            columns={columns}
                            noHeader
                            responsive
                            customStyles={tableStyles}
                            noDataComponent='آیتمی برای نشان دادن نیست.'
                        />
                        <div className='flex justify-center'>
                            <Pagination
                                count={Math.ceil(
                                    bidHistory.length / dataOnPage
                                )}
                                page={page}
                                onChange={handleChange}
                                color='primary'
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex w-full justify-center items-center'>
                            <img
                                src={notAccessible}
                                alt='img'
                                className='h-80 flex-1'
                            />
                        </div>
                        <div className='flex justify-center items-center mt-2'>
                            مشاهده این قسمت برای این نوع ممکن نیست
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
