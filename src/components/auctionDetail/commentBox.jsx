import { cardClass, headerClass } from "constant/cardClass";
import cx from "classnames";
import { TextField } from "@mui/material";
import { Comment } from "./comment";
import { commentsData } from "statics/fakeDataComments";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef, useState } from "react";

export const CommentBox = () => {
  const [comments, setComments] = useState(commentsData);
  const [commentTxt, setCommentTxt] = useState("");
  const endOfMsg = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && commentTxt !== "") {
      addComment();
    }
  };

  const scrollToBottom = () => {
    endOfMsg.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleDirection = (e) => {
    if (e.target.value && e.target.value[0].match(/[a-z]/i))
      e.target.style.direction = "ltr";
    else e.target.style.direction = "rtl";
  };

  const addComment = () => {
    const addedComment = {
      senderName: "Dutch User",
      dateSent: `${new Date()}`,
      content: commentTxt,
      profileImg: "",
      replies: [],
    };
    let commentsTmp = [...comments, addedComment];
    setComments(commentsTmp);
    setCommentTxt("");
  };

  useEffect(() => {
    scrollToBottom();
  }, [comments.length]);

  const changeCollapseState = (index, isCollapsed) => {
    let commentsTmp = [...comments];
    let pickedCommentIdx = index[0];
    let comment = { ...comments[pickedCommentIdx] };
    comment.isCollapsed = !isCollapsed;
    commentsTmp[pickedCommentIdx] = comment;
    setComments(commentsTmp);
  };
  const replyComment = (index, content) => {
    let commentsTmp = [...comments];
    const addedComment = {
      senderName: "Dutch User",
      dateSent: `${new Date()}`,
      content,
      profileImg: "",
      replies: [],
    };
    if (index[1] !== -1) {
      let firstReplies = [...commentsTmp[index[0]].replies];
      let secondReplies = [...firstReplies[index[1]].replies, addedComment];
      let innerComment = { ...firstReplies[index[1]] };
      innerComment.replies = secondReplies;
      firstReplies[index[1]] = innerComment;
      let foundComment = { ...commentsTmp[index[0]], replies: firstReplies };
      commentsTmp[index[0]] = foundComment;
      setComments(commentsTmp);
    } else {
      let comment = { ...commentsTmp[index[0]] };
      let replies = [...comment.replies, addedComment];
      comment.replies = replies;
      commentsTmp[index[0]] = comment;
      setComments(commentsTmp);
    }
  };
  return (
    <div className={cx(cardClass, "p-4")}>
      <div className={headerClass}>دیدگاه‌ها</div>
      <div className="overflow-y-auto h-96 p-2">
        {comments.map((rootComment, index0) => (
          <React.Fragment key={`whole-${index0}`}>
            <Comment
              commentDetail={rootComment}
              index={[index0, -1, -1]}
              depth={0}
              changeCollapseState={changeCollapseState}
              replyComment={replyComment}
              key={`${index0}-1-1`}
            />
            {rootComment.isCollapsed &&
              rootComment.replies.map((secondComment, index1) => (
                <React.Fragment key={`subcomments-${index1}`}>
                  <Comment
                    commentDetail={secondComment}
                    index={[index0, index1, -1]}
                    depth={1}
                    key={`${index0}${index1}-1`}
                    replyComment={replyComment}
                  />
                  {secondComment.replies.map((thirdComment, index2) => (
                    <Comment
                      commentDetail={thirdComment}
                      index={[index0, index1, index2]}
                      depth={2}
                      key={`${index0}${index1}${index2}`}
                    />
                  ))}
                </React.Fragment>
              ))}
            {index0 !== comments.length - 1 && (
              <React.Fragment>
                <hr
                  key={`comment-${index0}`}
                  className="border-none h-px bg-gradient-to-r from-cardColor via-gray-500 to-cardColor"
                />
              </React.Fragment>
            )}
          </React.Fragment>
        ))}
        <div ref={endOfMsg}></div>
      </div>
      <div className="flex items-center">
        <SendIcon
          className={cx({
            "hover:text-blue-300 hover:cursor-pointer": commentTxt.length !== 0,
          })}
          onClick={(e) => {
            if (commentTxt.length !== 0) {
              addComment();
            }
          }}
        />
        <div className="w-full m-3 mt-5 mb-2">
          <TextField
            value={commentTxt}
            onChange={(e) => {
              setCommentTxt(e.target.value);
              toggleDirection(e);
            }}
            onKeyDown={handleKeyDown}
            className="h-12"
            fullWidth={true}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};
