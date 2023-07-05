import { get } from "utils/api/api";

export const getHomeData = (url) => {
    const response = get(url)
        .then((res) => res)
        .catch((e) => e);
    return response;
};
