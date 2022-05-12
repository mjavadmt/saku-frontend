import React from "react";
import { Avatar } from "@mui/material";

export const UserRow = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center m-4 ">
        <div className="flex gap-4 items-center">
          <Avatar />
          <p>علی رضوی</p>
        </div>
        <small>دو دقیقه پیش</small>
      </div>
      <hr className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />
    </React.Fragment>
  );
};
