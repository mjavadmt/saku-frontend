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

        <main className="bg-bodyBackground  text-white">
          <NavBar handleToggleSidebar={handleToggleSidebar} />

          <div className="mt-1 h-full overflow-x-hidden">
            <Navigation />
          </div>
        </main>
      </div>
    </BrowserRouter>
    
  );
}

export default Layout;
