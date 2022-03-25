import { Navigation } from "navigation";
import "react-pro-sidebar/dist/css/styles.css";
import "./styles/layout.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <ToastContainer
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
    </div>
  );
}

export default App;
