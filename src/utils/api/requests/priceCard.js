import { post } from "../api";

export const SubmitPrice = (url, { price, time, user, auction }) => {
    const response = post(url, { price, time, user, auction })
        .then((res) => res)
        .catch((e) => e);
    return response;
};
