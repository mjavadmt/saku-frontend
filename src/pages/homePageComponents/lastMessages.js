import Avatar from "@mui/material/Avatar";
import randomIntFromInterval from "utils/generateRandomNumber";
import { useState, useEffect } from "react";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import ReactTooltip from "react-tooltip";
import { useNavigate } from "react-router-dom";
import { MESSAGES } from "constant/routes";
import { cardClass, headerClass } from "constant/cardClass";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const colors = ["#000030", "#28C76F", "#EA5455", "#FF9F43"];

const defineSize = (width) => {
  return width <= 500 ? `mr-3 w-1/2` : "mr-3 w-3/4";
};

export const LastMessages = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <div className={cardClass}>
      <div className={headerClass}>
        پیام‌های اخیر ‌
        <span data-tip data-for="messagesIcon">
          <MessageRoundedIcon
            className="cursor-pointer hover:text-purple-200"
            onClick={(e) => navigate(MESSAGES)}
          />
        </span>
        <ReactTooltip
          effect="solid"
          backgroundColor="#fff"
          textColor="#000"
          place="top"
          id="messagesIcon"
        >
          مشاهده همه
        </ReactTooltip>
      </div>
      <div className="flex p-4 m-2">
        <div className="text-gray-500 text-sm mt-2 ml-3">2 ساعت پیش</div>
        <Avatar
          sx={{
            bgcolor: colors[randomIntFromInterval(0, 3)],
            height: 40,
            width: 40,
            color: "white",
          }}
        >
          N
        </Avatar>
        <div className={defineSize(width)}>
          <div className="text-base">Nariman</div>
          <div className="text-xs font-thin whitespace-nowrap overflow-hidden text-ellipsis">
            سلام سلام سلام سلام سلام لام سلام سلام سلام سلام لام سلام سلام سلام
            سلام لام سلام سلام سلام سلام لام سلام سلام سلام سلام لام سلام سلام
            سلام سلام لام سلام سلام سلام سلام
          </div>
        </div>
      </div>
      <hr className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />
      <div className="flex p-4 m-2">
        <div className="text-gray-500 text-sm mt-2 ml-3">2 ساعت پیش</div>
        <Avatar
          sx={{
            bgcolor: colors[randomIntFromInterval(0, 3)],
            height: 40,
            width: 40,
            color: "white",
          }}
        >
          N
        </Avatar>
        <div className={defineSize(width)}>
          <div className="text-base">Nariman</div>
          <div className="text-xs font-thin whitespace-nowrap overflow-hidden text-ellipsis">
            سلام سلام سلام سلام سلام لام سلام سلام سلام سلام لام سلام سلام سلام
            سلام لام سلام سلام سلام سلام لام سلام سلام سلام سلام لام سلام سلام
            سلام سلام لام سلام سلام سلام سلام
          </div>
        </div>
      </div>
      <hr className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />
      <div className="flex p-4 m-2">
        <div className="text-gray-500 text-sm mt-2 ml-3">2 ساعت پیش</div>
        <Avatar
          sx={{
            bgcolor: colors[randomIntFromInterval(0, 3)],
            height: 40,
            width: 40,
            color: "white",
          }}
        >
          N
        </Avatar>
        <div className={defineSize(width)}>
          <div className="text-base">Nariman</div>
          <div className="text-xs font-thin whitespace-nowrap overflow-hidden text-ellipsis">
            سلام سلام سلام سلام سلام لام سلام سلام سلام سلام لام سلام سلام سلام
            سلام لام سلام سلام سلام سلام لام سلام سلام سلام سلام لام سلام سلام
            سلام سلام لام سلام سلام سلام سلام
          </div>
        </div>
      </div>
      <hr className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />
      <div className="flex p-4 m-2">
        <div className="text-gray-500 text-sm mt-2 ml-3">2 ساعت پیش</div>
        <Avatar
          sx={{
            bgcolor: colors[randomIntFromInterval(0, 3)],
            height: 40,
            width: 40,
            color: "white",
          }}
        >
          N
        </Avatar>
        <div className={defineSize(width)}>
          <div className="text-base">Nariman</div>
          <div className="text-xs font-thin whitespace-nowrap overflow-hidden text-ellipsis">
            سلام سلام سلام سلام سلام لام سلام سلام سلام سلام لام سلام سلام سلام
            سلام لام سلام سلام سلام سلام لام سلام سلام سلام سلام لام سلام سلام
            سلام سلام لام سلام سلام سلام سلام
          </div>
        </div>
      </div>
    </div>
  );
};
