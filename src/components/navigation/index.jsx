import {
    Routes,
    Route,
    Navigate,
    BrowserRouter,
    useLocation,
} from "react-router-dom";
import {
    NotFound,
    CreateAuction,
    JobInfo,
    Messages,
    MyAuctions,
    Notifications,
    Profile,
    Transactions,
    Login,
    SignUp,
    AuctionPage,
    Logout,
    AuctionDetialPage,
    LandingPage,
    Consultation,
    Category,
} from "pages";
import { Splash } from "pages/splash/index";
import { FullLayoutChat } from "pages/fullLayoutChat/index";
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
    AUCTION_PAGE,
    LOGOUT,
    AUCTION_DETAIL_PAGE,
    FORGOTPASSWORD,
    FULL_LAYOUT_CHAT,
    LANDING_PAGE,
    CONSULTATION,
    CATEGORY,
} from "utils/constant/routes";
import { Layout } from "components/layout/layout";
import { ForgotPassword } from "pages/forgotPassword";

const ScreenLayout = ({ elemnt, isFullscreen = false }) => {
    const location = useLocation();
    const path = location.pathname;
    const isLogedIn = localStorage.getItem("access") != null;
    if (
        !isLogedIn &&
        path !== LOGIN &&
        path !== SIGNUP &&
        path !== FORGOTPASSWORD &&
        path !== LANDING_PAGE
    ) {
        return <Navigate to={LOGIN} />;
    }
    return isFullscreen ? <div>{elemnt}</div> : <Layout>{elemnt}</Layout>;
};

export const Navigation = () => {
    const isLogedIn = localStorage.getItem("access") != null;
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to={SPLASH} />} />
                <Route
                    element={<ScreenLayout elemnt={<Splash />} />}
                    path={SPLASH}
                />
                <Route
                    element={<ScreenLayout elemnt={<CreateAuction />} />}
                    path={CREATE_AUCTION}
                />
                <Route
                    element={<ScreenLayout elemnt={<JobInfo />} />}
                    path={JOB_INFO}
                />
                <Route
                    element={<ScreenLayout elemnt={<Messages />} />}
                    path={MESSAGES}
                />
                <Route
                    element={
                        <ScreenLayout
                            elemnt={<FullLayoutChat />}
                            isFullscreen={true}
                        />
                    }
                    path={FULL_LAYOUT_CHAT}
                />
                <Route
                    element={<ScreenLayout elemnt={<MyAuctions />} />}
                    path={MY_AUCTIONS}
                />
                <Route
                    element={<ScreenLayout elemnt={<Consultation />} />}
                    path={CONSULTATION}
                />
                <Route
                    element={<ScreenLayout elemnt={<Category />} />}
                    path={CATEGORY}
                />
                <Route
                    element={<ScreenLayout elemnt={<AuctionPage />} />}
                    path={AUCTION_PAGE}
                />
                <Route
                    element={<ScreenLayout elemnt={<AuctionDetialPage />} />}
                    path={AUCTION_DETAIL_PAGE}
                />
                <Route
                    element={<ScreenLayout elemnt={<Notifications />} />}
                    path={NOTIFICATIONS}
                />
                <Route
                    element={<ScreenLayout elemnt={<Profile />} />}
                    path={PROFILE}
                />
                <Route
                    element={<ScreenLayout elemnt={<Transactions />} />}
                    path={TRANSACTIONS}
                />
                <Route
                    element={<ScreenLayout elemnt={<NotFound />} />}
                    path={NOT_FOUND}
                />
                <Route
                    element={
                        <ScreenLayout elemnt={<Login />} isFullscreen={true} />
                    }
                    path={LOGIN}
                />
                <Route
                    element={
                        <ScreenLayout
                            elemnt={<LandingPage />}
                            isFullscreen={true}
                        />
                    }
                    path={LANDING_PAGE}
                />
                <Route
                    element={
                        <ScreenLayout
                            elemnt={<ForgotPassword />}
                            isFullscreen={true}
                        />
                    }
                    path={FORGOTPASSWORD}
                />
                <Route
                    element={
                        <ScreenLayout elemnt={<SignUp />} isFullscreen={true} />
                    }
                    path={SIGNUP}
                />
                <Route
                    element={
                        <ScreenLayout elemnt={<Logout />} isFullscreen={true} />
                    }
                    path={LOGOUT}
                />
                <Route path='*' element={<Navigate to={NOT_FOUND} />} />
            </Routes>
        </BrowserRouter>
    );
};
