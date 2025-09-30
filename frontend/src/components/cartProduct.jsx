 import { Link, useNavigate } from "react-router-dom"
 const url=import.meta.env.VITE_URL

 function ProductCart({productName,description,price,imageLink,id}){

   const navigate=useNavigate()

    

    return  <div style={{border:"solid black 2px",height:320,width:200,margin:10}}>
               <div>
                   <img src={imageLink} style={{width:200}}></img>
               </div>
              <div style={{padding:10}}>
                 <h4 style={{margin:0}}>{productName}</h4>
                 <p style={{margin:0}}>{description}</p>
                 <b>₹{price}</b><br />
                 <button style={{marginRight:10}} ><Link to={`/buy?${id}`} >Buy Now</Link></button>               
              </div> 
          </div>
    
 }

 export default ProductCart