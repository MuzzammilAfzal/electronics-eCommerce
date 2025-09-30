import React,{useState} from 'react'
import Banner from '../../components/Banner';
import { ShopByBrand } from '../../components/ShopByBrand';
import CategoriesCards from '../../components/CategoriesCards';


const Laptop = () => {
    const [isMd, setIsMd] = useState(window.innerWidth >= 768);    
        
             const bannerImagesDesktop=[
              {image:"/images/banner/desktop/oppoK13x.avif"},
              {image:"/images/banner/desktop/realmemobile.avif"},
              {image:"/images/banner/desktop/google9a.avif"},
              {image:"/images/banner/desktop/vivot4.avif"},
            ]   
        
              const bannerImagesMobile=[
             {image:"/images/banner/mobile/oppok13x.avif"},
              {image:"/images/banner/mobile/realmemobile.avif"},
              {image:"/images/banner/mobile/google9a.avif"},
              {image:"/images/banner/mobile/vivot4.avif"},
            ]  
        
            const companiesList=[
            {link:"/",image:"apple.avif"},
            {link:"/",image:"hp.avif"},
            {link:"/",image:"lenovo.avif"},
            {link:"/",image:"asus.avif"},
            {link:"/",image:"acer.avif"},
           
            ]

  return (
    <div className='p-2'>
         <Banner data={isMd? bannerImagesDesktop:bannerImagesMobile}></Banner>
        <ShopByBrand companies={companiesList} />

        <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#5F9EA0] ">
            <span className="font-bold text-2xl ">MacBook</span>
            <CategoriesCards title={""} link={"/"} logic={{categories:"macbook",brand:"apple"}} limit={0} skip={0} />
         </div>

         <span className="font-extrabold text-2xl flex justify-center items-center w-full h-15 mt-6">Shop By Processor 🢃</span>

          <div className="w-full h-fit  p-2 my-2 mb-15 rounded-2xl bg-[url('/images/wallpaper/wp4.jpg')] bg-cover">
            <span className="font-bold text-2xl text-white ">Intel Core i5</span>
            <CategoriesCards title={"hp"} link={"/"} logic={{categories:"laptop",section:"i5",brand:"hp"}} limit={0} skip={0} />
            <CategoriesCards title={"Lenovo"} link={"/"} logic={{categories:"laptop",section:"i5",brand:"lenovo"}} limit={0} skip={0} />
            <CategoriesCards title={"acer"} link={"/"} logic={{categories:"laptop",section:"i5",brand:"acer"}} limit={0} skip={0} />
            
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[url('/images/wallpaper/wp5.jpg')] bg-cover ">
            <span className="font-bold text-2xl text-white ">Intel Core i7</span>
            <CategoriesCards title={"hp"} link={"/"} logic={{categories:"laptop",section:"i7",brand:"hp"}} limit={0} skip={0} />
            <CategoriesCards title={"Lenovo"} link={"/"} logic={{categories:"laptop",section:"i7",brand:"lenovo"}} limit={0} skip={0} />
            <CategoriesCards title={"acer"} link={"/"} logic={{categories:"laptop",section:"i7",brand:"acer"}} limit={0} skip={0} />
            
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-gray-500 ">
            <span className="font-bold text-2xl text-white ">Intel Core i9</span>
            <CategoriesCards title={"hp"} link={"/"} logic={{categories:"laptop",section:"i9"}} limit={0} skip={0} />
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[url('/images/wallpaper/wp6.jpg')] bg-cover ">
            <span className="font-bold text-2xl text-white ">AMD Ryzen 5</span>
            <CategoriesCards title={"hp"} link={"/"} logic={{categories:"laptop",section:"ryzen5",brand:"hp"}} limit={0} skip={0} />
            <CategoriesCards title={"Lenovo"} link={"/"} logic={{categories:"laptop",section:"ryzen5",brand:"lenovo"}} limit={0} skip={0} />
           
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-gray-800  ">
            <span className="font-bold text-2xl text-white ">AMD Ryzen 7</span>
            <CategoriesCards title={"hp"} link={"/"} logic={{categories:"laptop",section:"ryzen7",brand:"hp"}} limit={0} skip={0} />
            <CategoriesCards title={"Lenovo"} link={"/"} logic={{categories:"laptop",section:"ryzen7",brand:"lenovo"}} limit={0} skip={0} />
           
         </div>

          <span className="font-extrabold text-2xl flex justify-center items-center w-full h-15 mt-6">Shop By Mode 🢃</span>

          <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[url('/images/wallpaper/wp7.jpg')] bg-cover ">
            <span className="font-bold text-2xl text-white ">Gaming Mode</span>
            <CategoriesCards title={"acer"} link={"/"} logic={{categories:"laptop",section:"gaming",brand:"acer"}} limit={0} skip={0} />
            <CategoriesCards title={"asus"} link={"/"} logic={{categories:"laptop",section:"gaming",brand:"asus"}} limit={0} skip={0} />
           
         </div>

        <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-green-900 bg-cover ">
            <span className="font-bold text-2xl text-white ">Work Mode</span>
            <CategoriesCards title={"acer"} link={"/"} logic={{categories:"laptop",section2:"students",section3:"business",brand:"acer"}} limit={0} skip={0} />
            <CategoriesCards title={"Lenovo"} link={"/"} logic={{categories:"laptop",section2:"students",section3:"business",brand:"lenovo"}} limit={0} skip={0} />
           
         </div>


         

    </div>
  )
}

export default Laptop