import { CircularProgress, Grid } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import QuizIcon from "@mui/icons-material/Quiz";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import React, { useEffect, useState } from "react";
import { GET_TICKETS, SUPPORT_API } from "utils/constant/apiRoutes";
import { getAllQuestions } from "utils/api/requests/support";
import { toast } from "react-toastify";

const AllQuestions = (props) => {
  const { type, isLoading, setIsLoading, trigger } = props;
  const [questions, setQuestions] = useState([]);
  const questionList = [
    {
      id: 1,
      question:
        "با سلام و وقت بخیر، من سه روز شده که یک مزایده ی جدید ساخته ام ولی وقتی در قسمت مزایده های من میروم هیچ نشانی از مزایده ساخته شده نیست",
      answer:
        "سلام، لطفا صفحه ی خود را رفرش کرده و یکبار دیگر فرایند ساخت مزایده را انجام دهید",
    },
    {
      id: 2,
      question: "سلام کجا میتونم عکس پروفایلمو عوض کنم؟",
      answer: "سلام. در بخش پروفایل",
    },
    {
      id: 3,
      question:
        "سلام، در مورد سوال قبل... در صفحه ی پروفایل بخشی برای تعویض عکس وجود نداشت!",
      answer: "",
    },
    {
      id: 4,
      question:
        "سلام، روز بخیر اگر یک مزایده ساخته بشه دیگه امکان تغییر حالت اون از آفلاین به آنلاین وجود نداره؟",
      answer: "سلام، خیر این امکان وجود ندارد.",
    },
    {
      id: 5,
      question:
        "چطوری از فرایند پرداخت هزینه ها از طریق سایت شما میشه اطمینان حاصل کرد؟",
      answer: "",
    },
    {
      id: 6,
      question:
        "سلام، با تشکر از سایت خوبتون امکان پرداخت آنلاین از طریق سایت رو هم اضافه کنید",
      answer: "سلام. با تشکر. بررسی میشود",
    },
    { id: 7, question: "سلام، صفحه ی چت من درست کار نمیکنه...", answer: "" },
    {
      id: 8,
      question:
        "سلام امروز به دلایلی یک اکانت جدید ساختم ولی حالا که میخوام برگردم به صفحه اصلیم در این اکانت اولی نمیتونم، چطور باید این کار رو انجام بدم؟ ",
      answer:
        "سلام در صفحه ی اصلی از طریق آیکون لاگ اوت اول از این یوزر جدید خارج شید و بعد با اطلاعات یوزر قبلی دوباره لاگین کنید.",
    },
    {
      id: 9,
      question: "سلام. امکان تغییر تم سایت از دارک به لایت رو هم اضافه کنید",
      answer: "",
    },
  ];

  const fetch = async () => {
    setIsLoading(true);
    const questionsRes = await getAllQuestions(GET_TICKETS);
    console.log("questions get res:", questionsRes);
    if (questionsRes && questionsRes.status === 200) {
      setQuestions(questionsRes?.data);
      setIsLoading(false);
    } else {
      setQuestions(questionList);
      toast.error("مشکلی در ارتباط با سرور بوجود آمده!");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [trigger]);

  const questionCard = (question) => {
    return (
      <div
        key={question?.id}
        className="bg-cardColor rounded-2xl my-auction-card h-20 w-150 m-5 p-5"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "right",
          width: 400,
          height: "auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
          >
            <QuizIcon
              fontSize="large"
              color="info"
              style={{ marginLeft: 10 }}
            />
            <p>{question?.question}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {question?.answer ? (
              <GppGoodIcon
                style={{ marginLeft: 10 }}
                fontSize="large"
                color="success"
              />
            ) : (
              <GppBadIcon
                style={{ marginLeft: 10 }}
                fontSize="large"
                color="error"
              />
            )}
            {question.answer ? <p>{question?.answer}</p> : <p>بدون پاسخ</p>}
          </div>
        </div>
      </div>
    );
  };

  const HandleList = (Q) => {
    const { question } = Q;
    if (type == 1 && question.answer != "") return questionCard(question);
    if (type == 0 && question.answer == "") return questionCard(question);
    if (type == 2) return questionCard(question);
    return;
  };

  return (
    <div data-testid="tickets-grid">
      {isLoading ? (
        <span className="flex h-full justify-center items-center mt-16  ">
          <CircularProgress color="inherit" />
        </span>
      ) : (
        <Grid container spacing={2}>
          {questionList?.length > 0 && (
            <>
              {questionList.map((question, index) => {
                return <HandleList question={question} key={index} />;
              })}
            </>
          )}
        </Grid>
      )}
    </div>
  );
};

export default AllQuestions;
