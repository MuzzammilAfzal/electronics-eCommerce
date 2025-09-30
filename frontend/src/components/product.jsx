 import { Link, useNavigate } from "react-router-dom"
 const url=import.meta.env.VITE_URL

 function Product({_id,productName,price,image}){


   const navigate=useNavigate()

 
    

    return  <div className="h-fit w-full p-2 m-1 border border-white rounded-lg hover:shadow-black hover:shadow-2xl">
      <div>
        <img
          src={image}
          className="w-full rounded-lg object-cover"
        />
      </div>
      <div>
        <h4 className="m-0 font-normal h-18 md:h-12 overflow-y-scroll md:overflow-y-hidden">{productName}</h4>
        <b>{price}</b>
      </div>
    </div>
    {/* <button className="mr-5 p-1 bg-orange-300 hover:bg-orange-400 rounded-sm" ><Link to={`/buy?${id}`} >Buy Now</Link></button>
                <button onClick={handleAddToCart} className="bg-amber-300 hover:bg-amber-400 p-1 rounded-sm"> Add to Cart</button> */}
 }

 export default Product