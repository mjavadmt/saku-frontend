import { get, post, put } from "utils/api/api";

export const getProfileInfo = (getprofile, username) => {
  const response = get(getprofile + "/" + username)
    .then((res) => res)
    .catch((e) => e);
  return response;
};

export const deleteImg = (url) => {
  const response = post(url)
    .then((res) => res)
    .catch((e) => e);
  return response;
};

export const addImg = (url, isUploadImg) => {
  const response = put(url, isUploadImg)
    .then((res) => res)
    .catch((e) => e);
  return response;
};
