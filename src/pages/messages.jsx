import { SendRounded } from "@mui/icons-material";
import { UserRow } from "components/MessageUserList";
import React, { useEffect, useRef, useState } from "react";
import { TextMessage } from "components/TextMessage";
import { MSG_LIST_1_3 } from "constant/chatData";
import { useNavigate } from "react-router-dom";
import { FULL_LAYOUT_CHAT } from "constant/routes";
import { Avatar } from "@mui/material";
import { get } from "utils/api";
import { GET_MSG_LIST, GET_USER_LIST } from "constant/apiRoutes";
import useWebSocket from "react-use-websocket";
import empty from "assets/img/Empty-Inbox.png";
import cx from "classnames";
import { useParams } from "react-router-dom";
import "assets/css/style.css";
import { host } from "utils/config";

export const Messages = () => {
    const endOfMsg = useRef(null);
    const { username } = useParams();
    const [userName, setUserName] = useState(username);
    const [userImg, setUserImg] = useState("");
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [socketUrl, setSocketUrl] = useState(
        `ws://188.121.110.151:8888/chat/${userName}/${localStorage.getItem(
            "access"
        )}`
    );

    const [messageHistory, setMessageHistory] = useState([]);

    const { sendJsonMessage, lastJsonMessage, readyState } =
        useWebSocket(socketUrl);

    const [msgList, setMsgList] = useState(MSG_LIST_1_3);
    // const { messages, sendMessage } = useChat(userName, msgList);
    // const fileRef = useRef();
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

    const [userList, setUserList] = useState([]);
    const sendMsg = (e) => {
        sendJsonMessage({
            message: msgInput,
            sender: localStorage.getItem("userId"),
        });
        setMsgInput("");
        // setMsgList(msgList);
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
    const getMsgList = (userName) => {
        get(`${GET_MSG_LIST}${userName}/`).then((res) =>
            setMessageHistory(res.data.reverse())
        );
    };
    const getUserList = () => {
        get(GET_USER_LIST).then((res) => setUserList(res.data));
    };
    useEffect(() => {
        if (lastJsonMessage !== null) {
            if (localStorage.getItem("userId") === lastJsonMessage.sender) {
                setMessageHistory([
                    ...messageHistory,
                    {
                        text: lastJsonMessage.message,
                        sender: localStorage.getItem("userId"),
                        created_at: new Date().toISOString(),
                    },
                ]);
            } else {
                setMessageHistory([
                    ...messageHistory,
                    {
                        text: lastJsonMessage.message,
                        sender: "5",
                        created_at: new Date().toISOString(),
                    },
                ]);
            }
        }
        getUserList();
        scrollToBottom();
    }, [
        msgList.length,
        lastJsonMessage,
        setMessageHistory,
        userName,
        readyState,
    ]);
    let curDate = new Date();
    return (
        <React.Fragment>
            <div className='flex m-12 h-4/5 md:rounded-3xl chat-background-image'>
                <div
                    className={cx(
                        "flex relative h-full md:w-1/3 w-full bg-sky-800  md:rounded-r-3xl overflow-y-auto",
                        { "w-0": isSmallScreen }
                    )}
                >
                    <div className='grid flex-1 w-full h-40 '>
                        {userList.length === 0 ? (
                            <img src={empty} alt='empty' />
                        ) : (
                            userList.map((user) => (
                                <UserRow
                                    date={user.created_at}
                                    unReadMsg={user.unReadMsg}
                                    key={user.date + user.unReadMsg}
                                    userName={user.username}
                                    avatar={user.profile_image}
                                    onClickRow={() => {
                                        setUserName(user.username);
                                        getMsgList(user.username);
                                        setUserImg(host + user.profile_image);
                                        setSocketUrl(
                                            `ws://188.121.110.151:8888/chat/${
                                                user.username
                                            }/${localStorage.getItem("access")}`
                                        );
                                        setIsSmallScreen(true);
                                    }}
                                />
                            ))
                        )}

                        <div
                            onClick={() => navigate(FULL_LAYOUT_CHAT)}
                            className='cursor-pointer absolute w-full h-10 rounded-t-xl text-center pt-2 bottom-0  bg-slate-800 '
                        >
                            مشاهده تمام صفحه
                        </div>
                    </div>
                </div>
                <div
                    className={cx(
                        "md:h-full grid grid-rows-6 items-end md:w-2/3  ",
                        {
                            "w-full h-full": isSmallScreen,
                            "w-0": !isSmallScreen,
                        }
                    )}
                >
                    <div
                        className={cx(
                            "h-full grid row-span-6  overflow-y-auto gap-2",
                            {
                                "w-0": !isSmallScreen,
                            }
                        )}
                    >
                        <div
                            className={cx(
                                "md:flex items-center bg-slate-900 md:h-14 sticky rounded-b-2xl top-0 w-full h-20 md:p-3 flex z-50",
                                { "w-0": !isSmallScreen }
                            )}
                        >
                            <Avatar
                                sx={{ width: 50, height: 50 }}
                                src={userImg}
                                className='m-3 mr-6 '
                            />
                            <p className='flex-1 mt-8'>
                                {userName}{" "}
                                <small className='block'> 2 دقیقه پیش</small>
                            </p>
                            <small
                                className='md:hidden cursor-pointer p-4'
                                onClick={() => setIsSmallScreen(false)}
                            >
                                بازگشت
                            </small>
                        </div>
                        {messageHistory.length !== 0 ? (
                            messageHistory.map((m) => {
                                if (
                                    new Date(m.created_at).toLocaleDateString(
                                        "fa-IR"
                                    ) !== curDate.toLocaleDateString("fa-IR")
                                ) {
                                    curDate = new Date(m.created_at);

                                    return (
                                        <>
                                            <div className='w-full flex justify-center items-center'>
                                                <div className='bg-slate-600 rounded-3xl  p-2 '>
                                                    {new Date(
                                                        m.created_at
                                                    ).toLocaleDateString(
                                                        "fa-IR"
                                                    )}
                                                </div>
                                            </div>

                                            <TextMessage
                                                message={m}
                                                myImg={localStorage.getItem(
                                                    "profileImg"
                                                )}
                                                userImg={userImg}
                                            />
                                        </>
                                    );
                                }

                                return (
                                    <TextMessage
                                        message={m}
                                        myImg={localStorage.getItem(
                                            "profileImg"
                                        )}
                                        userImg={userImg}
                                    />
                                );
                            })
                        ) : (
                            <img
                                src={empty}
                                className='flex justify-center'
                                alt='empty'
                            />
                        )}
                        <div ref={endOfMsg}></div>
                    </div>

                    <div
                        className={cx(
                            "md:flex items-center sticky bottom-0 w-full flex",
                            {
                                hidden: !isSmallScreen,
                            }
                        )}
                    >
                        <span
                            role='button'
                            onClick={sendMsg}
                            className='p-2 bg-cyan-500 rounded-full m-2 '
                        >
                            <SendRounded />
                        </span>

                        <input
                            style={{
                                textIndent: "20px",
                                direction: changeDIR(msgInput),
                            }}
                            placeholder='پیام خود را وارد کنید'
                            className='w-full h-10 mb-2 ml-3 rounded-3xl text-black'
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
