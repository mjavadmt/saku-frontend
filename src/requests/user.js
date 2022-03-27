import { post } from "utils/api";
import { LOGOUT, LOGIN, SIGNUP } from "constant/apiRoutes";
import axios from "axios";
import { host } from "utils/config";

export const logout = () =>
  post(LOGOUT)
    .then((response) => {
      return response.data;
    })
    .catch(() => {});

export const login = ({ username, password }) =>
  axios
    .post(`${host}${LOGIN}`, { username, password })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
export const signup = ({ username, password }) =>
  post(SIGNUP, { username, password })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      
      return Promise.reject(error);
    });
