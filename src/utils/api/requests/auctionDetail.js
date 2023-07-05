import { get } from "utils/api/api";

export const getBidHistory = (url) => {
    const response = get(url)
        .then((res) => res)
        .catch((e) => e);
    return response;
};

export const getAllAuctions = (url) => {
    const response = get(url)
        .then((res) => res)
        .catch((e) => e);
    return response;
};
