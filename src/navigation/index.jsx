import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Splash } from "../pages";
import { SPLASH } from "./../constant/routes";
export const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={SPLASH} />} />
      <Route element={<Splash />} path={SPLASH} />
    </Routes>
  </BrowserRouter>
);
