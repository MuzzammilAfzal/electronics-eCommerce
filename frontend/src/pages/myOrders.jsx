import { useEffect, useState } from "react";
import RenderLoading from "../components/renderLoading"
import { Link, useLocation } from 'react-router-dom'
const url=import.meta.env.VITE_URL
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



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

        function EmptyOrders(){
      if(myOrders.length===0){
       return <div className="h-screen bg-gray-500 rounded-2xl flex flex-wrap justify-center md:items-center">
        <span className="text-4xl text-center w-screen mt-10">No Orders</span>
       </div>
      }
    }

        function Product({_id,productName,price,image}){
                return <>
                 <div className="w-full  flex md:block p-2 m-1 border border-white rounded-lg hover:shadow-black hover:shadow-2xl">
              <Link to={`/productPage?${_id}`}>
               <div>
                <img
                  src={image}
                  className="w-[100vw] h-full rounded-lg object-cover"
                />
              </div></Link>
              <div className=' w-[100%] p-2'>
               <Link to={`/productPage?${_id}`}> 
                <h4 className=" m-0 font-normal h-32 md:h-12 overflow-y-scroll md:overflow-y-hidden">{productName}</h4>
                <b>{price}</b>
                </Link>
                <div className="flex h-fit items-end md: justify-end">
                
              </div>
              </div>
            </div>
            </>
              }
        
        


    return  <>
            <RenderLoading loading={loading}/>
             {window.scrollTo({ top: 0, behavior: "smooth" })}
           <div className="w-full  bg-gray-200/80 rounded-lg my-4">
           <div className='w-full flex justify-center bg-blue-950 p-2 rounded-xl'>
              <h2 className='text-4xl text-white  font-bold pl-2 '>
                Your Orders</h2>
            </div>
            <EmptyOrders/>
           <div className="flex gap-2 flex-wrap">
            {myOrders.map((e, index) => (
            <div
            key={index}
            className="md:shrink-0  md:w-[16%]" 
             >
            <Product
              _id={e._id}
              image={e.image}
              productName={e.productName}
              price={e.price}
            />
          </div>
        ))}
        </div>
        </div>
        </>
    }else{
        return<>
            <div className="flex justify-center bg-gray-600  h-screen md:p-20 p-10 ">
              <div className="h-fit md:w-fit w-[100%]  bg-white md:p-10 p-6 rounded-2xl">
                 <h4>Login to see your Order Details</h4>
             <button
              type="submit"
               className="px-2 h-8  bg-blue-600 text-white ml-20  rounded hover:bg-blue-700 transition"
              onClick={() => {
            navigate("/login", { replace: true });
              }}
             >
              Login
            </button>
              </div>
            </div>
            </>
        
    }
}