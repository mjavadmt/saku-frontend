import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { logout } from "requests/user";

import { api } from "utils/api";
import { LOGIN } from "constants/appRoutes";

export const LogoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // if (getItem(TOKEN)) {
      //   await logout();
      // }
      // delete api.defaults.headers.common["token"];
      // removeItem(TOKEN);
      // removeItem(REFRESH_TOKEN);
      // navigate(LOGIN);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-7-000 text-2xl h-full flex flex-col items-center justify-center">
      در حال خروج ...
    </div>
  );
};
