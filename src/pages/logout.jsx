import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { logout } from "requests/user";
import { LOGIN } from "constant/routes";
import { api } from "utils/api";

export const Logout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("access")) {
        await logout();
      }
      delete api.defaults.headers.common["access"];
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      navigate(LOGIN);
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
