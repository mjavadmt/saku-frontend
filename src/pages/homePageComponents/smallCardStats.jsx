import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { formatPrice } from "utils/formatPrice";
import { CustomCard } from "components/CustomComponents/SmallCardStates/smallCard";

export const IncomeGain = ({ number }) => {
    return (
        <CustomCard>
            <div>{formatPrice(number)}</div>
            <div className='font-thin text-xs'>درآمد کسب شده</div>
            <div
                className='m-2 mt-2  bg-teal-200 rounded-full w-11 h-11 flex justify-center items-center'
                style={{ "margin-right": 180, "margin-top": -45 }}
            >
                <AttachMoneyIcon className='text-green-600' fontSize='medium' />
            </div>
        </CustomCard>
    );
};

export const NumberOfAuctionCreated = ({ number }) => {
    return (
        <CustomCard>
            <div>{number}</div>
            <div className='font-thin text-xs'> مزایده/مناقصه تولیدشده</div>
            <div
                className='m-2 mt-3  bg-purple-100 rounded-full w-11 h-11 flex justify-center items-center'
                style={{ "margin-right": 180, "margin-top": -45 }}
            >
                <GavelRoundedIcon className='text-pink-400' fontSize='medium' />
            </div>
        </CustomCard>
    );
};

export const UniqueProfileParticipated = ({ number }) => {
    return (
        <CustomCard>
            <div>{number}</div>
            <div className='font-thin text-xs'>
                تعداد شرکت در مزایده/مناقصه شما
            </div>
            <div
                className='m-2 mt-3  bg-yellow-100 rounded-full w-11 h-11 flex justify-center items-center'
                style={{ "margin-right": 180, "margin-top": -45 }}
            >
                <GroupsRoundedIcon
                    className='text-orange-400'
                    fontSize='medium'
                />
            </div>
        </CustomCard>
    );
};

export const SuccessfulAuctionParticipated = ({ number }) => {
    return (
        <CustomCard>
            <div>{number}</div>
            <div className='font-thin text-xs'>
                ‌مزایده/مناقصه‌‌های موفق شرکت‌کرده{" "}
            </div>
            <div
                className='m-2 mt-3   bg-violet-200 rounded-full w-11 h-11 flex justify-center items-center'
                style={{ "margin-right": 180, "margin-top": -45 }}
            >
                <DoneRoundedIcon
                    className='text-violet-500'
                    fontSize='medium'
                />
            </div>
        </CustomCard>
    );
};
