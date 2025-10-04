import React,{useState} from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import Banner from '../../components/Banner';
import { ShopByBrand } from '../../components/ShopByBrand';
import CategoriesCards from '../../components/CategoriesCards';

const Tablet = () => {

    const [isMd, setIsMd] = useState(window.innerWidth >= 768); 

    const bannerImagesDesktop=[
          {image:"/images/banner/desktop/tablet1.avif"},
          {image:"/images/banner/desktop/tablet2.avif"},
          {image:"/images/banner/desktop/tablet4.avif"},
          {image:"/images/banner/desktop/tablet3.avif"},
        ]   

        const bannerImagesMobile=[
         {image:"/images/banner/mobile/tablet1.avif"},
          {image:"/images/banner/mobile/tablet2.avif"},
          {image:"/images/banner/mobile/tablet3.avif"},
          {image:"/images/banner/mobile/tablet4.avif"},
        ]  
    
        const companiesList=[
        {link:"/",image:"apple.avif"},
        {link:"/",image:"samsung.png"},
        {link:"/",image:"lenovo.avif"},
        {link:"/",image:"oneplus.png"},
        ]

  return (
    <div>
        {window.scrollTo({ top: 0, behavior: "smooth" })}
         <ScrollToTop/>
         <Banner data={isMd? bannerImagesDesktop:bannerImagesMobile}/>
         <ShopByBrand companies={companiesList} />

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#a28089] ">
            <span className="font-bold text-2xl ">Ipads</span>
            <CategoriesCards title={""} link={"/"} logic={{categories:"tablet",brand:"apple"}} limit={0} skip={0} />
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[url(/images/wallpaper/wp8.jpeg)] bg-cover ">
            <span className="font-bold text-2xl ">Samsung</span>
            <CategoriesCards title={""} link={"/"} logic={{categories:"tablet",brand:"samsung"}} limit={0} skip={0} />
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#4b3e42] ">
            <span className="font-bold text-2xl ">Oneplus</span>
            <CategoriesCards title={""} link={"/"} logic={{categories:"tablet",brand:"oneplus"}} limit={0} skip={0} />
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#af5959] ">
            <span className="font-bold text-2xl ">Lenovo</span>
            <CategoriesCards title={""} link={"/"} logic={{categories:"tablet",brand:"lenovo"}} limit={0} skip={0} />
         </div>
    </div>
  )
}

export default Tablet