import React from "react";
import ReactDOM from "react-dom";

import "assets/scss/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/fontiran.css";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
