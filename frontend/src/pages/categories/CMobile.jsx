import React,{useState} from 'react'
import Banner from '../../components/Banner';
import { ShopByBrand } from '../../components/ShopByBrand';
import CategoriesCards from '../../components/CategoriesCards';

const CMobile = () => {

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
        {link:"/",image:"samsung.png"},
        {link:"/",image:"oppo.png"},
        {link:"/",image:"realme.png"},
        {link:"/",image:"mi.png"},
        {link:"/",image:"google.png"},
        {link:"/",image:"vivo.png"},
        {link:"/",image:"oneplus.png"},
        ]
    
        

  return (
    <div className='p-2'>
         {window.scrollTo({ top: 0, behavior: "smooth" })}
        <Banner data={isMd? bannerImagesDesktop:bannerImagesMobile}></Banner>
        <ShopByBrand companies={companiesList} />

        <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-gray-500 ">
            <span className="font-bold text-2xl ">Iphones</span>
            <CategoriesCards title={""} link={"/"} logic={{categories:"mobile",brand:"apple"}} limit={0} skip={0} />
         </div>

         <span className="font-extrabold text-2xl flex justify-center items-center w-full h-15">Shop By Price ️⬇️</span>

          <div className="w-full h-fit  p-2 my-2 rounded-2xl bg-[#85a4c9] ">
            <span className="font-bold text-2xl ">Below ₹20,000 Budget Phones</span>
            <CategoriesCards title={"Samsung"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$lte:20000},brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"Oppo"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$lte:20000},brand:"oppo"}} limit={0} skip={0} />
            <CategoriesCards title={"Realme"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$lte:20000},brand:"realme"}} limit={0} skip={0} />
            <CategoriesCards title={"Redmi"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$lte:20000},brand:"redmi"}} limit={0} skip={0} />
            <CategoriesCards title={"vivo"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$lte:20000},brand:"vivo"}} limit={0} skip={0} />
            <CategoriesCards title={"Oneplus"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$lte:20000},brand:"oneplus"}} limit={0} skip={0} />
         </div>


         <div className="w-full h-fit  p-4 my-4 md:my-14 rounded-2xl bg-[url('/images/wallpaper/wp3.jpg')] bg-cover ">
            <span className="font-bold text-2xl ">Mid Range Phones ₹20,000 - ₹40,000</span>
            <CategoriesCards title={"Samsung"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:20000 ,$lte:40000},brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"Google"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:20000 ,$lte:40000},brand:"google"}} limit={0} skip={0} />
            <CategoriesCards title={"Oppo"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:20000 ,$lte:40000},brand:"oppo"}} limit={0} skip={0} />
            <CategoriesCards title={"Realme"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:20000 ,$lte:40000},brand:"realme"}} limit={0} skip={0} />
            <CategoriesCards title={"Redmi"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:20000 ,$lte:40000},brand:"redmi"}} limit={0} skip={0} />
            <CategoriesCards title={"vivo"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:20000 ,$lte:40000},brand:"vivo"}} limit={0} skip={0} />
            <CategoriesCards title={"Oneplus"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:20000 ,$lte:40000},brand:"oneplus"}} limit={0} skip={0} />
         </div>


         <div className="w-full h-fit  p-4 my-4 md:my-14 rounded-2xl bg-[url('/images/wallpaper/wp1.jpg')] bg-cover ">
            <span className="font-bold text-2xl text-white ">Flagship Phones (Best Camera || Best Performance)</span>
            <CategoriesCards title={"Samsung"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:40000},brand:"samsung"}} limit={0} skip={0} />
            <CategoriesCards title={"Google"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:40000 },brand:"google"}} limit={0} skip={0} />
            <CategoriesCards title={"Oppo"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:40000 },brand:"oppo"}} limit={0} skip={0} />
            <CategoriesCards title={"Realme"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:40000 },brand:"realme"}} limit={0} skip={0} />
            <CategoriesCards title={"vivo"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:40000 },brand:"vivo"}} limit={0} skip={0} />
            <CategoriesCards title={"Oneplus"} link={"/"} logic={{categories:"mobile",cleanedPrice:{$gt:40000 },brand:"oneplus"}} limit={0} skip={0} />
         </div>


    </div>
  )
}

export default CMobile