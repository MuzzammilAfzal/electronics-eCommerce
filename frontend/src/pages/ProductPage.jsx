import React,{useState,useEffect} from 'react'
import { useLocation,Link } from 'react-router-dom';
import RenderLoading from '../components/renderLoading';
import ScrollToTop from '../components/ScrollToTop';
const url=import.meta.env.VITE_URL




const ProductPage = () => {
   
    const [isMd, setIsMd] = useState(window.innerWidth >= 768);
    const [loading,setLoading]=useState(true)
    const [product,setProduct]=useState([])

    const location=useLocation()
    const query=location.search
     const id=query.replace("?","")


     const RenderDescription=()=>{
       if(product.descriptionImage){
        console.log(product);
       return <div>
        <span className='font-bold text-lg block px-2'>Description</span>
        <img src={product.descriptionImage} alt="" className='rounded-2xl' />
       </div>
     }
    }

     useEffect(()=>{
           setLoading(true)
                 fetch(`${url}/specificproducts`,{
                 method:"POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({_id:id}) 
             }).then((response)=> response.json()).then(data=>{
              setProduct(data[0]);setLoading(false);
            })
             
         },[])

       function Scroll(){
         return <button  className='bg-cyan-800 text-white px-4 py-2 fixed bottom-20 right-20 z-50 rounded-4xl'
        onClick={()=>{ const scrolldiv=document.getElementById("scroll")
          console.log(scrolldiv)
         scrolldiv.scrollTo({top:0,behavior:"smooth"})}}
        >
        ️⬆️top.  </button>
       }   


         const handleAddToCart=async()=>{
    if(localStorage.getItem("token")){
                    const response= await fetch(`${url}/addToCart`,{
                        method:"POST",
                        headers:{
                            token:localStorage.getItem("token"),
                            product:id
                        }})
                    const data=await response.json()
                    if(response.ok){
                        alert("successfully added to cart")
                    }else{
                        alert(data.message)
                    }
                }else{
                    navigate('/myCart')
                }
   }



  return (
    <>
    {window.scrollTo({top:0})}
   
    <RenderLoading loading={loading}/>
    <div  className='md:flex bg-gray-200 p-5 '>
        <div className='w-full md:w-fit mb-2 shrink-0  '>
           <img src={product.image} alt="" className=' md:w-auto md:h-[70vh] rounded-2xl' /> 
        </div>
      <div id='scroll' className='md:px-4 overflow-auto md:w-fit md:h-[80vh] overflow-y-scroll  '>
        <div id='top' className=' w-full h-fit p-2 bg-white rounded-2xl'>
          <span  className='font-bold'>{product.productName}</span>
          <div>
            <span>MRP </span>
            <span className='font-extrabold text-2xl'>{product.price}</span>
          </div>
          {isMd && <div className='w-full h-auto p-4  flex justify-start items-center gap-4'>
           <button className='border border-blue-950 text-shadow-blue-950  py-2 px-6 rounded-4xl font-bold text-lg hover:bg-blue-500' onClick={handleAddToCart}>Add to Cart</button>
           <button className='border border-blue-950 text-shadow-blue-950 bg-blue-500  py-2 px-8 rounded-4xl font-bold text-lg hover:bg-white'><Link to={`/buy?${id}`} >Buy Now</Link></button>
           </div>}
          <div className='my-4'>
            <span className='font-bold text-lg block'>Key Features :-</span>
            <span>
               {product.keyFeatures}
            </span>
          </div>
        </div>
        <div  className='w-full h-fit my-2  '>
            {isMd? <Scroll/>:<ScrollToTop/>}  
            <RenderDescription/>
            {product.images&& !(product.descriptionImage) && <span className='font-bold text-lg block px-2'>Description</span> }
             {
              product?.images?.map((e,index)=>{
             return <div key={index} >
                <img src={e.image} alt="" className='rounded-2xl w-full' />
            </div>
          })
        }
        </div>
      </div>  
        
    </div>
    {!isMd&& <div className='w-full h-auto p-4  bg-gray-100 fixed bottom-0 flex justify-center items-center gap-4'>
        <button className='border border-blue-950 text-shadow-blue-950  py-2 px-6 rounded-4xl font-bold text-lg hover:bg-blue-500' onClick={handleAddToCart}>Add to Cart</button>
        <button className='border border-blue-950 text-shadow-blue-950 bg-blue-500  py-2 px-8 rounded-4xl font-bold text-lg hover:bg-white'><Link to={`/buy?${id}`} >Buy Now</Link></button>
    </div>}
    </>
  )
}

export default ProductPage