import { Link } from "react-router-dom";
import { useState } from "react";
import CategoriesNavBar from "../CategoriesNavBar";
import Search from "../Search";


function NavBar(){

  const [isMd, setIsMd] = useState(window.innerWidth >= 768);

    function LoginButton(){
        if(localStorage.getItem("token")){
          return <button className="w-fit px-2 md:px-4 bg-blue-500 rounded-2xl text-white" onClick={()=>{
          localStorage.removeItem("token")
          localStorage.removeItem("product")
          location.reload()
        }}>Logout</button>
        }else{
          return <Link to="/login" className="text-white hover:bg-red-400 rounded-2xl px-2" >Login</Link>
        }
    }

    return <div className="sticky top-0 z-50  ">
     <nav className="flex justify-evenly items-center flex-wrap bg-gray-800 md:py-0 text-white w-full h-24  ">
           <h1 className="text-xl font-bold">Electronics Store</h1>
           {isMd && <Search/>}
     <div className=" flex  gap-10 justify-center items-center">
         <Link to="/" className="text-white hover:bg-blue-400 rounded-2xl px-2 ">Home</Link>
         <Link to="/myCart" className="text-white hover:bg-blue-400 rounded-2xl px-2">Cart</Link>
         <Link to="/myOrders" className="text-white hover:bg-blue-400 rounded-2xl px-2">Orders</Link>
      <LoginButton/>
      </div>
     </nav>
     {!isMd && <div className="bg-gray-600 border-white border-2 text-white flex justify-center py-2">
             <Search/>
           </div>}
    <CategoriesNavBar/>
    </div>
    
}
export default NavBar