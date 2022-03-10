import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineMessage, AiOutlineHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import cx from "classnames";
import { SPLASH, NOTIFICATIONS, PROFILE } from "constant/routes";

const NavBar = ({ handleToggleSidebar }) => {
  let hoverColored = "hover:text-orange-500";

  return (
    <div className="w-full bg-lightGray h-12 rounded-xl sticky top-0">
      <div className="flex flex-row-reverse items-center">
        <Link className={hoverColored} to={SPLASH}>
          <AiOutlineHome className="m-3" size={24} />
        </Link>
        <Link className={hoverColored} to={PROFILE}>
          <AiOutlineMessage className="m-3" size={24} />
        </Link>
        <Link className={hoverColored} to={NOTIFICATIONS}>
          <IoMdNotificationsOutline className="m-3" size={24} />
        </Link>
        <FiLogOut className={cx(hoverColored, "m-3")} size={24} />
        <div className="grow"></div>
        <Avatar
          className="m-2 mr-4"
          sx={{ bgcolor: "orange", height: 30, width: 30 }}
        >
          N
        </Avatar>
        <div
          className="btn-toggle m-3"
          onClick={() => handleToggleSidebar(true)}
        >
          <FaBars />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
