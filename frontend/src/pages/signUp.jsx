
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
const url=import.meta.env.VITE_URL



export default function SignUp(){
  
    const navigate=useNavigate()
    const [user, setUser] = useState({ fullName: "",email:"",phoneNo:"", password: "" ,deliveryAddress:"",myCart:[],myOrders:[]});

  const handleFullNameChange = (e) => {
  setUser({ ...user, fullName: e.target.value });
  };
  const handlePhoneNoChange = (e) => {
  setUser({ ...user, phoneNo: e.target.value });
  };
  const handleEmailChange = (e) => {
  setUser({ ...user, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
  setUser({ ...user, password: e.target.value });
   };
   const handleDeliveryAddressChange = (e) => {
  setUser({ ...user, deliveryAddress: e.target.value });
   };

  const handleSubmit = async(e) => {
    e.preventDefault()
     const response = await fetch(`${url}/signUp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
    });
    const data = await response.json();
    if(data.token){
        localStorage.setItem("token",data.token)
        navigate('/',{replace:true})
    }else{
        if(!response.ok){
            alert("user already exists")
        }
    }
  };

     return (
    <div className="flex flex-wrap gap-20 justify-center items-center h-1/2 bg-white">
      <form method="POST"
        onSubmit={handleSubmit} className="p-6 border-1 bg-white" >
        <h2 className="text-center" >User SignUp</h2>
        <div className="mb-2.5">
          <label>Full Name</label><br />
          <input type="text" name="username" onChange={handleFullNameChange} 
           className="w-full p-2 mt-1 border-1" required />
        </div>
        <div className="mb-2.5">
          <label>Phone Number (without +91)</label><br />
          <input type="number" maxLength={10} name="phoneNO" onChange={handlePhoneNoChange} 
           className="w-full p-2 mt-1" required />
        </div>
        <div className="mb-2.5" >
          <label>Email</label><br />
          <input type="email" name="email" onChange={handleEmailChange} 
           className="w-full p-2 mt-1" required />
        </div>
        <div className="mb-2.5">
          <label>Password</label><br />
          <input type="password" name="password" onChange={handlePasswordChange} 
           className="w-full p-2 mt-1" required />
        </div>
        <div className="mb-2.5">
          <label>Delivery Address</label><br />
          <input type="text" name="deliveryAddress" onChange={handleDeliveryAddressChange} 
           className="w-full p-2 mt-1.5" required />
        </div>
        <button type="submit" className="w-full p-2.5 bg-blue-500 text-white" >
          SignUp
        </button>
      </form>
      <div>
        <label>Already have account</label>
        <button type="submit" className="w-full p-2.5 bg-blue-500 text-white" onClick={()=>{
            navigate('/login',{replace:true})
        }}>Login</button>
      </div>
    </div>
  )
}