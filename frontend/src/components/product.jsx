 import { Link } from "react-router-dom"

 function Product(){


    const addToCart=()=>{
        alert("added to cart")
    }

    return  <div style={{border:"solid black 2px",height:320,width:200,margin:10}}>
               <div>
                   <img src="https://think-ecuador.com/wp-content/uploads/2024/09/iPhone-16-Teal-1.png" style={{width:200}}></img>
               </div>
              <div style={{padding:10}}>
                 <h4 style={{margin:0}}>Iphone 16</h4>
                 <p style={{margin:0}}>ROM:512 GB Titanium Green 5G</p>
                 <b>Rs:1,50,000</b><br />
                 <button style={{marginRight:10}} ><Link to={"/buy"} >Buy Now</Link></button>
                <button onClick={addToCart}> Add to Cart</button>
               
              </div> 
          </div>
    
 }

 export default Product