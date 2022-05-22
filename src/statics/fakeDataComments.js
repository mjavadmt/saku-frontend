import randomIntFromInterval from "utils/generateRandomNumber";
import profileImg_1 from "assets/img/avatar-s-4.jpg";
import profileImg_2 from "assets/img/avatar-s-6.jpg";
import profileImg_3 from "assets/img/avatar-s-8.jpg";
import profileImg_4 from "assets/img/avatar-s-11.jpg";
import profileImg_5 from "assets/img/avatar-s-13.jpg";

export const images = [
  profileImg_1,
  profileImg_2,
  profileImg_3,
  profileImg_4,
  profileImg_5,
];

const colors = ["#000030", "#28C76F", "#EA5455", "#FF9F43"];

const commentDetail1 = {
  senderName: "Mostafa Ahmadi",
  dateSent: "2021-09-05T12:21:53.000Z",
  profileImg: images[randomIntFromInterval(0, 5)],
  content:
    "کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟",
  isReplied: false,
  userColor: colors[randomIntFromInterval(0, 3)],
};

const commentDetail2 = {
  ...commentDetail1,
  content: "قطعی شد؟",
  profileImg: images[randomIntFromInterval(0, 5)],
  isReplied: true,
};

const commentDetail3 = {
  ...commentDetail1,
  content: "برگزار کننده کیست؟",
  profileImg: images[randomIntFromInterval(0, 5)],
};

export const commentsData = [
  commentDetail1,
  commentDetail2,
  commentDetail3,
  commentDetail1,
  commentDetail2,
  commentDetail1,
  commentDetail1,
];
