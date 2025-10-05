import { useLocation, useNavigate,Link, replace } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import RenderLoading from "../components/renderLoading"
import { toast } from "react-toastify";
const url=import.meta.env.VITE_URL


export default function Buy(){
  
    const navigate=useNavigate()
   if(localStorage.getItem("token")){

    const location=useLocation()
    const query=location.search
    const id=query.replace("?","")

    const [product,setProduct]=useState({})
    const [loading,setLoading]=useState(true)
     const [payment, setPayment] = useState("")
     console.log(payment)
  

    useEffect(()=>{
        fetch(`${url}/buyPageProduct`,{
            method:"GET",
            headers:{
                token:localStorage.getItem("token"),
                id:id
            }
        }).then((response)=> response.json()).then(data=>{setProduct(data);setLoading(false);console.log(product)})
    },[])

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

         const handleOrder=async()=>{
          if(payment===""){
            toast.error("select Payment Method")
          }else{
          if(localStorage.getItem("token")){
                              const response= await fetch(`${url}/confirmOrder`,{
                                  method:"POST",
                                  headers:{
                                      token:localStorage.getItem("token"),
                                      product:id,
                                      payment:payment
                                  }})
                              const data=await response.json()
                              if(response.ok){
                                  toast.success(data.message)
                                  navigate("/ConfirmedOrder",{replace:true})
                              }else{
                                console.log(data.message);
                                
                                  toast.error(data.message)
                              }
                          }else{
                              navigate('/login',{replace:true})
                          }
          } }     


    return<>
    {window.scrollTo({ top: 0, behavior: "smooth" })}
     <RenderLoading loading={loading}/>
               <div className="w-full  bg-gray-200 rounded-lg my-4">
               <div className='w-full flex justify-center bg-blue-950 p-2 rounded-xl'>
              <h2 className='text-2xl text-white  font-medium pl-2 '>
               Order Details</h2>
              </div>
               <div className="flex gap-2 flex-wrap">
                <div
                className="md:shrink-0  md:w-[16%]" 
                 >
                <Product
                  _id={product._id}
                  image={product.image}
                  productName={product.productName}
                  price={product.price}
                />
              </div>
            </div>
            </div>
            <div className="w-full h-screen  bg-gray-300 p-2 ">
              <span className="px-20 text-2xl bg-blue-800 rounded-2xl text-white ">Payment Method</span>
              <form  >
                <div className="w-full p-3 mx-0.5 my-2 border rounded-2xl">
                    <input type="radio" name="payment" value="cod" required
                     onChange={(e)=>{setPayment(e.target.value)}}
                    /><span className="font-bold">Cash On Delivery</span>
                </div>
                <div className="w-full p-3 mx-0.5 my-2 border rounded-2xl">
                    <input type="radio" name="payment" value="card" required
                    onChange={(e)=>{setPayment(e.target.value)}}
                    /><span className="font-bold">Card</span>
                </div>
                <div className="w-full p-3 mx-0.5 my-2 border rounded-2xl">
                    <input type="radio" name="payment" value="upi" required
                    onChange={(e)=>{setPayment(e.target.value)}}
                    /><span className="font-bold">UPI</span>
                </div>
             </form>
             <button
              className="mx-22" onClick={handleOrder}> 
              <span className="px-5 text-2xl bg-green-900 rounded-2xl text-white ">Place Order</span>
              </button>
            </div>
</>

    }else{
       const location=useLocation()
          const query=location.search
         const id=query.replace("?","")
        useEffect(()=>{
          
          localStorage.setItem("product",id)
            navigate("/login")
        },[])
        // return<>
        //     <div className="flex justify-center bg-gray-600  h-screen md:p-20 p-10 ">
        //       <div className="h-fit md:w-fit w-[100%]  bg-white md:p-10 p-6 rounded-2xl">
        //          <h4>Login to see your Order Details</h4>
        //      <button
        //       type="submit"
        //        className="px-2 h-8  bg-blue-600 text-white ml-20  rounded hover:bg-blue-700 transition"
        //       onClick={() => {
        //     navigate("/login", { replace: true });
        //       }}
        //      >
        //       Login
        //     </button>
        //       </div>
        //     </div>
        //     </>
        
    }
}