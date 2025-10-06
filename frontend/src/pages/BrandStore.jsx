import React,{useState,useEffect} from 'react'
import Product from "../components/product"
import RenderLoading from "../components/renderLoading"
import { Link, useLocation } from 'react-router-dom'
const url=import.meta.env.VITE_URL


const BrandStore = () => {

  const [product,setProduct]=useState([])
      const [loading,setLoading]=useState(true)
      
      const location=useLocation()
      var query=location.search
       query=query.replace("?","")
       const pairs = query.split("&");

      const logic = {};
        pairs.forEach(pair => {
      let [key, value] = pair.split(":");
        if (value) {
         value = value.replace(/^"|"$/g, "");
          value = value.replace("%22", "");
          value = value.replace("%22", "");
        }
         logic[key] = value;
          });
     console.log(logic);

       

       
  
      const randomize = (data, size) => {
      return data.sort(() => 0.5 - Math.random()).slice(0, size);
     };
      
  
        useEffect(()=>{
        setLoading(true)
              fetch(`${url}/allProducts`,{
              method:"POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({
                logic
               }) 
          }).then((response)=> response.json()).then(data=>{setProduct(randomize(data,data.length));setLoading(false);console.log(data)})
          
      },[])

      function ProductBrandStore({_id,productName,price,image}){
        return  <div className="w-full  flex md:block p-2 m-1 border border-white rounded-lg hover:shadow-black hover:shadow-2xl">
      <div>
        <img
          src={image}
          className="w-[100vw] h-full rounded-lg object-cover"
        />
      </div>
      <div className='w-[100%] p-2'>
        <h4 className="m-0 font-normal h-32 md:h-12 overflow-y-scroll md:overflow-y-hidden">{productName}</h4>
        <b>{price}</b>
      </div>
    </div>
      }

   

   


  return (
    <div>
      
        <RenderLoading loading={loading}/>
       <div className="w-full  bg-gray-200/80 rounded-lg my-4">
         <div className='w-full flex justify-center bg-blue-950 p-2 rounded-xl'>
          <h2 className='text-4xl text-white  font-bold pl-2 '>
            {logic.brand && `${logic.brand} `}
            {!logic.categories && !logic.section && `Store`}
            {logic.categories && ` ${logic.categories}`}
            {logic.categories==="ref" && `rigerators`}
            {logic.section && ` ${logic.section}`}
            {logic.section2 && `${logic.section2} ${logic.section3}`}</h2>
        </div>
       <div className="flex gap-2 flex-wrap">
        {product.map((e, index) => (
        <div
        key={index}
        className="md:shrink-0  md:w-[16%]" 
         ><Link to={`/productPage?${e._id}`}>
        <ProductBrandStore
          _id={e._id}
          image={e.image}
          productName={e.productName}
          price={e.price}
        /></Link>
      </div>
    ))}
    </div>
    </div>
       
    </div>
  )
}

export default BrandStore