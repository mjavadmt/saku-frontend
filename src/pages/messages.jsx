import { AttachFileOutlined, SendRounded } from "@mui/icons-material";
import { UserRow } from "components/MessageUserList";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { TextMessage } from "components/TextMessage";
import { MSG_LIST_1_3, USER_LIST } from "constant/chatData";
import { ImageMessage } from "components/ImageMessage";
import { useNavigate } from "react-router-dom";
import { FULL_LAYOUT_CHAT } from "constant/routes";
import { FileMessage } from "components/FileMessage";
import { Avatar, Chip } from "@mui/material";
import useChat from "hooks/useChatHook";
import { get } from "utils/api";
import { GET_USER_LIST } from "constant/apiRoutes";
import useWebSocket, { ReadyState } from "react-use-websocket";
import empty from "assets/img/Empty-Inbox.png";
export const Messages = () => {
  const endOfMsg = useRef(null);

  const [socketUrl, setSocketUrl] = useState(
    "ws://188.121.110.151:8887/chat/mjavad/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYxNDQ5NzYwLCJpYXQiOjE2NTYyNjU3NjAsImp0aSI6IjRlNzNhYTVjMzNkMjRkNGRiOTg3M2E3NTdiYmE2MGZlIiwidXNlcl9pZCI6M30.4PHLLWr3ZBFLpu4IWQsOfXVRuX-fB6590tmlPvhkbg8"
  );
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const [userName, setUserName] = useState("mjavad");
  const [msgList, setMsgList] = useState(MSG_LIST_1_3);
  // const { messages, sendMessage } = useChat(userName, msgList);
  var curDate = "1401/05/05";
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
  // const [msgList, setMsgList] = useState(MSG_LIST_1_3);
  const [userList, setUserList] = useState([]);
  const sendMsg = (e) => {
    // msgList.push({
    //   type: "text",
    //   msg: msgInput,
    //   date: `${new Date().toLocaleDateString(
    //     "fa-IR"
    //   )} ${new Date().toLocaleTimeString("fa-IR")}`,
    //   from: 1,
    //   to: 3,
    //   fromUserName: "اصغر فرهادی",
    // });
    sendMessage(msgInput);
    setMsgInput("");
    setMsgList(msgList);
    scrollToBottom();
  };
  const uploadFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
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
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
    scrollToBottom();
    get(GET_USER_LIST).then((res) => setUserList(res.data));
  }, [msgList.length, msgInput, lastMessage, setMessageHistory]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];
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
        className="flex m-12 h-4/5 rounded-3xl"
      >
        <div className="flex h-full md:w-1/3 w-full bg-sky-800 rounded-r-3xl overflow-y-auto">
          <div className="grid flex-1 w-full h-full ">
            {userList.length === 0 ? (
              <img src={empty} alt="empty" />
            ) : (
              userList.map((user) => (
                <UserRow
                  date={user.created_at}
                  unReadMsg={user.unReadMsg}
                  key={user.date + user.unReadMsg}
                  userName={user.username}
                  avatar={user.avatar}
                  // onClickRow={() => setUserName(user.username)}
                />
              ))
            )}

            <div
              onClick={() => navigate(FULL_LAYOUT_CHAT)}
              className="md:flex flex-1 cursor-pointer justify-center  z-40 self-end items-center sticky bottom-0 w-full h-10 bg-slate-800 hidden "
            >
              مشاهده تمام صفحه
            </div>
          </div>
        </div>
        <div className="md:h-full grid grid-rows-6 items-end md:w-2/3 w-0 h-0 ">
          <div className="h-full grid row-span-6  overflow-y-auto gap-2 ">
            <div className="md:flex items-center bg-slate-900 h-14 sticky rounded-b-2xl top-0 w-full hidden z-50 ">
              <Avatar
                sx={{ width: 50, height: 50 }}
                // src={userList[0].avatar}
                className="m-3 mr-6 "
              />
              <p className="flex-1 mt-4">
                جعفر رضایی
                <small className="block"> 2 دقیقه پیش</small>
              </p>
            </div>
            {msgList.map((m) => {
              if (m.date.split(" ")[0] !== curDate) {
                curDate = m.date.split(" ")[0];
                switch (m.type) {
                  case "text":
                    return (
                      <>
                        <div className="w-full flex justify-center">
                          <div className="bg-slate-600 rounded-3xl  p-2   ">
                            {m.date.split(" ")[0]}
                          </div>
                        </div>

                        <TextMessage message={m} />
                      </>
                    );
                  case "image":
                    return (
                      <>
                        <div className="bg-slate-600 rounded-xl w-20 ">
                          {m.date.split(" ")[0]}
                        </div>
                        <ImageMessage message={m} />
                      </>
                    );
                  case "file":
                    return (
                      <>
                        <div className="bg-slate-600 rounded-xl w-20 ">
                          {m.date.split(" ")[0]}
                        </div>
                        <FileMessage message={m} />
                      </>
                    );
                  default:
                    return null;
                }
              }
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
          <div className="md:flex items-center sticky bottom-0 w-full hidden ">
            <span
              role="button"
              onClick={() => fileRef.current.click()}
              className="p-2 bg-cyan-500 rounded-full m-2 "
            >
              <input
                type="file"
                onChange={uploadFile}
                className="p-2 bg-cyan-500 rounded-full m-2 "
                hidden
                ref={fileRef}
              />
              <AttachFileOutlined />
            </span>
            <span
              role="button"
              onClick={sendMsg}
              className="p-2 bg-cyan-500 rounded-full m-2 "
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
