import { cardClass, headerClass } from "constant/cardClass";
import cx from "classnames";
import { TextField } from "@mui/material";
import { Comment } from "./comment";
import { commentsData } from "statics/fakeDataComments";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef, useState } from "react";
import "./replyStyle.css";
import ReplyIcon from "@mui/icons-material/Reply";
import ClearIcon from "@mui/icons-material/Clear";

export const CommentBox = () => {
  const [comments, setComments] = useState(commentsData);
  const [commentTxt, setCommentTxt] = useState("");
  const [reply, setReply] = useState(null);
  const endOfMsg = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && commentTxt !== "" && !event.shiftKey) {
      addComment();
      return;
    }
    if (event.key === "Enter" && event.shiftKey) {
      setCommentTxt(commentTxt + "\n");
      return;
    }
  };

  const replyClicked = (index) => {
    setReply(index);
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
    if (reply) {
      replyComment(reply, commentTxt);
      setReply(null);
      setCommentTxt("");
      return;
    }
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

  const handleReplyCommentContent = (index) => {
    if (index[1] != -1) {
      return comments[index[0]].replies[index[1]].content;
    }
    return comments[index[0]].content;
  };

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
              replyClicked={replyClicked}
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
                    replyClicked={replyClicked}
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
      {reply && (
        <div className="replyDiv p-3 bg-blue-900 rounded-t-lg mr-9">
          <div className="flex">
            <ReplyIcon fontSize="small" />
            <div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis mr-2">
              {handleReplyCommentContent(reply)}
            </div>
            <div className="grow" />
            <ClearIcon
              onClick={() => setReply(null)}
              className="text-gray-500 hover:text-white hover:cursor-pointer mr-2"
              fontSize="small"
            />
          </div>
        </div>
      )}
      <div className="flex items-center">
        <SendIcon
          className={cx({
            "hover:text-blue-300 hover:cursor-pointer": commentTxt.length !== 0,
            "mb-2": reply,
          })}
          onClick={(e) => {
            if (commentTxt.length !== 0) {
              addComment();
            }
          }}
        />

        <div
          className={cx("w-full", { "m-3 mb-2": !reply, "mr-3 ml-3": reply })}
        >
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
