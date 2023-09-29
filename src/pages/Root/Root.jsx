import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
