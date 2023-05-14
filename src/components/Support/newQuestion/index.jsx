import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import cx from "classnames";
import { toast } from "react-toastify";
import DoneIcon from "@mui/icons-material/Done";
import { SUPPORT_API } from "utils/constant/apiRoutes";
import { addQuestion } from "utils/api/requests/support";

const NewQuestion = (props) => {
  const {
    questionInput,
    setQuestionInput,
    type,
    setType,
    setTrigger,
    trigger,
  } = props;
  const handleSubmit = async () => {
    const addRes = await addQuestion(SUPPORT_API, questionInput);
    if (questionInput != "") {
      if (addRes && addRes.status === 200) {
        setQuestionInput("");
        toast.success("پرسش شما برای ادمین های سکو ارسال شد!");
        setTrigger(!trigger);
      } else {
        setQuestionInput("");
        toast.error("مشکلی در ارسال پرسش بوجود آمده");
      }
    } else {
      toast.error("پرسشی برای ارسال وجود ندارد!");
    }
  };
  return (
    <>
      <div
        className={cx(
          "bg-cardColor p-4 grid rounded-3xl md:grid-cols-4 grid-cols-4",
          {
            " md:grid-rows-1  grid-rows-2": true,
            " md:grid-rows-2  grid-rows-4": false,
          }
        )}
      >
        <div className=" m-6 mb-0 col-span-3">
          <div className="mb-1"></div>
          <div className="mb-1">
            لطفا سوال های خود را از طریق فرم زیر برای ادمین های سکو ارسال کنید
          </div>
          <TextField
            fullWidth
            id="outlined-basic"
            rows={5}
            value={questionInput}
            multiline="true"
            onChange={(e) => setQuestionInput(e.target.value)}
          />
        </div>
        <div className=" m-6 mr-2 mb-0 pt-8">
          <Button
            fullWidth
            onClick={handleSubmit}
            variant="contained"
            className="w-1/6 h-12"
          >
            <DoneIcon className="m-2 ml-3" />
            ارسال سوال
          </Button>
          <div className="mb-1 pt-4">فیلتر سوالات:</div>
          <Select
            fullWidth
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value={1}>پاسخ داده شده</MenuItem>
            <MenuItem value={0}>بدون پاسخ</MenuItem>
            <MenuItem value={2}>همه</MenuItem>
          </Select>
        </div>
      </div>
      <div className="m-6 mb-0"></div>
    </>
  );
};

export default NewQuestion;
