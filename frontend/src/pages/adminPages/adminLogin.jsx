import { useState } from "react";
import {  useNavigate } from "react-router-dom";
const url=import.meta.env.VITE_URL


export default function AdminLogin(){
  
   const navigate=useNavigate()
    const [user, setUser] = useState({ username: "", password: "" });

  const handleusernameChange = (e) => {
  setUser({ ...user, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
  setUser({ ...user, password: e.target.value });
   };

  const handleSubmit = async(e) => {
    e.preventDefault()
     const response = await fetch(`${url}/admin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
    });
    const data = await response.json();
    if(data.token){
        sessionStorage.setItem("token",data.token)
        navigate('/adminDashboard',{replace:true})
    }else{
        alert("error logging admin")
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "white" }}>
      <form method="POST"
        onSubmit={handleSubmit} style={{ padding: "20px", background: "white", }}>
        <h2 style={{ textAlign: "center" }}>Admin Login</h2>
        <div style={{ marginBottom: "10px" }}>
          <label>UserName</label><br />
          <input type="text" name="username" onChange={handleusernameChange} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password</label><br />
          <input type="password" name="password" onChange={handlePasswordChange} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}required />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", background: "blue", color: "white" }}>
          Login
        </button>
      </form>
    </div>
  )


    
}