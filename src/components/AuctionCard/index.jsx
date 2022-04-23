import Chip from "@mui/material/Chip";
import { FaRegBuilding } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BiShareAlt, BiCopy } from "react-icons/bi";
import { BsBookmarkStar } from "react-icons/bs";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { AUCTION_DETAIL_WITHOUT_SUFFIX } from "constant/routes";


export const ActionCard = ({
  imgSrc,
  title,
  remainingDay,
  companyName,
  city,
  date,
  price,
  tags,
  id
}) => {
  let navigate = useNavigate();
  return (
    <div className="mt-8 flex justify-center">
      <div className="lg:w-3/4  lg:h-52 sm:w-1/2 bg-cardColor rounded-2xl lg:grid lg:grid-cols-5 ">
        <div className="flex items-start justify-center mt-4">
          <img
            alt=""
            className="rounded-xl lg:h-3/4 lg:w-3/4 h-1/2 w-3/4 "
            src={imgSrc}
          />
        </div>
        <div className="col-span-3 mt-3 p-3 lg:p-0  ">
          <div>
            <span>{title}</span>
            <Chip
              color="secondary"
              className=" mr-2"
              label={`${remainingDay} روز مانده`}
            />
          </div>

          <div className="flex items-center">
            <FaRegBuilding />
            <span className="m-2">{companyName}</span>
            <GoLocation />
            <span className="m-2">{city}</span>
          </div>
          <div className="flex items-center">
            مهلت:
            <span className="m-2">{date}</span>
          </div>
          <div className="flex items-center">
            قیمت پایه :<span className="m-2">{price}</span>
            <span>ریال</span>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            {tags.map((label) => (
              <Chip color="primary" label={label} />
            ))}
          </div>
        </div>
        <div className="lg:grid lg:grid-rows-4 m-4 flex justify-between lg:justify-end">
          <div className="lg:row-span-3 lg:flex lg:justify-end flex m-2 gap-2">
            <BiShareAlt size={24} />
            <BsBookmarkStar size={24} />
            <BiCopy size={24} />
          </div>
          <div className="flex items-end justify-end">
            <Button
              onClick={() => navigate(`${AUCTION_DETAIL_WITHOUT_SUFFIX}/${id}`)}
              className="rounded-lg"
              variant="contained"
              size="medium"
            >
              جزئیات
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
