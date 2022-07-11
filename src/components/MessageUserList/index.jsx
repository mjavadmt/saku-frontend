import React from "react";
import { Avatar, Badge } from "@mui/material";
import { host } from "utils/config";

export const UserRow = ({ unReadMsg, date, userName, avatar, onClickRow }) => {
  return (
    <React.Fragment>
      <div
        onClick={onClickRow}
        className="flex justify-between items-center m-4 mt-4 cursor-pointer  text-white"
      >
        <div className="flex gap-4 items-center">
          <Badge badgeContent={!!unReadMsg ? unReadMsg : null} color="error">
            <Avatar src={host + avatar} />
          </Badge>

          <p className="flex-1">
            {userName}
            {/* <div className="text-slate-900 w-40 font-thin text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              سلام سلام سلام سلام سشیبشسیبسشی شسیبسشیبشسشسبی سشیبشسیبشسیبشسی
              شسیبیسبسیشب شسیبسشیبشسیب
            </div> */}
          </p>
        </div>
        <small>{new Date(date).toLocaleDateString("fa-IR")}</small>
      </div>
      <hr className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />
    </React.Fragment>
  );
};
