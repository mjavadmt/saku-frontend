import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineMessage, AiOutlineHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
import cx from "classnames";
import {
  SPLASH,
  NOTIFICATIONS,
  LOGOUT,
  MESSAGES,
} from "constant/routes";
import { get } from "utils/api";
import { PRIFILE } from "constant/apiRoutes";
const NavBar = ({ handleToggleSidebar }) => {
  const navigate = useNavigate();
  let hoverColored = "hover:text-orange-500";
  const [userImage, setUserImage] = useState();
  const [userName, setName] = useState("");
  useEffect(() => {
    get(PRIFILE).then((res) => {
      setUserImage(res.data.profile_image);
      setName(res.data.name);
      localStorage.setItem("userId", res.data.user);
      localStorage.setItem("profileImg", res.data.profile_image);
    });
  }, []);
  return (
    <div className="p-2">
      <div className="w-full  bg-navbarColor h-12 rounded-xl top-0 z-10">
        <div className="flex flex-row-reverse items-center">
          <Link className={hoverColored} to={SPLASH}>
            <AiOutlineHome className="m-3" size={24} />
          </Link>
          <Link className={hoverColored} to={MESSAGES}>
            <AiOutlineMessage className="m-3" size={24} />
          </Link>
          <Link className={hoverColored} to={NOTIFICATIONS}>
            <IoMdNotificationsOutline className="m-3" size={24} />
          </Link>
          <FiLogOut
            onClick={() => navigate(LOGOUT)}
            className={cx(hoverColored, "m-3")}
            size={24}
          />
          <div className="grow"></div>
          <div>{userName}</div>
          <Avatar
            className="m-2 mr-4 "
            sx={{ bgcolor: "orange", height: 30, width: 30, color: "white" }}
            src={userImage}
          >
            {userName[0]}
          </Avatar>
          <div
            className="btn-toggle m-3"
            onClick={() => handleToggleSidebar(true)}
          >
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
