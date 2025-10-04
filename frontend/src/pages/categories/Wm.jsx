import React,{useState} from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import Banner from '../../components/Banner';
import { ShopByBrand } from '../../components/ShopByBrand';
import CategoriesCards from '../../components/CategoriesCards';

const Wm = () => {

    const [isMd, setIsMd] = useState(window.innerWidth >= 768);    
          
               const bannerImagesDesktop=[
                {image:"/images/banner/desktop/wm1.avif"},
                {image:"/images/banner/desktop/wm2.avif"},
                {image:"/images/banner/desktop/wm3.avif"},
              ]   
          
                const bannerImagesMobile=[
               {image:"/images/banner/mobile/wm1.avif"},
                {image:"/images/banner/mobile/wm2.avif"},
                {image:"/images/banner/mobile/wm3.avif"},
              ]  
          
              const companiesList=[
                {link:"/brandStore?brand:LG&categories:wm",image:"lg.avif"},
              {link:"/brandStore?brand:samsung&categories:wm",image:"samsung.png"},
              {link:"/brandStore?brand:whirlpool&categories:wm",image:"whirlpool.png"},
              {link:"/brandStore?brand:voltas&categories:wm",image:"voltas.jpg"},
              ]


  return (
    <div>
        {window.scrollTo({ top: 0, behavior: "smooth" })}
         <ScrollToTop/>
          <Banner data={isMd? bannerImagesDesktop:bannerImagesMobile}></Banner>
        <ShopByBrand companies={companiesList} />

        <span className="font-extrabold text-2xl flex justify-center items-center w-full h-15">Budget Price ️⬇️</span>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#000000] ">
            <span className="font-bold text-2xl text-white ">Below ₹15000</span>
            <CategoriesCards title={"LG"} link={"/brandStore?brand:LG&categories:wm"} logic={{categories:"wm",cleanedPrice:{$lte:15000},brand:"LG"}} limit={0} skip={0} />
         </div>

        <span className="font-extrabold text-2xl flex justify-center items-center w-full h-15">Shop By Capacity ️⬇️</span>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#a28089] ">
            <span className="font-bold text-2xl text-white ">Capacity: 9.1KG - 10KG</span>
            <CategoriesCards title={"LG"} link={"/brandStore?brand:LG&categories:wm"} logic={{categories:"wm",section:"9.1-10kg",brand:"LG"}} limit={0} skip={0} />
            <CategoriesCards title={"Whirlpool"} link={"/brandStore?brand:whirlpool&categories:wm"} logic={{categories:"wm",section:"9.1-10kg",brand:"whirlpool"}} limit={0} skip={0} />
            <CategoriesCards title={"Samsung"} link={"/brandStore?brand:samsung&categories:wm"} logic={{categories:"wm",section:"9.1-10kg",brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"Voltas"} link={"/brandStore?brand:voltas&categories:wm"} logic={{categories:"wm",section:"9.1-10kg",brand:"voltas"}} limit={0} skip={0} />
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#af5959] ">
            <span className="font-bold text-2xl text-white ">Capacity: 8.1KG - 9KG</span>
            <CategoriesCards title={"LG"} link={"/brandStore?brand:LG&categories:wm"} logic={{categories:"wm",section:"8.1-9kg",brand:"LG"}} limit={0} skip={0} />
            <CategoriesCards title={"Whirlpool"} link={"/brandStore?brand:whirlpool&categories:wm"} logic={{categories:"wm",section:"8.1-9kg",brand:"whirlpool"}} limit={0} skip={0} />
            <CategoriesCards title={"Samsung"} link={"/brandStore?brand:samsung&categories:wm"} logic={{categories:"wm",section:"8.1-9kg",brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"Voltas"} link={"/brandStore?brand:voltas&categories:wm"} logic={{categories:"wm",section:"8.1-9kg",brand:"voltas"}} limit={0} skip={0} />
         </div>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-gray-700 ">
            <span className="font-bold text-2xl text-white ">Capacity: 7.1KG - 8KG</span>
            <CategoriesCards title={"LG"} link={"/brandStore?brand:LG&categories:wm"} logic={{categories:"wm",section:"7.1-8kg",brand:"LG"}} limit={0} skip={0} />
            <CategoriesCards title={"Whirlpool"} link={"/brandStore?brand:whirlpool&categories:wm"} logic={{categories:"wm",section:"7.1-8kg",brand:"whirlpool"}} limit={0} skip={0} />
            <CategoriesCards title={"Samsung"} link={"/brandStore?brand:samsung&categories:wm"} logic={{categories:"wm",section:"7.1-8kg",brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"Voltas"} link={"/brandStore?brand:voltas&categories:wm"} logic={{categories:"wm",section:"7.1-8kg",brand:"voltas"}} limit={0} skip={0} />
         </div>
    </div>
  )
}

export default Wm