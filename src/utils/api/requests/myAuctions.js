import { get, post } from "../api";

export const getAllAuctions = (url) => {
    const response = get(url)
        .then((res) => res)
        .catch((e) => e);
    return response;
};
export const getAllCities = (url, id) => {
    const cityurl = url + id;
    console.log(cityurl);
    const response = get(url + id)
        .then((res) => res)
        .catch((e) => e);
    return response;
};

export const getFilteredAuctions = (url, params) => {
    const response = get(url, params)
        .then((res) => res)
        .catch((e) => e);
    return response;
};
