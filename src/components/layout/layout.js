import React, { useState } from "react";
import Aside from "./aside";
import { FaBars, FaHome } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Navigation } from "../../navigation";
import Avatar from "@mui/material/Avatar";

export function Layout() {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app rtl ${toggled ? "toggled" : ""}`}>
      <Aside toggled={toggled} handleToggleSidebar={handleToggleSidebar} />

      <main>
        <div className="w-full bg-lightGray h-12 rounded-xl">
          <div className="flex flex-row-reverse items-center">
            <FaHome className="m-3" size={24} />
            <AiOutlineMessage className="m-3" size={24} />
            <IoMdNotificationsOutline className="m-3" size={24} />
            <FiLogOut className="m-3" size={24} />
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
        <Navigation />
      </main>
    </div>
  );
}

export default Layout;
