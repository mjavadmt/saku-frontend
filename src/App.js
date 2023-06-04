import React from "react";
import { Navigation } from "components/navigation";
import "react-pro-sidebar/dist/css/styles.css";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <React.Fragment>
      <ToastContainer
        data-testid="toast"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navigation />
    </React.Fragment>
  );
}

export default App;
