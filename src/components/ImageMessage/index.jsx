import React from "react";
import cx from "classnames";
import { Avatar } from "@mui/material";
export const ImageMessage = ({ message }) => {
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
          <img
            className="rounded-xl h-40 w-52"
            alt="img"
            src={message.imageContent}
          />
          <div
            className={cx("text-xs -mb-2  mt-2 text-white", {
              "text-right": !isSender,
              "text-left": isSender,
            })}
          >
            {message.date.split(" ")[1]}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
