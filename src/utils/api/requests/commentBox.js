import { get, post } from "../api";

export const AddComment = (url, comment) => {
    const response = post(url, comment)
        .then((res) => res)
        .catch((e) => e);
    return response;
};

export const GetComments = (url) => {
    const response = get(url)
        .then((res) => res)
        .catch((e) => e);
    return response;
};

export const ReplyComment = (url, comment) => {
    const response = post(url, comment)
        .then((res) => res)
        .catch((e) => e);
    return response;
};
