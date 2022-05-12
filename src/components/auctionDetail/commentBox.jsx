import { cardClass, headerClass } from "constant/cardClass";
import cx from "classnames";
import { TextField } from "@mui/material";
import { Comment } from "./comment";
import { commentsData } from "statics/fakeDataComments";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

const repliedCondition = (comments, idx) => {
  return idx < comments.length - 1 && comments[idx + 1].isReplied;
};

export const CommentBox = () => {
  // const [replied, setReplied] = React.useState(false);
  return (
    <div className={cx(cardClass, "p-4")}>
      <div className={headerClass}>دیدگاه‌ها</div>
      <div className="overflow-y-auto h-96 p-2">
        {commentsData.map((item, index) => (
          <React.Fragment>
            <Comment commentDetail={item} idx={index} />
            {index < commentsData.length - 1 &&
              !repliedCondition(commentsData, index) && (
                <hr className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor" />
              )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center">
        <SendIcon />
        <div className="w-full m-3 mt-5 mb-2">
          <div></div>
          <TextField className="h-12" fullWidth={true} size="small" />
        </div>
      </div>
    </div>
  );
};
