import { useEffect, useState } from "react"
import NavBar from "../components/navBar"
import Product from "../components/product"
const url=import.meta.env.VITE_URL




function Home(){
 
    const [product,setProduct]=useState([])

    useEffect(()=>{
      fetch(`${url}/allProducts`,{
            method:"GET",
        }).then((response)=> response.json()).then(data=>{setProduct(data);console.log(data)})
        
        
    },[])

       

    return <>
    <NavBar/>
    <div style={{padding:20,display:"flex",flexWrap:"wrap",width:"100%"}}>
       
           <h2 style={{width:"100%"}}>All Products</h2>
           {
            product.map(e=>{
              return <Product productName={e.productName} description={e.description} price={e.price} imageLink={e.imageLink} id={e._id}></Product>
            })
           }

    </div>
    </>
}
export default Home