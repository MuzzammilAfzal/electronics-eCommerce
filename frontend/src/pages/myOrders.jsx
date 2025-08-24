import NavBar from "../components/navBar";
import { useEffect, useState } from "react";
const url=import.meta.env.VITE_URL
import Product from "../components/product"
import { replace, useNavigate } from "react-router-dom";



export default function MyOrders(){


    const navigate=useNavigate()
   if(localStorage.getItem("token")){

    const [myOrders,setMyOrders]=useState([])

    useEffect(()=>{
      fetch(`${url}/myOrders`,{
            method:"GET",
            headers:{
                token:localStorage.getItem("token")
            }
        }).then((response)=> response.json()).then(data=>{setMyOrders(data);console.log(data)})
        
        
    },[])

    return <>
     <NavBar/>
       <div style={{padding:20,display:"flex",flexWrap:"wrap"}}>
            <h2 style={{width:"100%"}}>My Orders</h2>
            {
            myOrders.map(e=>{
              return <Product productName={e.productName} description={e.description} price={e.price} imageLink={e.imageLink} id={e._id}></Product>
            })
           }
        </div>    
    </>
    }else{
        return<>
        <NavBar/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height: 100,padding:10}}>
                
                <h4>SignUp to see your Order Details</h4>
                 <button type="submit" style={{  padding: "10px", background: "blue", color: "white",marginLeft:10 }} onClick={()=>{
                    navigate("/signup",{replace:true})
                 }}>
                   SignUp</button>
            </div>
            </>
        
    }
}