import { cardClass } from "utils/constant/cardClass";

//custom small card
export const CustomCard = ({ number, children, children2, ...attributes }) => {
    return (
        <div className={cardClass}>
            <div className='p-3 flex '>
                <div className='text-white m-2 mt-3'>
                    <div className='font-bold '>{children}</div>
                    <div className='font-thin text-xs'>{children2}</div>
                </div>
                <div className='grow'></div>
                <div {...attributes}></div>
            </div>
        </div>
    );
};

// import { cardClass } from "utils/constant/cardClass";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
// import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
// import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
// import { formatPrice } n from "utils/formatPrice";
// import { CustomCard } from "components/CustomComponents/SmallCardStates/smallCard";

// export const IncomeGain = ({ number }) => {
//     return (
//         <div className={cardClass}>
//             <div className='p-3 flex '>
//                 <div className='text-white m-2 mt-3'>
//                     <div className='font-bold '>{formatPrice(number)}</div>
//                     <div className='font-thin text-xs'>درآمد کسب شده</div>
//                 </div>
//                 <div className='grow'></div>
//                 <div className='m-2 mt-3  bg-teal-200 rounded-full w-11 h-11 flex justify-center items-center'>
//                     <AttachMoneyIcon
//                         className='text-green-600'
//                         fontSize='medium'
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export const NumberOfAuctionCreated = ({ number }) => {
//     return (
//         <div className={cardClass}>
//             <div className='p-3 flex '>
//                 <div className='text-white m-2 mt-3'>
//                     <div className='font-bold '>{number}</div>
//                     <div className='font-thin text-xs'>
//                         {" "}
//                         مزایده/مناقصه تولیدشده
//                     </div>
//                 </div>
//                 <div className='grow'></div>
//                 <div className='m-2 mt-3  bg-purple-100 rounded-full w-11 h-11 flex justify-center items-center '>
//                     <GavelRoundedIcon
//                         className='text-pink-400'
//                         fontSize='medium'
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export const UniqueProfileParticipated = ({ number }) => {
//     return (
//         <div className={cardClass}>
//             <div className='p-3 flex '>
//                 <div className='text-white m-2 mt-3'>
//                     <div className='font-bold '>{number}</div>
//                     <div className='font-thin text-xs'>
//                         {" "}
//                         تعداد شرکت در مزایده/مناقصه شما
//                     </div>
//                 </div>
//                 <div className='grow'></div>
//                 <div className='m-2 mt-3  bg-yellow-100 rounded-full w-11 h-11 flex justify-center items-center '>
//                     <GroupsRoundedIcon
//                         className='text-orange-400'
//                         fontSize='medium'
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export const SuccessfulAuctionParticipated = ({ number }) => {
//     return (
//         <div className={cardClass}>
//             <div className='p-3 flex '>
//                 <div className='text-white m-2 mt-3'>
//                     <div className='font-bold '>{number}</div>
//                     <div className='font-thin text-xs'>
//                         {" "}
//                         ‌مزایده/مناقصه‌‌های موفق شرکت‌کرده
//                     </div>
//                 </div>
//                 <div className='grow'></div>
//                 <div className='m-2 mt-3  bg-violet-200 rounded-full w-11 h-11 flex justify-center items-center '>
//                     <DoneRoundedIcon
//                         className='text-violet-500'
//                         fontSize='medium'
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };
