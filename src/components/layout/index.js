import React, { useState } from "react";
import Aside from "./aside";
import { FaBars } from "react-icons/fa";
import { Navigation } from "../../navigation";

export function Layout() {
  const [toggled, setToggled] = useState(true);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app rtl ${toggled ? "toggled" : ""}`}>
      <Aside
        rtl={true}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />

      <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <Navigation />
      </main>
    </div>
  );
}

export default Layout;
