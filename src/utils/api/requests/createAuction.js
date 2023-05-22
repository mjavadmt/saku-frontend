import { get, patch, post } from "utils/api/api";

export const addAuction = (url, { auctionValue, user }) => {
  const response = post(url, { ...auctionValue, user })
    .then((res) => res)
    .catch((e) => {
      return e;
    });
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
