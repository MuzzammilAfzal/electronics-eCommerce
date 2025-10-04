import React,{useState} from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import Banner from '../../components/Banner';
import { ShopByBrand } from '../../components/ShopByBrand';
import CategoriesCards from '../../components/CategoriesCards';

const Ref = () => {

     const [isMd, setIsMd] = useState(window.innerWidth >= 768);    
                  
                       const bannerImagesDesktop=[
                        {image:"/images/banner/desktop/ref1.avif"},
                        {image:"/images/banner/desktop/ref2.avif"},
                        {image:"/images/banner/desktop/ref3.avif"},
                      ]   
                  
                        const bannerImagesMobile=[
                       {image:"/images/banner/mobile/ref1.avif"},
                        {image:"/images/banner/mobile/ref2.avif"},
                        {image:"/images/banner/mobile/ref3.avif"},
                      ]  
                  
                      const companiesList=[
                        {link:"/brandStore?brand:samsung&categories:ref",image:"samsung.png"},
                        {link:"/brandStore?brand:LG&categories:ref",image:"lg.avif"},
                      {link:"/brandStore?brand:godrej&categories:ref",image:"godrej.png"},
                      {link:"/brandStore?brand:whirlpool&categories:ref",image:"whirlpool.png"},
                      ]


  return (
    <div>
        {window.scrollTo({ top: 0, behavior: "smooth" })}
         <ScrollToTop/>
          <Banner data={isMd? bannerImagesDesktop:bannerImagesMobile}></Banner>
        <ShopByBrand companies={companiesList} />

        <span className="font-extrabold text-2xl flex justify-center items-center w-full h-15">Single Door ️⬇️</span>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#a73453] ">
            <span className="font-bold text-2xl text-white ">Capacity: upto 300 Litres</span>
            <CategoriesCards title={"Godrej"} link={"/brandStore?brand:godrej&categories:ref"} logic={{categories:"ref",section:"singledoor",brand:"godrej"}} limit={0} skip={0} />
            <CategoriesCards title={"Samsung"} link={"/brandStore?brand:samsung&categories:ref"} logic={{categories:"ref",section:"singledoor",brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"LG"} link={"/brandStore?brand:LG&categories:ref"} logic={{categories:"ref",section:"singledoor",brand:"LG"}} limit={0} skip={0} />
            <CategoriesCards title={"Whirlpool"} link={"/brandStore?brand:whirlpool&categories:ref"} logic={{categories:"ref",section:"singledoor",brand:"whirlpool"}} limit={0} skip={0} />
         </div>

          <span className="font-extrabold text-2xl flex justify-center items-center w-full h-15">Double Door ️⬇️</span>

         <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#2a2439] ">
            <span className="font-bold text-2xl text-white ">Capacity: 200 Litres - 600 Litres</span>
            <CategoriesCards title={"Godrej"} link={"/brandStore?brand:godrej&categories:ref"} logic={{categories:"ref",section:"doubledoor",brand:"godrej"}} limit={0} skip={0} />
            <CategoriesCards title={"Samsung"} link={"/brandStore?brand:samsung&categories:ref"} logic={{categories:"ref",section:"doubledoor",brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"LG"} link={"/brandStore?brand:LG&categories:ref"} logic={{categories:"ref",section:"doubledoor",brand:"LG"}} limit={0} skip={0} />
            <CategoriesCards title={"Whirlpool"} link={"/brandStore?brand:whirlpool&categories:ref"} logic={{categories:"ref",section:"doubledoor",brand:"whirlpool"}} limit={0} skip={0} />
         </div>
    </div>
  )
}

export default Ref