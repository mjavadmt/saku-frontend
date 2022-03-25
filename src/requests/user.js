import { post } from "utils/api";
import { LOGOUT } from "constant/apiRoutes";

export const logout = () =>
  post(LOGOUT)
    .then((response) => {
      return response.data;
    })
    .catch(() => {});
