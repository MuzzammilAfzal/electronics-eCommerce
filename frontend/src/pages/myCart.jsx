import { useEffect, useState } from "react";

const url=import.meta.env.VITE_URL
import {  useNavigate } from "react-router-dom";
import RenderLoading from "../components/renderLoading";
import ProductCart from "../components/cartProduct";



export default function MyCart(){

    const navigate=useNavigate()
   if(localStorage.getItem("token")){

    const [myCart,setMyCart]=useState([])
    const [loading,setLoading]=useState(true)


    useEffect(()=>{
      setLoading(true)
      fetch(`${url}/myCart`,{
            method:"GET",
            headers:{
                token:localStorage.getItem("token")
            }
        }).then((response)=> response.json()).then(data=>{setMyCart(data);setLoading(false);console.log(data)})
        
        
    },[])

    return <>
       <div style={{padding:20,display:"flex",flexWrap:"wrap"}}>
            <h2 style={{width:"100%"}}>My Cart</h2>
            <RenderLoading loading={loading}/>
            {
            myCart.map(e=>{
              return <ProductCart productName={e.productName} description={e.description} price={e.price} imageLink={e.imageLink} id={e._id}></ProductCart>
            })
           }
        </div>    
    </>
    }else{
        return<>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height: 100,padding:10}}>
                
                <h4>SignUp to see your Cart Details</h4>
                 <button type="submit" style={{  padding: "10px", background: "blue", color: "white",marginLeft:10 }} onClick={()=>{
                    navigate("/signup",{replace:true})
                 }}>
                   SignUp</button>
            </div>
            </>
        
    }
}