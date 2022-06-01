import React from "react";
import { Avatar, Badge } from "@mui/material";

export const UserRow = ({ unReadMsg, date, userName, avatar }) => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center m-4 mt-4  text-white">
        <div className="flex gap-4 items-center">
          <Badge badgeContent={!!unReadMsg ? unReadMsg : null} color="error">
            <Avatar src={!!avatar ? avatar : null} />
          </Badge>

          <p className="flex-1">
            {userName}
            <div className="text-slate-900 w-40 font-thin text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              سلام سلام سلام سلام سشیبشسیبسشی شسیبسشیبشسشسبی سشیبشسیبشسیبشسی
              شسیبیسبسیشب شسیبسشیبشسیب
            </div>
          </p>
        </div>
        <small>{date}</small>
      </div>
      <hr className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />
    </React.Fragment>
  );
};
