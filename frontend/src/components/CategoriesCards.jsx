import React,{useState,useEffect} from 'react'
import Product from "../components/product"
import RenderLoading from "../components/renderLoading"
import { Link } from 'react-router-dom'
const url=import.meta.env.VITE_URL


const CategoriesCards = ({title,link,logic,limit,skip}) => {

    const [product,setProduct]=useState([])
    const [loading,setLoading]=useState(true)
    

    const randomize = (data, size) => {
    return data.sort(() => 0.5 - Math.random()).slice(0, size);
   };
    

      useEffect(()=>{
      setLoading(true)
            fetch(`${url}/allProducts`,{
            method:"POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({
              logic,limit,skip
             }) 
        }).then((response)=> response.json()).then(data=>{setProduct(randomize(data,data.length));setLoading(false)})
        
    },[])
    

  return (
    <>
    <RenderLoading loading={loading}/>
       <div className="w-full  bg-gray-200/80 rounded-lg my-4">
         <div className='w-full flex justify-between p-2'>
          <h2 className='text-lg font-bold pl-2 '>{title}</h2>
          <h2 className='text-lg font-bold pl-2 block '><Link to={link}>View All🡲</Link></h2>
        </div>
       <div className="flex gap-2 overflow-x-scroll">
        {product.map((e, index) => (
        <div
        key={index}
        className="shrink-0 w-[40%] md:w-[14%]" 
         ><Link to={`/productPage?${e._id}`}>
        <Product
          _id={e._id}
          image={e.image}
          productName={e.productName}
          price={e.price}
        /></Link>
      </div>
    ))}
  </div>
</div>


    </>
    
  )
}

export default CategoriesCards