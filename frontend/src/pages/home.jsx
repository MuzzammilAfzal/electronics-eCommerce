import Product from "../components/product"




function Home(){
 


    const addToCart=()=>{
        alert("added to cart")
    }
       

    return <div style={{padding:20,display:"flex",flexWrap:"wrap"}}>
       
           <h2 style={{width:"100%"}}>All Products</h2>
           <Product></Product>

       
    </div>
}
export default Home