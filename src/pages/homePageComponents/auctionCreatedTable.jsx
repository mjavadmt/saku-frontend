import DataTable from "react-data-table-component";
import { auctionCreated, categoryMapper } from "statics/fakeDataAuction";
import tableStyles from "./tableStyles";
import ReactTooltip from "react-tooltip";
import {
  dateConverter,
  defineParticipantsColor,
  definePriceColor,
} from "./tableCellFunctions";
import { cardClass, headerClass } from "constant/cardClass";

const columns = [
  {
    name: "نوع",
    center: true,
    minWidth: "100px",
    selector: (row) => row.type,
  },
  {
    name: "نام",
    center: true,
    minWidth: "150px",
    selector: (row) => row.name,
  },
  {
    name: "تعداد شرکت‌کنندگان",
    center: true,
    minWidth: "150px",
    selector: (row) => defineParticipantsColor(row.participantsCount),
  },

  {
    name: "تاریخ شروع",
    center: true,
    selector: (row) => dateConverter(row.startDate),
  },
  {
    name: "مهلت اتمام",
    center: true,
    selector: (row) => dateConverter(row.dueDate),
  },
  {
    name: "بهترین پیشنهاد",
    center: true,
    minWidth: "150px",
    selector: (row) => definePriceColor(row.bestOffer),
  },
  {
    name: "دسته‌بندی",
    center: true,
    selector: (row) => (
      <span>
        <span data-tip data-for={`category-${row.id}`}>
          {row.category}
        </span>
        <ReactTooltip
          effect="solid"
          backgroundColor="white"
          textColor="#000"
          place="top"
          id={`category-${row.id}`}
        >
          {categoryMapper[row.category]}
        </ReactTooltip>
      </span>
    ),
  },
];

let changedStyle = { ...tableStyles };
let tableObj = { ...changedStyle.table };
let tableStyle = { ...tableObj.style };
tableStyle.height = "350px";
tableObj = { ...tableObj, style: tableStyle };
changedStyle = { ...changedStyle, table: tableObj };

export const AuctionCreatedTable = () => {
  return (
    <div className={cardClass}>
      <div className={headerClass}>‌آخرین مزایده‌های ایجاد‌کرده</div>
      <div className="p-6 ">
        <DataTable
          data={auctionCreated}
          columns={columns}
          noHeader
          highlightOnHover
          responsive
          customStyles={changedStyle}
          pointerOnHover
          noDataComponent="آیتمی برای نشان دادن نیست."
        />
      </div>
    </div>
  );
};
