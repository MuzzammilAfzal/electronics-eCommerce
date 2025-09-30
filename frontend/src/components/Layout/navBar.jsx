import { Link } from "react-router-dom";
import CategoriesNavBar from "../CategoriesNavBar";


function NavBar(){

    function SignUpLogin(){
        if(localStorage.getItem("token")){
          return <button style={{ width: "17%", padding: "10px", background: "blue", color: "white" }} onClick={()=>{
          localStorage.removeItem("token")
          location.reload()
        }}>Logout</button>
        }else{
          return <Link to="/signup" style={{color:"white"}} >SIGNUP</Link>
        }
    }

    return <div className="sticky top-0 z-50">
     <nav className="flex justify-evenly items-center flex-wrap bg-gray-800 md:py-6 py-2 text-white w-full ">
           <h1 className="text-xl font-bold">Electronics Store</h1>
     <div className="flex gap-12 justify-center items-center">
         <Link to="/" className="text-white hover:text-gray-300">Home</Link>
         <Link to="/myCart" className="text-white hover:text-gray-300">Cart</Link>
         <Link to="/myOrders" className="text-white hover:text-gray-300">Orders</Link>
      <SignUpLogin />
      </div>
     </nav>
    <CategoriesNavBar/>
    </div>
    
}
export default NavBar