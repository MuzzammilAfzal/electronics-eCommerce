import { useState } from "react";
import { useNavigate } from "react-router-dom";
const url=import.meta.env.VITE_URL


export default function AdminDashboard(){

  const navigate=useNavigate()
   const [product,setProduct]=useState({
    productName:"",
    description:"",
    price:"",
    imageLink:""
   })

    const handleProductNameChange = (e) => {
  setProduct({ ...product, productName: e.target.value });
   };

   const handleDescriptionChange = (e) => {
  setProduct({ ...product, description: e.target.value });
   };

   const handlePriceChange = (e) => {
  setProduct({ ...product, price: e.target.value });
   };
   const handleImageLinkChange = (e) => {
  setProduct({ ...product, imageLink: e.target.value });
   };


   const handleSubmit = async(e) => {
     e.preventDefault()
     const response = await fetch(`${url}/admin/addProduct`, {
    method: "POST",
    headers: { "token": sessionStorage.getItem("token"),
        "Content-Type": "application/json" },
    body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log(data);
    if(response.ok){
        alert("product added successfully")
        setProduct({productName:"",
         description:"",
         price:"",
        imageLink:""})
        location.reload()
    }else{
        alert("error")
    }
   
  };

    return(
       <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "100vh", background: "white" }}>
      <form method="POST"
        onSubmit={handleSubmit} style={{ padding: "20px", background: "white", }}>
        <h2 style={{ textAlign: "center" }}>Add Products</h2>
        <div style={{ marginBottom: "10px" }}>
          <label>Product Name</label><br />
          <input type="text" name="username" onChange={handleProductNameChange} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Description</label><br />
          <input type="text" name="password" onChange={handleDescriptionChange} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}required />
        </div>
         <div style={{ marginBottom: "10px" }}>
          <label>Price</label><br />
          <input type="text" name="password" onChange={handlePriceChange} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}required />
        </div>
         <div style={{ marginBottom: "10px" }}>
          <label>Image Url</label><br />
          <input type="text" name="password" onChange={handleImageLinkChange} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}required />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", background: "blue", color: "white" }}>
          Add Product
        </button>
      </form>
      <div >
        <button style={{ width: "100%", padding: "10px", background: "blue", color: "white" }} onClick={()=>{
          sessionStorage.removeItem("token")
          navigate("/admin",{replace:true})
        }}>Logout</button>
      </div>
    </div>


    )
     
    
    
}