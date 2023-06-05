import Chip from "@mui/material/Chip";
import { FaRegBuilding } from "react-icons/fa";
import { VscTypeHierarchySub } from "react-icons/vsc";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { AUCTION_DETAIL_WITHOUT_SUFFIX } from "utils/constant/routes";
import cx from "classnames";

export const ActionCard = ({
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
    ourImage,
}) => {
    let navigate = useNavigate();
    return (
        <div
            className='  lg:h-52  bg-cardColor rounded-2xl lg:grid lg:grid-cols-5 '
            style={{ maxWidth: "549.7px", margin: "10px",  }}
        >
            <div className='flex items-start justify-center '>
                <img
                    alt=''
                    className={cx(
                        "rounded-xl lg:h-full lg:w-full h-1/2 w-3/4 ",
                        {
                            "p-3": !ourImage,
                        }
                    )}
                    src={imgSrc}
                />
            </div>
            <div className='col-span-3 mt-3 mr-6 p-3 lg:p-0  '>
                <div>
                    <span>{title}</span>
                    <Chip
                        color='secondary'
                        className=' mr-2'
                        label={
                            remainingDay > 0
                                ? `${remainingDay} روز مانده`
                                : "پایان یافته"
                        }
                    />
                </div>

                <div className='flex items-center'>
                    <FaRegBuilding />
                    <span className='m-2'>{companyName}</span>
                    <VscTypeHierarchySub />
                    <span className='m-2'>
                        {mode === 1 ? "مزایده" : "مناقصه"} -{" "}
                        {isOnline ? "آنلاین" : "آفلاین"}
                    </span>
                </div>
                <div className='flex items-center'>
                    مهلت:
                    <span className='m-2'>{date}</span>
                </div>
                <div className='flex items-center'>
                    قیمت پایه :<span className='m-2'>{price}</span>
                    <span>ریال</span>
                </div>
                <div className='flex items-center flex-wrap gap-2'>
                    {tags.map((label) => (
                        <Chip color='primary' label={label} />
                    ))}
                </div>
            </div>
            <div className='lg:grid lg:grid-rows-4 m-4 flex justify-between lg:justify-end'>
                <div className='lg:row-span-3 lg:flex lg:justify-end flex m-2 gap-2'></div>
                <div className='flex items-end justify-end'>
                    <Button
                        onClick={() =>
                            navigate(
                                `${AUCTION_DETAIL_WITHOUT_SUFFIX}/${token}`
                            )
                        }
                        className='rounded-lg'
                        variant='contained'
                        size='medium'
                    >
                        جزئیات
                    </Button>
                </div>
            </div>
        </div>
    );
};
