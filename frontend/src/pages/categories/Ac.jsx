import React,{useState} from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import Banner from '../../components/Banner';
import { ShopByBrand } from '../../components/ShopByBrand';
import CategoriesCards from '../../components/CategoriesCards';

const Ac = () => {

    const [isMd, setIsMd] = useState(window.innerWidth >= 768);    
              
                   const bannerImagesDesktop=[
                    {image:"/images/banner/desktop/ac1.avif"},
                    {image:"/images/banner/desktop/ac2.avif"},
                    {image:"/images/banner/desktop/ac3.avif"},
                  ]   
              
                    const bannerImagesMobile=[
                   {image:"/images/banner/mobile/ac1.avif"},
                    {image:"/images/banner/mobile/ac2.avif"},
                    {image:"/images/banner/mobile/ac3.avif"},
                  ]  
              
                  const companiesList=[
                    {link:"/",image:"bluestar.jpg"},
                  {link:"/",image:"daikin.jpg"},
                  {link:"/",image:"voltas.jpg"},
                   {link:"/",image:"lg.avif"},
                  ]

  return (
    <div>
        {window.scrollTo({ top: 0, behavior: "smooth" })}
         <ScrollToTop/>
          <Banner data={isMd? bannerImagesDesktop:bannerImagesMobile}></Banner>
        <ShopByBrand companies={companiesList} />

        <span className="font-extrabold text-2xl flex justify-center items-center w-full h-15">Shop By Capacity ️⬇️</span>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#a28089] ">
            <span className="font-bold text-2xl text-white ">Capacity: 2Ton and Above</span>
            <CategoriesCards title={"LG"} link={"/"} logic={{categories:"ac",section:"2t and above",brand:"lg"}} limit={0} skip={0} />
            <CategoriesCards title={"BlueStar"} link={"/"} logic={{categories:"ac",section:"2t and above",brand:"bluestar"}} limit={0} skip={0} />
            <CategoriesCards title={"Daikin"} link={"/"} logic={{categories:"ac",section:"2t and above",brand:"daikin"}} limit={0} skip={0} />
            <CategoriesCards title={"Voltas"} link={"/"} logic={{categories:"ac",section:"2t and above",brand:"voltas"}} limit={0} skip={0} />
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#164264] ">
            <span className="font-bold text-2xl text-white ">Capacity: 1.1Ton - 1.5Ton</span>
            <CategoriesCards title={"LG"} link={"/"} logic={{categories:"ac",section:"1.1-1.5t",brand:"lg"}} limit={0} skip={0} />
            <CategoriesCards title={"BlueStar"} link={"/"} logic={{categories:"ac",section:"1.1-1.5t",brand:"bluestar"}} limit={0} skip={0} />
            <CategoriesCards title={"Daikin"} link={"/"} logic={{categories:"ac",section:"1.1-1.5t",brand:"daikin"}} limit={0} skip={0} />
            <CategoriesCards title={"Voltas"} link={"/"} logic={{categories:"ac",section:"1.1-1.5t",brand:"voltas"}} limit={0} skip={0} />
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#5f6230] ">
            <span className="font-bold text-2xl text-white ">Capacity: 1Ton and Below</span>
            <CategoriesCards title={"LG"} link={"/"} logic={{categories:"ac",section:"1t and below",brand:"lg"}} limit={0} skip={0} />
            <CategoriesCards title={"BlueStar"} link={"/"} logic={{categories:"ac",section:"1t and below",brand:"bluestar"}} limit={0} skip={0} />
            <CategoriesCards title={"Daikin"} link={"/"} logic={{categories:"ac",section:"1t and below",brand:"daikin"}} limit={0} skip={0} />
            <CategoriesCards title={"Voltas"} link={"/"} logic={{categories:"ac",section:"1t and below",brand:"voltas"}} limit={0} skip={0} />
         </div>
    </div>
  )
}

export default Ac