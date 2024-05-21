import { Outlet } from "react-router-dom";
import Navigation from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navigation />
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
