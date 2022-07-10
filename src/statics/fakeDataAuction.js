// تیبل مزایده‌/مناقصه‌های شرکت کرده
// ۰- نوع ۱ - اسم  ۲- تاریخ ایجاد ۳-  مهلت ثبت قیمت ۳ - دسته‌بندی

// تیبل مزایده‌/مناقصه‌های  ایجادشده:
// ۰-نوع ۱-اسم ۲-تاریخ ایجاد ۳- تعداد شرکت‌کنندگان ۴- بیشترین/کمترین قیمت ۵-مهلت پایان

export const categoryMapper = {
  1: "مزایده‌:به صورت آفلاین",
  // 2: "مزایده:به صورت آنلاین",
  // 3: "مزایده‌:به‌روز‌رسانی دلخواه",
  2: "مناقصه:به صورت آفلاین",
  // 5: "مناقصه:به صورت آنلاین",
  // 6: "مناقصه:به‌روز‌رسانی دلخواه",
};

export const auctionCreated = [
  {
    id: 1,
    type: "مزایده",
    name: "مصالح ساختمانی",
    participantsCount: 24,
    bestOffer: 12400,
    startDate: "2021-09-05T12:29:53.000Z",
    dueDate: "2021-09-05T12:29:53.000Z",
    category: 1,
  },
  {
    id: 2,
    type: "مناقصه",
    name: " املاک",
    participantsCount: 524,
    bestOffer: 124000,
    startDate: "2021-09-05T12:29:53.000Z",
    dueDate: "2021-09-05T12:29:53.000Z",
    category: 5,
  },
  {
    id: 3,
    type: "مزایده",
    name: "ماشین",
    participantsCount: 1024,
    bestOffer: 7400000,
    startDate: "2021-09-05T12:29:53.000Z",
    dueDate: "2021-09-05T12:29:53.000Z",
    category: 2,
  },
  {
    id: 4,
    type: "مناقصه",
    name: "پیمانکاری شهرداری",
    participantsCount: 1024,
    bestOffer: 12400000,
    startDate: "2021-09-05T12:29:53.000Z",
    dueDate: "2021-09-05T12:29:53.000Z",
    category: 2,
  },
  {
    id: 5,
    type: "مناقصه",
    name: "پیمانکاری شهرداری",
    participantsCount: 1024,
    bestOffer: 12400000,
    startDate: "2021-09-05T12:29:53.000Z",
    dueDate: "2021-09-05T12:29:53.000Z",
    category: 2,
  },
];

export const auctionParticipated = [
  {
    id: 1,
    type: "مزایده",
    name: "مصالح ساختمانی",
    startDate: "2021-09-05T12:29:53.000Z",
    dueDate: "2021-09-05T12:29:53.000Z",
    status: "win",
    category: 1,
  },
  {
    id: 2,
    type: "مناقصه",
    name: " املاک",
    startDate: "2021-09-05T12:29:53.000Z",
    dueDate: "2021-09-05T12:29:53.000Z",
    status: "fail",
    category: 5,
  },
  {
    id: 3,
    type: "مزایده",
    name: "ماشین",
    startDate: "2021-09-05T12:29:53.000Z",
    dueDate: "2021-09-05T12:29:53.000Z",
    status: "fail",
    category: 2,
  },
  {
    id: 4,
    type: "مزایده",
    name: "مصالح ساختمانی",
    startDate: "2021-09-05T12:29:53.000Z",
    dueDate: "2021-09-05T12:29:53.000Z",
    status: "win",
    category: 1,
  },
];
