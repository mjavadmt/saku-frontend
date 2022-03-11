import React, { useState } from "react";
import { Navigation } from "../../navigation";
import Aside from "./aside";
import NavBar from "./navbar";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider, colors } from "@mui/material";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...{
      // palette values for dark mode
      primary: colors.deepPurple,
      divider: colors.deepPurple,
      background: {
        default: colors.purple[700],
        paper: colors.indigo[900],
      },
      text: {
        primary: colors.orange[900],
        secondary: colors.orange[300],
      },
    },
  },
});

export function Layout() {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  const theme = createTheme(getDesignTokens("dark"));

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={`app rtl ${toggled ? "toggled" : ""}`}>
          <Aside toggled={toggled} handleToggleSidebar={handleToggleSidebar} />

          <main className="bg-palette3 text-white">
            <NavBar handleToggleSidebar={handleToggleSidebar} />
            <Navigation />
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Layout;
