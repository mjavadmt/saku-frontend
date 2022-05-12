import Avatar from "@mui/material/Avatar";
import { dateConverter } from "utils/dateConverter";
import cx from "classnames";

export const Comment = ({ commentDetail, idx }) => {
  return (
    <div
      className={cx("flex mb-3 mt-3", {
        "mr-8": commentDetail.isReplied,
      })}
    >
      <Avatar
        sx={{
          bgcolor: commentDetail.userColor,
          height: 40,
          width: 40,
          color: "white",
        }}
        src={commentDetail.profileImg}
      />
      <div className="mr-2">
        <div className="md:flex">
          <div className="md:font-bold font-light">
            {commentDetail.senderName}
          </div>
          <div className="text-sm text-gray-500 mr-2">
            {dateConverter(commentDetail.dateSent)}
          </div>
        </div>
        <div className="text-sm mt-2 text-justify">{commentDetail.content}</div>
        {!commentDetail.isReplied && (
          <div className="text-sm text-gray-500 mt-2 hover:text-white hover:cursor-pointer">
            پاسخ
          </div>
        )}
      </div>
    </div>
  );
};
