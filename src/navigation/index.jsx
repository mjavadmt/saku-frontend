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

const ScreenLayout = ({ elemnt, isFullscreen = false }) => {
  return isFullscreen ? { elemnt } : <Layout>{elemnt}</Layout>;
};

export const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={SPLASH} />} />
      <Route element={<ScreenLayout elemnt={<Splash />} />} path={SPLASH} />
      <Route
        element={<ScreenLayout elemnt={<CreateAuction />} />}
        path={CREATE_AUCTION}
      />
      <Route element={<ScreenLayout elemnt={<JobInfo />} />} path={JOB_INFO} />
      <Route element={<ScreenLayout elemnt={<Messages />} />} path={MESSAGES} />
      <Route
        element={<ScreenLayout elemnt={<MyAuctions />} />}
        path={MY_AUCTIONS}
      />
      <Route
        element={<ScreenLayout elemnt={<Notifications />} />}
        path={NOTIFICATIONS}
      />
      <Route element={<ScreenLayout elemnt={<Profile />} />} path={PROFILE} />
      <Route
        element={<ScreenLayout elemnt={<Transactions />} />}
        path={TRANSACTIONS}
      />
      <Route
        element={<ScreenLayout elemnt={<NotFound />} />}
        path={NOT_FOUND}
      />
      <Route
        element={<ScreenLayout elemnt={<Login />} isFullscreen={true} />}
        path={LOGIN}
      />
      <Route
        element={<ScreenLayout elemnt={<SignUp />} isFullscreen={true} />}
        path={SIGNUP}
      />
      <Route path="*" element={<Navigate to={NOT_FOUND} />} />
    </Routes>
  </BrowserRouter>
);
