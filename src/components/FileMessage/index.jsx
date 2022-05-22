import React from "react";
import cx from "classnames";
import { Avatar } from "@mui/material";
import { InsertDriveFile } from "@mui/icons-material";
export const FileMessage = ({ message }) => {
  const isSender = message.from === 1 ? true : false;
  return (
    <React.Fragment>
      <div
        className={cx(
          "flex",
          {
            "ml-4  justify-self-end flex-row-reverse": !isSender,
          },
          {
            "mr-4": isSender,
          }
        )}
      >
        <Avatar className="mb-4" />
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
          <div
            className={cx("text-white text-xs mb-1 font-semibold", {
              "text-left": !isSender,
            })}
          >
            {isSender ? message.fromUserName : message.toUserName}
          </div>
          <div className="flex justify-around w-auto">
            <a
              className="bg-slate-800 rounded-full p-2 m-2 h-10 w-10 text-center ml-4 my-2 text-white "
              href={URL.createObjectURL(message.fileContent)}
            >
              <InsertDriveFile />
            </a>
            <p className="my-2 flex-1 text-white">
              {message.fileContent.name}
              <small className="block">{message.fileContent.size}kb</small>
            </p>
          </div>

          {/* <a className="rounded-xl h-40 w-52" href={message.fileContent} /> */}
          <div
            className={cx("text-xs -mb-2  mt-2 text-white", {
              "text-right": !isSender,
              "text-left": isSender,
            })}
          >
            {message.date}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
