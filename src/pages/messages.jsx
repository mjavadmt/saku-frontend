import { SendRounded } from "@mui/icons-material";
import { UserRow } from "components/MessageUserList";
import cx from "classnames";
import { useEffect, useRef, useState } from "react";
export const Messages = () => {
  const endOfMsg = useRef(null);
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
  const sendMsg = (e) => {
    msgList.push({
      msg: msgInput,
      date: `${new Date().toLocaleDateString(
        "fa-IR"
      )} ${new Date().toLocaleTimeString("fa-IR")}`,
      isSender: true,
    });
    setMsgInput("");
    setMsgList(msgList);
    scrollToBottom();
  };
  const [msgInput, setMsgInput] = useState("");
  const [msgList, setMsgList] = useState([
    { msg: "سلام بیستون بیستون", date: "1401/02/02 20:30", isSender: true },
    { msg: "سلام بیستون بیستون", date: "1401/02/02 20:30", isSender: false },
    { msg: "سلام بیستون بیستون", date: "1401/02/02 20:30", isSender: true },
    { msg: "سلام بیستون بیستون", date: "1401/02/02 20:30", isSender: false },
    { msg: "سلام بیستون بیستون", date: "1401/02/02 20:30", isSender: true },
    { msg: "سلام بیستون بیستون", date: "1401/02/02 20:30", isSender: false },
    { msg: "سلام بیستون بیستون", date: "1401/02/02 20:30", isSender: true },
    { msg: "سلام بیستون بیستون", date: "1401/02/02 20:30", isSender: false },
    { msg: "سلام بیستون بیستون", date: "1401/02/02 20:30", isSender: true },
    { msg: "سلام بیستون بیستون", date: "1401/02/02 20:30", isSender: false },
  ]);
  useEffect(() => {
    scrollToBottom();
  }, [msgList.length, msgInput]);
  return (
    <div className="mt-8 h-full bg-cardColor rounded-3xl">
      <div className="flex m-12 h-4/5 rounded-3xl bg-slate-400">
        <div className="h-full w-1/3 bg-sky-800 rounded-3xl overflow-y-auto">
          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />
        </div>
        <div className="h-full grid grid-rows-6 items-end w-2/3 ">
          <div className="h-full grid row-span-6 items-end overflow-y-auto gap-2 ">
            {msgList.map((m) => (
              <div
                className={cx(
                  "max-w-sm w-fit break-words h-fit rounded-2xl p-4",
                  {
                    "ml-4 rounded-tl-none bg-green-600 justify-self-end":
                      !m.isSender,
                  },
                  {
                    "mr-4 rounded-tr-none bg-amber-200 ": m.isSender,
                  }
                )}
              >
                <div className="text-gray-700">{m.msg}</div>
                <div className="text-xs flex justify-end text-bodyBackground">
                  {m.date}
                </div>
              </div>
            ))}
            <div ref={endOfMsg}></div>
          </div>
          <div className="flex items-center sticky bottom-0 w-full ">
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
    </div>
  );
};
