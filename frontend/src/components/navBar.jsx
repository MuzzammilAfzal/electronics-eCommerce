import { Link } from "react-router-dom";


function NavBar(){

    function SignUpLogin(){
        if(localStorage.getItem("token")){
          return <button style={{ width: "12%", padding: "10px", background: "blue", color: "white" }} onClick={()=>{
          localStorage.removeItem("token")
          location.reload()
        }}>Logout</button>
        }else{
          return <Link to="/signup" style={{color:"white"}} >SIGNUP</Link>
        }
    }

    return <div>
     <nav style={{display: "flex",justifyContent: "space-evenly",alignItems: "center",flexWrap:"wrap",background: "#333",padding: "10px",color: "white",width:"100vw",}}>
         <h1 >Electronics Store</h1>
        <div style={{display: "flex",gap: "60px",justifyContent:'center',alignItems:"center"}}>
        <Link to="/" style={{color:"white"}}>Home</Link>
        <Link to="/myCart" style={{color:"white"}} >My Cart</Link>
        <Link to="/myOrders" style={{color:"white"}} >My Orders</Link>
        <SignUpLogin></SignUpLogin>
      </div>
    </nav>
    </div>
    
}
export default NavBar