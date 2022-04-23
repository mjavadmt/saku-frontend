import { cardClass } from "constant/cardClass";
import cx from "classnames";
import { typeChipMaker, attendanceStatusChip } from "pages/homePageComponents/tableCellFunctions";

export const AuctionDetailCard = ({ auction }) => {
  return (
    <div className={cx(cardClass, "grid grid-cols-2")}>
      <img
        className="p-3 rounded-3xl h-40 w-11/12"
        src={auction.img}
        alt="عکس جزئیات مزایده"
      />
      <div className="p-0">
        <div className="flex m-3 mr-1">
          <div className="font-bold"> عنوان :‌ </div>
          <div className="mr-2">{auction.title}</div>
        </div>
        <div className="flex m-3 mr-1">
          <div className="font-bold"> نوع : </div>
          <div className="mr-2">{typeChipMaker(auction.type)}</div>
        </div>
        <div className="flex m-3 mr-1">
          <div className="font-bold"> شرکت : </div>
          <div className="mr-2">{attendanceStatusChip(auction.private)}</div>
        </div>
      </div>
    </div>
  );
};
