import { cardClass } from "constant/cardClass";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

export const IncomeGain = ({ number }) => {
  return (
    <div className={cardClass}>
      <div className="p-3 flex ">
        <div className="text-white m-2 mt-3">
          <div className="font-bold ">{number}</div>
          <div className="font-thin text-xs">درآمد کسب شده</div>
        </div>
        <div className="grow"></div>
        <div className="m-2 mt-3  bg-teal-200 rounded-full w-11 h-11 flex justify-center items-center">
          <AttachMoneyIcon className="text-green-600" fontSize="medium" />
        </div>
      </div>
    </div>
  );
};

export const NumberOfAuctionCreated = ({ number }) => {
  return (
    <div className={cardClass}>
      <div className="p-3 flex ">
        <div className="text-white m-2 mt-3">
          <div className="font-bold ">{number}</div>
          <div className="font-thin text-xs"> مزایده تولیدشده</div>
        </div>
        <div className="grow"></div>
        <div className="m-2 mt-3  bg-purple-100 rounded-full w-11 h-11 flex justify-center items-center ">
          <GavelRoundedIcon className="text-pink-400" fontSize="medium" />
        </div>
      </div>
    </div>
  );
};

export const UniqueProfileParticipated = ({ number }) => {
  return (
    <div className={cardClass}>
      <div className="p-3 flex ">
        <div className="text-white m-2 mt-3">
          <div className="font-bold ">{number}</div>
          <div className="font-thin text-xs">
            {" "}
            کاربران شرکت کرده در مزایده شما
          </div>
        </div>
        <div className="grow"></div>
        <div className="m-2 mt-3  bg-yellow-100 rounded-full w-11 h-11 flex justify-center items-center ">
          <GroupsRoundedIcon className="text-orange-400" fontSize="medium" />
        </div>
      </div>
    </div>
  );
};

export const SuccessfulAuctionParticipated = ({ number }) => {
  return (
    <div className={cardClass}>
      <div className="p-3 flex ">
        <div className="text-white m-2 mt-3">
          <div className="font-bold ">{number}</div>
          <div className="font-thin text-xs">
            {" "}
            تعداد مزایده‌های موقق شرکت کرده
          </div>
        </div>
        <div className="grow"></div>
        <div className="m-2 mt-3  bg-violet-200 rounded-full w-11 h-11 flex justify-center items-center ">
          <DoneRoundedIcon className="text-violet-500" fontSize="medium" />
        </div>
      </div>
    </div>
  );
};
