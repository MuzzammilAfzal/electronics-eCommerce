import { Link } from "react-router-dom";


function NavBar(){



    return <div>
     <nav style={{display: "flex",justifyContent: "space-between",alignItems: "center",background: "#333",padding: "40px",color: "white",}}>
         <h1 >Electronics Store</h1>
        <div style={{display: "flex",gap: "100px",}}>
        <Link to="/" style={{color:"white"}}>Home</Link>
        <Link to="/myCart" style={{color:"white"}} >My Cart</Link>
        <Link to="/myOrders" style={{color:"white"}} >My Orders</Link>
        <Link to="/signup" style={{color:"white"}} >SIGNUP</Link>
      </div>
    </nav>
    </div>
    
}
export default NavBar