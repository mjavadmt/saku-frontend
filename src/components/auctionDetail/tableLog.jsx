import { cardClass, headerClass } from "constant/cardClass";
import DataTable from "react-data-table-component";
import tableStyles from "pages/homePageComponents/tableStyles";
import Avatar from "@mui/material/Avatar";
import { definePriceColor } from "pages/homePageComponents/tableCellFunctions";
import { prices } from "statics/logEnteredPrice";
import { dateConverter } from "utils/dateConverter";
import Pagination from "@mui/material/Pagination";
import React from "react";

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
    selector: "price_entered",
    cell: (row) => <span>{definePriceColor(row.price_entered)}</span>,
  },
  {
    name: "تاریخ ثبت",
    center: true,
    minWidth: "150px",
    sortable: true,
    selector: "date_entered",
    cell: (row) => <span>{dateConverter(row.date_entered)}</span>,
  },
];

export const TableLog = () => {
  const [page, setPage] = React.useState(1);
  const dataOnPage = 5;
  const handleChange = (event, value) => {
    setPage(value);
  };
  const paginatedData = () => {
    let currentItem = (page - 1) * dataOnPage;
    return prices.slice(currentItem, currentItem + dataOnPage);
  };
  return (
    <div className={cardClass}>
      <div className={headerClass}>تاریخچه قیمت‌های ثبت‌شده</div>
      <div className="p-6">
        <DataTable
          data={paginatedData()}
          columns={columns}
          noHeader
          responsive
          customStyles={tableStyles}
          noDataComponent="آیتمی برای نشان دادن نیست."
        />
        <div className="flex justify-center">
          <Pagination
            count={Math.ceil(prices.length / dataOnPage)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
};
