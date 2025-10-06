

import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";
import CategoriesNavBar from "../CategoriesNavBar";


function Layout() {
  return (
    <>
      <NavBar/>
      <CategoriesNavBar/>
      <div className="">

        <Outlet /> 
      </div>
      
      <Footer/>
    </>
  );
}

export default Layout;
