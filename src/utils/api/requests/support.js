import { get, post } from "../api";

export const getAllQuestions = (url) => {
  const response = get(url)
    .then((res) => res)
    .catch((e) => e);
  return response;
};

export const addQuestion = (url, params) => {
  const response = post(url, params)
    .then((res) => res)
    .catch((e) => e);
  return response;
};
