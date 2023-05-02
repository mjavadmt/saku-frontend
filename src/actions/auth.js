import { setAPIHeader } from "utils/api/api";
import { AUTH } from "../constants/actionTypes";
import { login } from "utils/api/requests/user";
import { PROFILE, SPLASH } from "utils/constant/routes";
import { EMPTY_ERROR_MESSAGE, LOGIN_FAILED } from "utils/constant/errorText";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const usertmp = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    if (!!usertmp.username || !!usertmp.password) {
      login(usertmp)
        .then((response) => {
          localStorage.setItem("access", response.access);
          localStorage.setItem("refresh", response.refresh);
          localStorage.setItem("username", usertmp.username);
          setAPIHeader();
          dispatch({ type: AUTH, payload: { isLogedIn: true } });
          navigate(SPLASH);
        })
        .catch((error) => toast.error(LOGIN_FAILED));
    } else {
      toast.error(EMPTY_ERROR_MESSAGE);
    }
  } catch (error) {
    console.log(error);
  }
};
