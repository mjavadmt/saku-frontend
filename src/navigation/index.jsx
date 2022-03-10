import { Routes, Route, Navigate } from "react-router-dom";
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
} from "./../constant/routes";

export const Navigation = () => (
  <Routes>
    <Route path="/" element={<Navigate to={SPLASH} />} />
    <Route element={<Splash />} path={SPLASH} />
    <Route element={<CreateAuction />} path={CREATE_AUCTION} />
    <Route element={<JobInfo />} path={JOB_INFO} />
    <Route element={<Messages />} path={MESSAGES} />
    <Route element={<MyAuctions />} path={MY_AUCTIONS} />
    <Route element={<Notifications />} path={NOTIFICATIONS} />
    <Route element={<Profile />} path={PROFILE} />
    <Route element={<Transactions />} path={TRANSACTIONS} />
    <Route element={<NotFound />} path={NOT_FOUND} />
    <Route path="*" element={<Navigate to={NOT_FOUND} />} />
  </Routes>
);
