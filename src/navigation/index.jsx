import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotFound, Splash } from "../pages";
import { NOT_FOUND, SPLASH } from "./../constant/routes";
export const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={SPLASH} />} />
      <Route element={<Splash />} path={SPLASH} />
      <Route element={<NotFound />} path={NOT_FOUND} />
      <Route path="*" element={<Navigate to={NOT_FOUND} />} />
    </Routes>
  </BrowserRouter>
);
