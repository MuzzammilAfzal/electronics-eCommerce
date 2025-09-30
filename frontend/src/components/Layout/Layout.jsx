

import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";


function Layout() {
  return (
    <>
      <NavBar/>
      <div className="">

        <Outlet /> 
      </div>
      <Footer/>
    </>
  );
}

export default Layout;
