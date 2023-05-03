import React from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import { FaInstagram } from "react-icons/fa";
import logo from "assets/img/gavel.svg";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import GavelIcon from "@mui/icons-material/Gavel";
import Person from "@mui/icons-material/Person";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { useNavigate } from "react-router-dom";
import {
    SPLASH,
    CREATE_AUCTION,
    MESSAGES,
    MY_AUCTIONS,
    PROFILE,
    AUCTION_PAGE,
    CONSULTATION,
    CITYAUCTION,
} from "utils/constant/routes";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Aside = ({ toggled, handleToggleSidebar }) => {
    const navigate = useNavigate();
    return (
        <ProSidebar
            rtl={true}
            toggled={toggled}
            breakPoint='md'
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    onClick={(e) => navigate(SPLASH)}
                    className='flex cursor-pointer'
                >
                    <div
                        style={{
                            padding: "24px",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            fontSize: 18,
                            letterSpacing: "1px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            color: "#8ba8f5",
                        }}
                    >
                        سکو
                    </div>
                    <img src={logo} alt='hammer' height='40' width='40' />
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape='circle'>
                    <MenuItem
                        icon={<Person />}
                        active={window.location.pathname === PROFILE}
                        onClick={(e) => navigate(PROFILE)}
                    >
                        پروفایل
                    </MenuItem>

                    <MenuItem
                        active={window.location.pathname === MESSAGES}
                        onClick={(e) => navigate(MESSAGES)}
                        icon={<InsertCommentIcon />}
                    >
                        پیام‌ها
                    </MenuItem>
                </Menu>
                <Menu iconShape='circle'>
                    <MenuItem
                        active={window.location.pathname === AUCTION_PAGE}
                        onClick={(e) => navigate(AUCTION_PAGE)}
                        icon={<GavelIcon fontSize='small' />}
                    >
                        مزایده‌ها / مناقصه ها
                    </MenuItem>
                    <MenuItem
                        active={window.location.pathname === CREATE_AUCTION}
                        onClick={(e) => navigate(CREATE_AUCTION)}
                        icon={<AddOutlinedIcon fontSize='small' />}
                    >
                        ایجاد مزایده / مناقصه
                    </MenuItem>

                    <MenuItem
                        active={window.location.pathname === MY_AUCTIONS}
                        onClick={(e) => navigate(MY_AUCTIONS)}
                        icon={<LocalActivityIcon fontSize='small' />}
                    >
                        مزایده‌/ مناقصه های من
                    </MenuItem>

                    <MenuItem
                        active={window.location.pathname === CONSULTATION}
                        onClick={(e) => navigate(CONSULTATION)}
                        icon={<QuestionAnswerIcon fontSize='small' />}
                    >
                        مشاوره
                    </MenuItem>
                    <MenuItem
                        active={window.location.pathname === CITYAUCTION}
                        onClick={(e) => navigate(CITYAUCTION)}
                        icon={<ApartmentIcon fontSize='small' />}
                    >
                        مزایده و مناقصه به تفکیک شهر{" "}
                    </MenuItem>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: "center" }}>
                <div
                    className='sidebar-btn-wrapper'
                    style={{
                        padding: "20px 24px",
                    }}
                >
                    <a
                        href='https://github.com/azouaoui-med/react-pro-sidebar'
                        target='_blank'
                        className='sidebar-btn'
                        rel='noopener noreferrer'
                    >
                        <FaInstagram />
                        <span
                            style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                            }}
                        ></span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Aside;
