import { SendRounded } from "@mui/icons-material";
import { UserRow } from "components/MessageUserList";
import React, { useEffect, useRef, useState } from "react";
import { TextMessage } from "components/TextMessage";
import { useNavigate } from "react-router-dom";
import { MESSAGES } from "utils/constant/routes";
import { Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import useWebSocket from "react-use-websocket";
import { GET_MSG_LIST, GET_USER_LIST } from "utils/constant/apiRoutes";
import empty from "assets/img/Empty-Inbox.png";
import cx from "classnames";
import { host } from "../../utils/config";
import { getMessages, getUsers } from "utils/api/requests/chat";

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
    const [msgInput, setMsgInput] = useState("");

    const sendMsg = (e) => {
        sendJsonMessage({
            message: msgInput,
            sender: localStorage.getItem("userId"),
        });
        setMsgInput("");

        scrollToBottom();
    };

    const [userList, setUserList] = useState([]);
    const getMsgList = async (userName) => {
        const getMessagesRes = await getMessages(`${GET_MSG_LIST}${userName}/`);
        if (getMessagesRes && getMessagesRes.status === 200)
            setMessageHistory(getMessagesRes.data.reverse());
    };
    const getUserList = async () => {
        const getUsersRes = await getUsers(GET_USER_LIST);
        if (getUsersRes && getUsersRes.status === 200)
            setUserList(getUsersRes.data);
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
    }, [lastJsonMessage, setMessageHistory, userName, readyState]);
    let curDate = new Date();
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
                className='flex h-screen w-full '
            >
                <div
                    className={cx(
                        "flex relative h-screen md:w-1/3 w-full bg-sky-800  md:rounded-r-3xl overflow-y-auto",
                        { "w-0": isSmallScreen }
                    )}
                >
                    <div className='flex-1 w-full h-full'>
                        {userList.length === 0 ? (
                            <img
                                src={empty}
                                className='flex justify-center'
                                alt='empty'
                            />
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
                            onClick={() => navigate(MESSAGES)}
                            className='cursor-pointer absolute w-full h-10 rounded-t-xl text-center pt-2 bottom-0  bg-slate-800 text-white'
                        >
                            بازگشت به حالت قبل
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
                                "md:flex items-center bg-slate-900 md:h-20 sticky rounded-b-2xl top-0 w-full h-20 md:p-3 flex z-50",
                                { "w-0": !isSmallScreen }
                            )}
                        >
                            <Avatar
                                sx={{ width: 50, height: 50 }}
                                src={userImg}
                                className='m-3 mr-6 '
                            />
                            <p className='flex-1 mt-3 text-lg text-white'>
                                {userName}
                            </p>
                            <small
                                className='md:hidden cursor-pointer p-4 text-white'
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
                                            <div className='w-full flex justify-center items-center text-white'>
                                                <div className='bg-slate-600 rounded-3xl  p-2 '>
                                                    {new Date(
                                                        m.created_at
                                                    ).toLocaleDateString(
                                                        "fa-IR"
                                                    )}
                                                </div>
                                            </div>

                                            <TextMessage
                                                myImg={localStorage.getItem(
                                                    "profileImg"
                                                )}
                                                userImg={userImg}
                                                message={m}
                                            />
                                        </>
                                    );

                                    // case "image":
                                    //   return (
                                    //     <>
                                    //       <div className="bg-slate-600 rounded-xl w-20 ">
                                    //         {m.date.split(" ")[0]}
                                    //       </div>
                                    //       <ImageMessage message={m} />
                                    //     </>
                                    //   );
                                    // case "file":
                                    //   return (
                                    //     <>
                                    //       <div className="bg-slate-600 rounded-xl w-20 ">
                                    //         {m.date.split(" ")[0]}
                                    //       </div>
                                    //       <FileMessage message={m} />
                                    //     </>
                                    //   );
                                }
                                // switch (m.type) {
                                //   case "text":
                                //     return <TextMessage message={m} />;
                                //   case "image":
                                //     return <ImageMessage message={m} />;
                                //   case "file":
                                //     return <FileMessage message={m} />;
                                //   default:
                                //     return null;
                                // }
                                return (
                                    <TextMessage
                                        myImg={localStorage.getItem(
                                            "profileImg"
                                        )}
                                        userImg={userImg}
                                        message={m}
                                    />
                                );
                            })
                        ) : (
                            <img
                                src={empty}
                                className='flex justify-center w-full'
                                alt='empty'
                            />
                        )}
                        <div ref={endOfMsg}></div>
                    </div>

                    <div
                        className={cx(
                            "md:flex items-center sticky bottom-0 w-full flex text-white",
                            {
                                hidden: !isSmallScreen,
                            }
                        )}
                    >
                        {/* <span
              role="button"
              onClick={() => fileRef.current.click()}
              className="p-2 bg-cyan-500 rounded-full m-2 "
            >
              <input
                type="file"
                // onChange={uploadFile}
                className="p-2 bg-cyan-500 rounded-full m-2 "
                hidden
                ref={fileRef}
              />
              <AttachFileOutlined />
            </span> */}
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
