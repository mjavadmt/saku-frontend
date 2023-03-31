import React from "react";
import cx from "classnames";
import { Avatar } from "@mui/material";
export const TextMessage = ({ message, myImg, userImg }) => {
  const isSender =
    message.sender === localStorage.getItem("userId") ? true : false;
  return (
    <React.Fragment>
      <div
        className={cx(
          "flex",
          {
            "ml-4   justify-self-end flex-row-reverse": !isSender,
          },
          {
            "mr-4  ": isSender,
          }
        )}
      >
        <Avatar src={isSender ? myImg : userImg} className="mb-4" />
        <div
          className={cx(
            "max-w-sm w-fit break-words h-fit rounded-2xl p-4 mt-4",
            {
              "ml-4 rounded-tl-none bg-palette2 justify-self-end": !isSender,
            },
            {
              "mr-4 rounded-tr-none bg-palette3 ": isSender,
            }
          )}
        >
          <div className="text-white mx-2">{message.text}</div>
          <div
            className={cx("text-xs -mb-2  mt-2 text-white", {
              "text-right": !isSender,
              "text-left": isSender,
            })}
          >
            {new Date(message.created_at).toLocaleTimeString("fa-IR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
