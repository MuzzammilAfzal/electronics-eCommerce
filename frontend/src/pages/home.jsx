import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import CategoriesCards from "../components/CategoriesCards"
import { ShopByBrand } from "../components/ShopByBrand"
import ScrollToTop from "../components/ScrollToTop"
const url=import.meta.env.VITE_URL




function Home(){
 
    
    const [isMd, setIsMd] = useState(window.innerWidth >= 768);

    

    
    const companiesList=[
        {link:"/",image:"apple.avif"},
        {link:"/",image:"samsung.png"},
        {link:"/",image:"oppo.png"},
        {link:"/",image:"realme.png"},
        {link:"/",image:"mi.png"},
        {link:"/",image:"google.png"},
        {link:"/",image:"vivo.png"},
        {link:"/",image:"oneplus.png"},
        {link:"/",image:"lg.avif"},
        {link:"/",image:"sony.avif"},
        {link:"/",image:"hp.avif"},
        {link:"/",image:"asus.avif"},
        {link:"/",image:"lenovo.avif"},
        {link:"/",image:"acer.avif"},
        {link:"/",image:"whirlpool.png"},
        {link:"/",image:"godrej.png"},
        {link:"/",image:"voltas.jpg"},
        {link:"/",image:"bluestar.jpg"},
        {link:"/",image:"daikin.jpg"},
        {link:"/",image:"sansui.jpg"},
    ]
    
    const banner1ImagesDesktop=[
      {image:"/images/banner/desktop/banner-iphone.jpeg"},
      {image:"/images/banner/desktop/banner-laptop.jpeg"},
      {image:"/images/banner/desktop/banner-google.jpeg"},
      {image:"/images/banner/desktop/banner-tab.jpeg"},
      {image:"/images/banner/desktop/lenovo.avif"}
    ]   

      const banner1ImagesMobile=[
      {image:"/images/banner/mobile/banner-iphone.jpeg"},
      {image:"/images/banner/mobile/banner-laptop.jpeg"},
      {image:"/images/banner/mobile/banner-google.jpeg"},
      {image:"/images/banner/mobile/banner-tab.jpeg"},
      {image:"/images/banner/mobile/lenovo.avif"}
    ]  


     const banner2ImagesDesktop=[
      {image:"/images/banner/desktop/oppo.avif"},
      {image:"/images/banner/desktop/redmi.avif"},
      {image:"/images/banner/desktop/dell.avif"},
      {image:"/images/banner/desktop/macbook.avif"}
      
    ]  

     const banner2ImagesMobile=[
      {image:"/images/banner/mobile/redmi.avif"},
      {image:"/images/banner/mobile/oppo.avif"},
      {image:"/images/banner/mobile/dell.avif"},
      {image:"/images/banner/mobile/macbook.avif"}
    ]  

     const banner3ImagesDesktop=[
      {image:"/images/banner/desktop/samsungtv.avif"},
      {image:"/images/banner/desktop/sansui.jpg"},
      {image:"/images/banner/desktop/sonylgtv.avif"},
      
      
    ]  

     const banner3ImagesMobile=[
      {image:"/images/banner/mobile/lgtv.jpeg"},
      {image:"/images/banner/mobile/samsungtv.jpg"},
      {image:"/images/banner/mobile/sonytv.png"},
    ]  
    

    return <>
    <ScrollToTop/>
    <Banner data={isMd? banner1ImagesDesktop:banner1ImagesMobile}/>
    <div className="p-2 bg-white">
           
           <div className="w-full h-fit p-4 my-2 rounded-2xl bg-cyan-700">
            <span className="font-extrabold text-2xl">Popular Premium Mobile Brands</span>
            <CategoriesCards title={"Iphones"} link={"/"} logic={{brand:"apple",categories:"mobile"}} limit={20} skip={3} />
            <span className="font-extrabold text-2xl" >Other Premium Brands</span>
            <CategoriesCards title={"Premium"} link={"/"} logic={{ $nor: [ { brand: "apple" }, { brand: "samsung" } ],cleanedPrice:{$gt:50000},categories:"mobile" } } limit={20} />
           </div>
           <Banner data={isMd? banner2ImagesDesktop:banner2ImagesMobile} />


           <div className="w-full h-fit md:p-10 p-4 my-2 rounded-2xl bg-[url('/images/wallpaper/gaming.jpg')] bg-cover">
            <span className="font-extrabold text-2xl text-white">Gaming Zone</span>
            <CategoriesCards title={"Gaming Laptops"} link={"/"} logic={{categories:"laptop",section:"gaming"}} limit={20} skip={0} />
           </div>
           <div className="w-full h-fit p-4  rounded-2xl bg-[#475450] ">
            <CategoriesCards title={"Students and Business Laptops"} link={"/"} logic={{categories:"laptop",section2:"students",section3:"business"}} limit={20} skip={0} />
           </div>


          <div className="w-full h-fit p-4 my-2 rounded-2xl bg-[#b5954a]">
            <span className="font-extrabold text-2xl">Tablets</span>
            <CategoriesCards title={"Ipads"} link={"/"} logic={{brand:"apple",section:"ipad"}} limit={20} skip={0} />
            <CategoriesCards title={"Samsung,Lenovo,Oneplus"} link={"/"} logic={{ $nor: [ { brand: "apple" }],categories:"tablet" } } limit={20} />
           </div>

           <Banner  data={isMd? banner3ImagesDesktop:banner3ImagesMobile} />


           <div className="w-full h-fit p-4 my-2 rounded-2xl bg-[#67b54a]">
            <span className="font-extrabold text-2xl">Television</span>
            <CategoriesCards title={"Size:(32inch to 49inch)"} link={"/"} logic={{categories:"TV",$or:[{section:"32-39inch"},{section:"40-49inch"}]}} limit={20} skip={0} />
            <CategoriesCards title={"Size:(50inch and above)"} link={"/"} logic={{categories:"TV",$or:[{section:"50-59inch"},{section:"60-69inch"},{section:"70inch and above"}] } } limit={20} />
           </div>

           
           <span className="font-extrabold text-2xl flex justify-center items-center w-full h-15">Home Appliances 🢃</span>


           <div className="w-full h-fit p-4 my-2 rounded-2xl bg-[#b6385a]">
            <span className="font-extrabold text-2xl">Air Conditioner</span>
            <CategoriesCards title={"Capacity: 1Ton - 2Ton and above"} link={"/"} logic={{categories:"ac"}} limit={20} skip={0} />
           </div>

           <div className="w-full h-fit p-4 my-2 rounded-2xl bg-[#b638a9]">
            <span className="font-extrabold text-2xl">Refrigerators</span>
            <CategoriesCards title={"Upto 600 Liters"} link={"/"} logic={{categories:"ref"}} limit={20} skip={0} />
           </div>

           <div className="w-full h-fit p-4 my-2 rounded-2xl bg-[#7f38b6]">
            <span className="font-extrabold text-2xl">Washing Machines</span>
            <CategoriesCards title={"Capacity: 7 to 10 KG"} link={"/"} logic={{categories:"wm"}} limit={20} skip={0} />
           </div>


           <ShopByBrand companies={companiesList}/>

    </div>
    </>
}
export default Home