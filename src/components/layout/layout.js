import React, { useState } from "react";
import Aside from "./aside";
import NavBar from "./navbar";

import { createTheme, ThemeProvider } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";

export const Layout = ({ children }) => {
  const [toggled, setToggled] = useState(false);
  const fontTheme = createTheme({
    typography: {
      fontFamily: ['"Dana-FaNum"'],
    },
    multilineColor: {
      color: "red",
    },
    direction: "rtl",
    palette: {
      // palette values for dark mode
      primary: deepPurple,
      divider: deepPurple[700],
      background: {
        default: deepPurple[900],
        paper: deepPurple[900],
      },
      text: {
        primary: "#fff",
        secondary: grey[500],
      },
    },
  });
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <ThemeProvider theme={fontTheme}>
      <div className={`app rtl ${toggled ? "toggled" : ""}`}>
        <Aside toggled={toggled} handleToggleSidebar={handleToggleSidebar} />

        <main className="bg-palette3 text-white">
          <NavBar handleToggleSidebar={handleToggleSidebar} />
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
