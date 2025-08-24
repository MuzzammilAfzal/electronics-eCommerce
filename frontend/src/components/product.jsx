 import { Link } from "react-router-dom"

 function Product({productName,description,price,imageLink}){


    const addToCart=()=>{
        alert("added to cart")
    }

    return  <div style={{border:"solid black 2px",height:320,width:200,margin:10}}>
               <div>
                   <img src={imageLink} style={{width:200}}></img>
               </div>
              <div style={{padding:10}}>
                 <h4 style={{margin:0}}>{productName}</h4>
                 <p style={{margin:0}}>{description}</p>
                 <b>{price}</b><br />
                 <button style={{marginRight:10}} ><Link to={"/buy"} >Buy Now</Link></button>
                <button onClick={addToCart}> Add to Cart</button>
               
              </div> 
          </div>
    
 }

 export default Product