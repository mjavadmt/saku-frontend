import { get } from "../api";

export const getUsers = (url) => {
    const response = get(url).then((res) => res);
    return response;
};

export const getMessages = (url) => {
    const response = get(url).then((res) => res);
    return response;
};
