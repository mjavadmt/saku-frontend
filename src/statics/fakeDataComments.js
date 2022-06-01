import randomIntFromInterval from "utils/generateRandomNumber";
import profileImg_1 from "assets/img/avatar-s-4.jpg";
import profileImg_2 from "assets/img/avatar-s-6.jpg";
import profileImg_3 from "assets/img/avatar-s-8.jpg";
import profileImg_4 from "assets/img/avatar-s-11.jpg";
import profileImg_5 from "assets/img/avatar-s-13.jpg";

const images = [
  profileImg_1,
  profileImg_2,
  profileImg_3,
  profileImg_4,
  profileImg_5,
];

// const colors = ["#000030", "#28C76F", "#EA5455", "#FF9F43"];

const commentDetail = {
  isCollapsed: false,
  senderName: "Mostafa Ahmadi",
  dateSent: "2021-09-05T12:21:53.000Z",
  profileImg: images[randomIntFromInterval(0, 5)],
  content:
    "کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟ کجا اتفاق می‌افتد؟",
  replies: [
    {
      senderName: "Deep Blue",
      dateSent: "2021-09-05T12:21:53.000Z",
      content: "قطعی شد؟",
      profileImg: images[randomIntFromInterval(0, 5)],
      replies: [],
    },
    {
      senderName: "Shahrokh Mute",
      dateSent: "2021-03-03T12:21:53.000Z",
      content: "کجا؟",
      profileImg: images[randomIntFromInterval(0, 5)],
      replies: [
        {
          content: "نمیدانم",
          profileImg: images[randomIntFromInterval(0, 5)],
          senderName: "Mohammad Jeirani",
          dateSent: "2021-03-03T02:21:53.000Z",
        },
        {
          content:
            "باید با کی صحبت کرد؟ بعد از این حجم افتضاحی که به بار آوردن به نظرم باید ی جوابی براشون داشته باشن  سلا م چطوری منم نمیدونم دقیقا",
          profileImg: images[randomIntFromInterval(0, 5)],
          senderName: "Mohammad Jeirani",
          dateSent: "2021-03-03T02:21:53.000Z",
        },
      ],
    },
  ],
};

export const commentsData = [commentDetail, commentDetail];
