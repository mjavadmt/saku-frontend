import React from "react";
import useState from "react";
import { Navigation } from "navigation";
import "react-pro-sidebar/dist/css/styles.css";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
    return (
        <React.Fragment>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
            <Navigation />
        </React.Fragment>
    );
}

export default App;
