import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaInstagram,
} from "react-icons/fa";

const Aside = ({ toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      rtl={true}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      className="bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Saku
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">پروفایل</span>}
          >
            mmd
          </MenuItem>
          <MenuItem icon={<FaGem />}>comment</MenuItem>
        </Menu>
        {/* <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="withSuffix"
            icon={<FaRegLaughWink />}
          >
            <MenuItem> 1</MenuItem>
            <MenuItem> 2</MenuItem>
            <MenuItem> 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            icon={<FaHeart />}
          >
            <MenuItem> 1</MenuItem>
            <MenuItem> 2</MenuItem>
            <MenuItem> 3</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaList />}>
            <MenuItem> 1 </MenuItem>
            <MenuItem> 2 </MenuItem>
            <SubMenu title={`$ 3`}>
              <MenuItem> 3.1 </MenuItem>
              <MenuItem> 3.2 </MenuItem>
              <SubMenu title={`$ 3.3`}>
                <MenuItem>3.3.1 </MenuItem>
                <MenuItem>{} 3.3.2 </MenuItem>
                <MenuItem>{} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu> */}
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
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
