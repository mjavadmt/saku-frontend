import React, { useState } from "react";
import { Navigation } from "../../navigation";
import Aside from "./aside";
import NavBar from "./navbar";
import { BrowserRouter } from "react-router-dom";

export function Layout() {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <BrowserRouter>
      <div className={`app rtl ${toggled ? "toggled" : ""}`}>
        <Aside toggled={toggled} handleToggleSidebar={handleToggleSidebar} />

        <main>
          <NavBar handleToggleSidebar={handleToggleSidebar} />
          <Navigation />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
