import { post } from "utils/api";
import { LOGOUT, LOGIN, SIGNUP, FORGOT, VERIFY } from "constant/apiRoutes";
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
export const signup = ({ username, password, email }) =>
    post(SIGNUP, { username, password, email })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
export const vrify = ({ username, password, email }) =>
    post(VERIFY, { username, password, email })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
export const forgot = ({ email }) =>
    post(FORGOT, { email })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
