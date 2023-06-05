import { get, post } from "../api";

export const getAllQuestions = (url) => {
  const response = get(url)
    .then((res) => res)
    .catch((e) => e);
  return response;
};

export const addQuestion = (url, ticket) => {
  console.log("ticket is:", ticket);
  const response = post(url, ticket)
    .then((res) => res)
    .catch((e) => e);
  return response;
};
