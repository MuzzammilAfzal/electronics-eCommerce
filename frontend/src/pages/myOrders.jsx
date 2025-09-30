
import { useEffect, useState } from "react";
const url=import.meta.env.VITE_URL
import {  useNavigate } from "react-router-dom";
import RenderLoading from "../components/renderLoading";
import ProductOrdered from "../components/orderedProduct";



export default function MyOrders(){


    const navigate=useNavigate()
   if(localStorage.getItem("token")){

    const [myOrders,setMyOrders]=useState([])
    const [loading,setLoading]=useState(true)


    useEffect(()=>{
      setLoading(true)
      fetch(`${url}/myOrders`,{
            method:"GET",
            headers:{
                token:localStorage.getItem("token")
            }
        }).then((response)=> response.json()).then(data=>{setMyOrders(data);setLoading(false);console.log(data)})
        
        
    },[])

    return <>

       <div style={{padding:20,display:"flex",flexWrap:"wrap"}}>
            <h2 style={{width:"100%"}}>My Orders</h2>
            <RenderLoading loading={loading}/>
            {
            myOrders.map(e=>{
              return <ProductOrdered productName={e.productName} description={e.description} price={e.price} imageLink={e.imageLink} id={e._id}></ProductOrdered>
            })
           }
        </div>    
    </>
    }else{
        return<>
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