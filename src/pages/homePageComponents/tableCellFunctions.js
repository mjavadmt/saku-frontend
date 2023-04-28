import { defineUnit } from "utils/formatPrice";
<<<<<<< HEAD
import { categoryMapper } from "statics/fakeDataAuction";
=======
import { categoryMapper } from "utils/statics/fakeDataAuction";
>>>>>>> Dev

const chipConstantClass = "rounded-2xl  p-1 pr-2 pl-2 text-xs";

export const attendanceStatusChip = (isPrivate) => {
<<<<<<< HEAD
  if (isPrivate)
    return (
      <div className={`${chipConstantClass} bg-purple-100 text-pink-400`}>
        خصوصی
      </div>
    );
  return (
    <div className={`${chipConstantClass} bg-teal-200 text-green-600`}>
      عمومی
    </div>
  );
};

export const typeChipMaker = (type) => {
  if (type <= 3)
    return (
      <div className={`${chipConstantClass} bg-purple-100 text-pink-400`}>
        {categoryMapper[type]}
      </div>
    );
  return (
    <div className={`${chipConstantClass} bg-teal-200 text-green-600`}>
      {categoryMapper[type]}
    </div>
  );
};

export const defineStatusColor = (status) => {
  if (status === "failed")
    return (
      <div className={`${chipConstantClass} bg-purple-100 text-pink-400`}>
        ناموفق
      </div>
    );
    if (status === "unknown")
    return (
      <div className={`${chipConstantClass} bg-yellow-100 text-orange-400`}>
        نامشخص
      </div>
    );
  return (
    <div className={`${chipConstantClass} bg-teal-200 text-green-600`}>
      برنده
    </div>
  );
};

export const defineParticipantsColor = (num) => {
  if (num < 100)
    return (
      <div className={`${chipConstantClass} bg-purple-100 text-pink-400`}>
        {num}
      </div>
    );
  if (num < 1000)
    return (
      <div className={`${chipConstantClass} bg-yellow-100 text-orange-400`}>
        {num}
      </div>
    );
  return (
    <div className={`${chipConstantClass} bg-teal-200 text-green-600`}>
      {num}
    </div>
  );
};

export const definePriceColor = (num) => {
  if (num < 100_000)
    return (
      <div className={`${chipConstantClass} bg-purple-100 text-pink-400`}>
        {`${defineUnit(num, 1)} `}
      </div>
    );
  if (num < 1_000_000)
    return (
      <div className={`${chipConstantClass} bg-indigo-300 text-indigo-700`}>
        {`${defineUnit(num, 1)} `}
      </div>
    );
  if (num < 10_000_000)
    return (
      <div className={`${chipConstantClass} bg-yellow-100 text-orange-400`}>
        {`${defineUnit(num, 1)} `}
      </div>
    );
  return (
    <div className={`${chipConstantClass} bg-teal-200 text-green-600`}>
      {`${defineUnit(num, 1)} `}
    </div>
  );
};

export const dateConverter = (date) => {
  return new Date(date).toLocaleDateString("fa-IR");
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
=======
    if (isPrivate)
        return (
            <div className={`${chipConstantClass} bg-purple-100 text-pink-400`}>
                خصوصی
            </div>
        );
    return (
        <div className={`${chipConstantClass} bg-teal-200 text-green-600`}>
            عمومی
        </div>
    );
};

export const typeChipMaker = (type) => {
    if (type <= 3)
        return (
            <div className={`${chipConstantClass} bg-purple-100 text-pink-400`}>
                {categoryMapper[type]}
            </div>
        );
    return (
        <div className={`${chipConstantClass} bg-teal-200 text-green-600`}>
            {categoryMapper[type]}
        </div>
    );
};

export const defineStatusColor = (status) => {
    if (status === "failed")
        return (
            <div className={`${chipConstantClass} bg-purple-100 text-pink-400`}>
                ناموفق
            </div>
        );
    if (status === "unknown")
        return (
            <div
                className={`${chipConstantClass} bg-yellow-100 text-orange-400`}
            >
                نامشخص
            </div>
        );
    return (
        <div className={`${chipConstantClass} bg-teal-200 text-green-600`}>
            برنده
        </div>
    );
};

export const defineParticipantsColor = (num) => {
    if (num < 100)
        return (
            <div className={`${chipConstantClass} bg-purple-100 text-pink-400`}>
                {num}
            </div>
        );
    if (num < 1000)
        return (
            <div
                className={`${chipConstantClass} bg-yellow-100 text-orange-400`}
            >
                {num}
            </div>
        );
    return (
        <div className={`${chipConstantClass} bg-teal-200 text-green-600`}>
            {num}
        </div>
    );
};

export const definePriceColor = (num) => {
    if (num < 100_000)
        return (
            <div className={`${chipConstantClass} bg-purple-100 text-pink-400`}>
                {`${defineUnit(num, 1)} `}
            </div>
        );
    if (num < 1_000_000)
        return (
            <div
                className={`${chipConstantClass} bg-indigo-300 text-indigo-700`}
            >
                {`${defineUnit(num, 1)} `}
            </div>
        );
    if (num < 10_000_000)
        return (
            <div
                className={`${chipConstantClass} bg-yellow-100 text-orange-400`}
            >
                {`${defineUnit(num, 1)} `}
            </div>
        );
    return (
        <div className={`${chipConstantClass} bg-teal-200 text-green-600`}>
            {`${defineUnit(num, 1)} `}
        </div>
    );
};

export const dateConverter = (date) => {
    return new Date(date).toLocaleDateString("fa-IR");
};

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
>>>>>>> Dev
};
