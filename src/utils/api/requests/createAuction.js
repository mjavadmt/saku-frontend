import { get, patch, post } from "utils/api/api";

export const addAuction = (url, { auctoinValue, user }) => {
    const response = post(url, { auctoinValue, user })
        .then((res) => res)
        .catch((e) => e);
    return response;
};

export const updateAuction = (url, formData) => {
    patch(url, formData);
};

export const getCategories = (url) => {
    const response = get(url)
        .then((res) => res)
        .catch((e) => e);
    return response;
};
