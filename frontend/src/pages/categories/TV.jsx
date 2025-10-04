import React,{useState} from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import Banner from '../../components/Banner';
import { ShopByBrand } from '../../components/ShopByBrand';
import CategoriesCards from '../../components/CategoriesCards';


const TV = () => {

  const [isMd, setIsMd] = useState(window.innerWidth >= 768);    
      
           const bannerImagesDesktop=[
            {image:"/images/banner/desktop/tv1.avif"},
            {image:"/images/banner/desktop/tv2.avif"},
            {image:"/images/banner/desktop/lgtv.jpeg"},
            {image:"/images/banner/desktop/sansui.jpg"},
          ]   
      
            const bannerImagesMobile=[
           {image:"/images/banner/mobile/tv1.avif"},
            {image:"/images/banner/mobile/tv2.avif"},
            {image:"/images/banner/mobile/lgtv.jpeg"},
            {image:"/images/banner/mobile/sonytv.png"},
            {image:"/images/banner/mobile/samsungtv.jpg"},
          ]  
      
          const companiesList=[
          {link:"/",image:"samsung.png"},
          {link:"/",image:"lg.avif"},
          {link:"/",image:"sony.avif"},
          {link:"/",image:"sansui.jpg"},
          ]


  return (
    <div>
        {window.scrollTo({ top: 0, behavior: "smooth" })}
         <ScrollToTop/>
          <Banner data={isMd? bannerImagesDesktop:bannerImagesMobile}></Banner>
        <ShopByBrand companies={companiesList} />

        <span className="font-extrabold text-2xl flex justify-center items-center w-full h-15">Shop By Size ️⬇️</span>

          <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[url(/images/wallpaper/wp9.jpg)] bg-cover ">
            <span className="font-bold text-2xl text-white ">Size: 70inch and Above</span>
            <CategoriesCards title={"LG"} link={"/"} logic={{categories:"TV",section:"70inch and above",brand:"LG"}} limit={0} skip={0} />
            <CategoriesCards title={"Sansui"} link={"/"} logic={{categories:"TV",section:"70inch and above",brand:"sansui"}} limit={0} skip={0} />
            <CategoriesCards title={"Samsung"} link={"/"} logic={{categories:"TV",section:"70inch and above",brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"Sony"} link={"/"} logic={{categories:"TV",section:"70inch and above",brand:"sony"}} limit={0} skip={0} />
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#530101] bg-cover ">
            <span className="font-bold text-2xl text-white ">Size: 60inch-69inch</span>
            <CategoriesCards title={"LG"} link={"/"} logic={{categories:"TV",section:"60-69inch",brand:"LG"}} limit={0} skip={0} />
            <CategoriesCards title={"Sansui"} link={"/"} logic={{categories:"TV",section:"60-69inch",brand:"sansui"}} limit={0} skip={0} />
            <CategoriesCards title={"Samsung"} link={"/"} logic={{categories:"TV",section:"60-69inch",brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"Sony"} link={"/"} logic={{categories:"TV",section:"60-69inch",brand:"sony"}} limit={0} skip={0} />
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#015353] bg-cover ">
            <span className="font-bold text-2xl text-white ">Size: 50inch-59inch</span>
            <CategoriesCards title={"LG"} link={"/"} logic={{categories:"TV",section:"50-59inch",brand:"LG"}} limit={0} skip={0} />
            <CategoriesCards title={"Sansui"} link={"/"} logic={{categories:"TV",section:"50-59inch",brand:"sansui"}} limit={0} skip={0} />
            <CategoriesCards title={"Samsung"} link={"/"} logic={{categories:"TV",section:"50-59inch",brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"Sony"} link={"/"} logic={{categories:"TV",section:"50-59inch",brand:"sony"}} limit={0} skip={0} />
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#010c53] bg-cover ">
            <span className="font-bold text-2xl text-white ">Size: 40inch-49inch</span>
            <CategoriesCards title={"LG"} link={"/"} logic={{categories:"TV",section:"40-49inch",brand:"LG"}} limit={0} skip={0} />
            <CategoriesCards title={"Sansui"} link={"/"} logic={{categories:"TV",section:"40-49inch",brand:"sansui"}} limit={0} skip={0} />
            <CategoriesCards title={"Samsung"} link={"/"} logic={{categories:"TV",section:"40-49inch",brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"Sony"} link={"/"} logic={{categories:"TV",section:"40-49inch",brand:"sony"}} limit={0} skip={0} />
         </div>

        <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#9185c9] ">
            <span className="font-bold text-2xl ">Size: 32inch-39inch</span>
            <CategoriesCards title={"LG"} link={"/"} logic={{categories:"TV",section:"32-39inch",brand:"LG"}} limit={0} skip={0} />
            <CategoriesCards title={"Sansui"} link={"/"} logic={{categories:"TV",section:"32-39inch",brand:"sansui"}} limit={0} skip={0} />
            <CategoriesCards title={"Samsung"} link={"/"} logic={{categories:"TV",section:"32-39inch",brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"Sony"} link={"/"} logic={{categories:"TV",section:"32-39inch",brand:"sony"}} limit={0} skip={0} />
         </div>
         
    </div>
  )
}

export default TV