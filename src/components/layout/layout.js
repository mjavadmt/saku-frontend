import React, { useState } from "react";
import { Navigation } from "../../navigation";
import Aside from "./aside";
import NavBar from "./navbar";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";

export function Layout() {
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
      <BrowserRouter>
        <div className={`app rtl ${toggled ? "toggled" : ""}`}>
          <Aside toggled={toggled} handleToggleSidebar={handleToggleSidebar} />

          <main className="bg-bodyBackground  text-white">
            <NavBar handleToggleSidebar={handleToggleSidebar} />

            <div className="mt-1 h-full  overflow-x-hidden">
              <Navigation />
            </div>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Layout;
