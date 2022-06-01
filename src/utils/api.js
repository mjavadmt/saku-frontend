import axios from "axios";

import { host } from "utils/config";
import { toast } from "react-toastify";
import { CONNECTION_ERROR } from "constant/errorText";
import { redirect } from "utils/redirect";
import { LOGOUT } from "constant/routes";

export const api = axios.create({
  baseURL: host,
  headers: {},
});

export const setAPIHeader = () => {
  api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "access"
  )}`;
};

setAPIHeader();
api.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    toast.error(CONNECTION_ERROR);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      redirect(LOGOUT);
    }
    if (error?.response?.status === 504) {
      toast.error(CONNECTION_ERROR);
      return Promise.reject(error);
    }

    if (!!error.response.data && !!error.response.data.message) {
      toast.error(error.response.data.message);
    }
    return Promise.reject(error);
  }
);

export const get = api.get;
export const post = api.post;
export const put = api.put;
export const remove = api.delete;

