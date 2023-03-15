import DataTable from "react-data-table-component";
import tableStyles from "./tableStyles";
import { dateConverter, defineStatusColor } from "./tableCellFunctions";
import { cardClass, headerClass } from "constant/cardClass";

const modeHanlder = (mode) => {
  if (mode === 1) return "مزایده";
  return "مناقصه";
};

const columns = [
  {
    name: "نوع",
    center: true,
    minWidth: "100px",
    selector: (row) => modeHanlder(row.mode),
  },
  {
    name: "نام",
    center: true,
    minWidth: "150px",
    selector: (row) => row.name,
  },

  {
    name: "تاریخ شروع",
    center: true,
    selector: (row) => dateConverter(row.created_at),
  },
  {
    name: "مهلت اتمام",
    center: true,
    selector: (row) => dateConverter(row.finished_at),
  },
  {
    name: " وضعیت",
    center: true,
    selector: (row) => defineStatusColor(row.success),
  },
  
];

let changedStyle = { ...tableStyles };
let tableObj = { ...changedStyle.table };
let tableStyle = { ...tableObj.style };
tableStyle.height = "215px";
tableObj = { ...tableObj, style: tableStyle };
changedStyle = { ...changedStyle, table: tableObj };
export const AuctionParticipatedTable = ({ data }) => {
  return (
    <div className={cardClass}>
      <div className={headerClass}>آخرین مزایده‌های شرکت‌کرده</div>
      <div className="p-6 ">
        <DataTable
          data={data}
          columns={columns}
          noHeader
          responsive
          customStyles={changedStyle}
          pointerOnHover
          noDataComponent="آیتمی برای نشان دادن نیست."
        />
      </div>
    </div>
  );
};
