import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/navBar";
import { useEffect } from "react";
import { useState } from "react";
const url=import.meta.env.VITE_URL


export default function Buy(){
  
    const navigate=useNavigate()
   if(localStorage.getItem("token")){

    const location=useLocation()
    const query=location.search
    const id=query.replace("?","")

    const [product,setProduct]=useState({})

    useEffect(()=>{
        fetch(`${url}/buyPageProduct`,{
            method:"GET",
            headers:{
                token:localStorage.getItem("token"),
                id:id
            }
        }).then((response)=> response.json()).then(data=>{setProduct(data)})
        
    },[])

    return<>
     <NavBar/>
     <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       <div style={{border:"solid black 2px",height:550,width:400,margin:10}}>
               <div>
                   <img src={product.imageLink} style={{width:400}}></img>
               </div>
              <div style={{padding:10}}>
                 <h4 style={{margin:0}}>{product.productName}</h4>
                 <p style={{margin:0}}>{product.description}</p>
                 <b>₹{product.price}</b><br />
                <button style={{ width: "100%", padding: "10px", background: "blue", color: "white" }} onClick={async()=>{
                    const response= await fetch(`${url}/confirmOrder`,{
                        method:"POST",
                        headers:{
                            token:localStorage.getItem("token"),
                            id:product._id
                        }})
                    const data=await response.json()
                    if(response.ok){
                        alert("Order Confirmed...Thank you for Shopping")
                        navigate("/",{replace:true})
                    }else{
                        alert(data.message)
                    }
                }}>Confirm Order</button>
              </div> 
          </div>
        </div>
    </>

    }else{
        return<>
         <NavBar/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height: 100,padding:10}}>
                
                <h4>SignUp to Purchase Products</h4>
                 <button type="submit" style={{  padding: "10px", background: "blue", color: "white",marginLeft:10 }} onClick={()=>{
                    navigate("/signup",{replace:true})
                 }}>
                   SignUp</button>
            </div>
            </>
        
    }
}