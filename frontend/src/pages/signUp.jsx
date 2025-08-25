
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
    <div style={{ display: "flex",flexWrap:"wrap",gap:100, justifyContent:'center', alignItems: "center", height: "50vh", background: "white" }}>
      <form method="POST"
        onSubmit={handleSubmit} style={{ padding: "20px", background: "white", }}>
        <h2 style={{ textAlign: "center" }}>User SignUp</h2>
        <div style={{ marginBottom: "10px" }}>
          <label>Full Name</label><br />
          <input type="text" name="username" onChange={handleFullNameChange} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Phone Number (without +91)</label><br />
          <input type="number" name="username" onChange={handlePhoneNoChange} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email</label><br />
          <input type="email" name="username" onChange={handleEmailChange} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password</label><br />
          <input type="password" name="password" onChange={handlePasswordChange} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Delivery Address</label><br />
          <input type="text" name="password" onChange={handleDeliveryAddressChange} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}required />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", background: "blue", color: "white" }}>
          SignUp
        </button>
      </form>
      <div>
        <label>Already have account</label>
        <button type="submit" style={{ width: "100%", padding: "10px", background: "blue", color: "white" }} onClick={()=>{
            navigate('/login',{replace:true})
        }}>Login</button>
      </div>
    </div>
  )
}