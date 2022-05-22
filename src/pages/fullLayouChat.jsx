import { AttachFileOutlined, SendRounded } from "@mui/icons-material";
import { UserRow } from "components/MessageUserList";
import React, { useEffect, useRef, useState } from "react";
import { TextMessage } from "components/TextMessage";
import { MSG_LIST_1_3, USER_LIST } from "constant/chatData";
import { ImageMessage } from "components/ImageMessage";
import OpenInNewOff from "@mui/icons-material/OpenInNewOff";
import { useNavigate } from "react-router-dom";
import { MESSAGES } from "constant/routes";
import { FileMessage } from "components/FileMessage";
export const FullLayoutChat = () => {
  const endOfMsg = useRef(null);
  const fileRef = useRef();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMsg();
    }
  };
  const changeDIR = (value) => {
    if (value && value[0].match(/[a-z]/i)) {
      return "ltr";
    }
    return "rtl";
  };
  const scrollToBottom = () => {
    endOfMsg.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  const [msgInput, setMsgInput] = useState("");
  const [msgList, setMsgList] = useState(MSG_LIST_1_3);
  const [userList, setUserList] = useState(USER_LIST);
  const sendMsg = (e) => {
    msgList.push({
      type: "text",
      msg: msgInput,
      date: `${new Date().toLocaleDateString(
        "fa-IR"
      )} ${new Date().toLocaleTimeString("fa-IR")}`,
      from: 1,
      to: 3,
      fromUserName: "اصغر فرهادی",
    });
    setMsgInput("");
    setMsgList(msgList);
    scrollToBottom();
  };
  const uploadFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(img);
      var msgList1 = [...msgList];
      if (img.type.includes("image")) {
        msgList1.push({
          type: "image",
          imageContent: URL.createObjectURL(img),
          date: `${new Date().toLocaleDateString(
            "fa-IR"
          )} ${new Date().toLocaleTimeString("fa-IR")}`,
          from: 1,
          to: 3,
          fromUserName: "اصغر فرهادی",
        });
        setMsgList(msgList1);
        scrollToBottom();
      } else {
        msgList1.push({
          type: "file",
          fileContent: img,
          date: `${new Date().toLocaleDateString(
            "fa-IR"
          )} ${new Date().toLocaleTimeString("fa-IR")}`,
          from: 1,
          to: 3,
          fromUserName: "اصغر فرهادی",
        });
        setMsgList(msgList1);
        scrollToBottom();
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [msgList.length, msgInput]);
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/474x/85/ec/df/85ecdf1c3611ecc9b7fa85282d9526e0.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
        className="flex h-screen w-full "
      >
        <div className="flex h-screen md:w-1/3 w-full  bg-sky-800 rounded-3xl overflow-y-auto">
          {/* <span
            className=" cursor-pointer m-3"
            onClick={() => navigate(MESSAGES)}
          >
            <OpenInNewOff color="warning" />
          </span> */}
          <div className="flex-1 w-full h-full">
            {userList.map((user) => (
              <UserRow
                date={user.date}
                unReadMsg={user.unReadMsg}
                key={user.date + user.unReadMsg}
                userName={user.userName}
                avatar={user.avatar}
              />
            ))}
            {userList.map((user) => (
              <UserRow
                date={user.date}
                unReadMsg={user.unReadMsg}
                key={user.date + user.unReadMsg}
                userName={user.userName}
                avatar={user.avatar}
              />
            ))}
            <div
              onClick={() => navigate(MESSAGES)}
              className="md:flex flex-1 cursor-pointer text-white justify-center rounded-l-md z-40 self-end items-center sticky bottom-0 w-full h-10 bg-slate-800 hidden "
            >
              بازگشت به حالت قبل
            </div>
          </div>
        </div>
        <div className="md:h-full grid grid-rows-6 items-end md:w-2/3 w-0 h-0 ">
          <div className="h-screen grid row-span-6 items-end overflow-y-auto gap-2  ">
            {msgList.map((m) => {
              switch (m.type) {
                case "text":
                  return <TextMessage message={m} />;
                case "image":
                  return <ImageMessage message={m} />;
                case "file":
                  return <FileMessage message={m} />;
                default:
                  return null;
              }
            })}
            <div ref={endOfMsg}></div>
          </div>
          <div className="text-white text-sm text-left ml-8 bg-slate-600 p-4 rounded-3xl w-32">
            در حال نوشتن...
          </div>
          <div className="md:flex items-center sticky bottom-0 w-full hidden ">
            <span
              role="button"
              onClick={() => fileRef.current.click()}
              className="p-2 bg-cyan-500 rounded-full m-2 text-white "
            >
              <input
                type="file"
                onChange={uploadFile}
                className="p-2 bg-cyan-500 rounded-full m-2  "
                hidden
                ref={fileRef}
              />
              <AttachFileOutlined />
            </span>
            <span
              role="button"
              onClick={sendMsg}
              className="p-2 bg-cyan-500 rounded-full m-2 text-white"
            >
              <SendRounded />
            </span>
            <input
              style={{
                textIndent: "20px",
                direction: changeDIR(msgInput),
              }}
              placeholder="پیام خود را وارد کنید"
              className="w-full h-10 mb-2 ml-3 rounded-3xl text-black"
              onChange={(e) => setMsgInput(e.target.value)}
              value={msgInput}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
