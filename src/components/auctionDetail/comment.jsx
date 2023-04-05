import React, {useReducer} from "react";
import Avatar from "@mui/material/Avatar";
import { dateConverter } from "utils/dateConverter";
import cx from "classnames";
import ReplyIcon from "@mui/icons-material/Reply";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReactTooltip from "react-tooltip";
import "./auctionDetailCard.css";
import { Input, Box, Typography, Button, Modal } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #353131",
    backgroundColor: "black",
    color: "white",
    boxShadow: 24,
    borderRadius: "15px",
    p: 4,
};

export const Comment = ({
    commentDetail,
    index,
    depth,
    changeCollapseState,
    replyComment,
    replyClicked,
}) => {
    //const [replyModal, setReplyModal] = React.useState(false);
    //const [replyValue, setReplyValue] = React.useState("");
    const reducer = (state, action) => {
        switch (action.type) {
            case "setReplyModal":
                return {replyModal: false}
            case "setReplyValue":
                return {replyValue: ""}
            case "onChange":
                {
                    const newValue = action.payload;
                    return newValue;
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, {replyModal: false, replyValue: ""});

    const toggleDirection = (e) => {
        if (e.target.value && e.target.value[0].match(/[a-z]/i))
            e.target.style.direction = "ltr";
        else e.target.style.direction = "rtl";
    };
    return (
        <React.Fragment>
            <div
                className={cx("flex mb-3 mt-3", {
                    " mr-8": depth === 1,
                    " mr-16": depth === 2,
                })}
            >
                <Avatar
                    sx={{
                        height: 40,
                        width: 40,
                        color: "white",
                    }}
                    src={
                        !!commentDetail.user && commentDetail.user.profile_image
                    }
                />
                <div className='mr-2'>
                    <div className='md:flex'>
                        <div className='md:font-bold font-light'>
                            {!!commentDetail.user && commentDetail.user.name}
                        </div>
                        <div className='text-sm text-gray-500 mr-2'>
                            {dateConverter(commentDetail.date)}
                        </div>
                    </div>
                    <div className='text-sm mt-2 text-justify'>
                        {commentDetail.content}
                    </div>

                    {depth !== 2 && (
                        <div className='flex'>
                            <div
                                data-tip
                                data-for={`reply-${index[0]}${index[1]}${index[2]}`}
                                className='text-sm text-gray-500 mr-2 mt-2 hover:text-white hover:cursor-pointer'
                                onClick={() => replyClicked(index)}
                            >
                                <ReplyIcon />
                            </div>
                            <ReactTooltip
                                className='opaque'
                                effect='float'
                                backgroundColor='white'
                                textColor='#000'
                                place='top'
                                id={`reply-${index[0]}${index[1]}${index[2]}`}
                            >
                                پاسخ
                            </ReactTooltip>
                            {depth !== 1 &&
                                commentDetail.replies.length > 0 && (
                                    <React.Fragment>
                                        <div
                                            data-tip
                                            data-for={`show-replies-${index[0]}${index[1]}${index[2]}`}
                                            className='text-sm text-gray-500 mr-6 mt-2 hover:text-white hover:cursor-pointer'
                                            onClick={(e) =>
                                                changeCollapseState(
                                                    index,
                                                    commentDetail.isCollapsed
                                                )
                                            }
                                        >
                                            {commentDetail.isCollapsed ? (
                                                <KeyboardArrowUpIcon />
                                            ) : (
                                                <KeyboardArrowDownIcon />
                                            )}
                                        </div>
                                        <ReactTooltip
                                            className='opaque'
                                            effect='float'
                                            backgroundColor='white'
                                            textColor='#000'
                                            place='top'
                                            id={`show-replies-${index[0]}${index[1]}${index[2]}`}
                                        >
                                            {commentDetail.isCollapsed
                                                ? "بستن پاسخ‌ها"
                                                : "نمایش پاسخ‌ها"}
                                        </ReactTooltip>
                                    </React.Fragment>
                                )}
                        </div>
                    )}
                </div>
            </div>
            <Modal onClose={() => dispatch({type: "setReplyModal"})} open={state.replyModal}>
                <Box sx={style}>
                    <Typography variant='h6' component='h2'>
                        ثبت پاسخ
                    </Typography>
                    <div className='mt-4'>
                        <Input
                            value={state.replyValue}
                            onChange={(e) => {
                                toggleDirection(e);
                                dispatch({type: "onChange"})
                            }}
                            autoFocus
                            className='w-full'
                            placeholder='پاسخ شما'
                        />
                    </div>
                    <div className='flex justify-end mt-4'>
                        <Button
                            onClick={() => {
                                replyComment(index, state.replyValue);
                                dispatch({type: "setReplyModal"})
                                dispatch({type: "setReplyValue"})
                            }}
                            disabled={state.replyValue.length === 0}
                            variant='contained'
                            className='submit-price'
                        >
                            ارسال
                        </Button>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    );
};
