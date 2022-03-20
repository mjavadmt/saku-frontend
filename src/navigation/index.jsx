import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import {
  NotFound,
  Splash,
  CreateAuction,
  JobInfo,
  Messages,
  MyAuctions,
  Notifications,
  Profile,
  Transactions,
  Login,
  SignUp,
} from "../pages";
import {
  NOT_FOUND,
  SPLASH,
  CREATE_AUCTION,
  JOB_INFO,
  MESSAGES,
  MY_AUCTIONS,
  NOTIFICATIONS,
  PROFILE,
  TRANSACTIONS,
  LOGIN,
  SIGNUP,
} from "./../constant/routes";
import { Layout } from "components/layout/layout";

const screenLayout = ({ elemnt, isFullscreen = false }) => {
  return isFullscreen ? { elemnt } : <Layout>{elemnt}</Layout>;
};

export const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={SPLASH} />} />
      <Route element={screenLayout(<Splash />)} path={SPLASH} />
      <Route element={screenLayout(<CreateAuction />)} path={CREATE_AUCTION} />
      <Route element={<JobInfo />} path={JOB_INFO} />
      <Route element={<Messages />} path={MESSAGES} />
      <Route element={<MyAuctions />} path={MY_AUCTIONS} />
      <Route element={<Notifications />} path={NOTIFICATIONS} />
      <Route element={<Profile />} path={PROFILE} />
      <Route element={<Transactions />} path={TRANSACTIONS} />
      <Route element={<NotFound />} path={NOT_FOUND} />
      <Route element={<Login />} path={LOGIN} />
      <Route element={<SignUp />} path={SIGNUP} />
      <Route path="*" element={<Navigate to={NOT_FOUND} />} />
    </Routes>
  </BrowserRouter>
);
