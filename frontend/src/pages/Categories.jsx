import React,{useState} from 'react'
import Banner from '../components/Banner';
import { ShopByBrand } from '../components/ShopByBrand';
import CategoriesCards from '../components/CategoriesCards';


const Categories = () => {

    const [isMd, setIsMd] = useState(window.innerWidth >= 768);    

     const bannerImagesDesktop=[
      {image:"/images/desktop/banner-iphone.jpeg"},
      {image:"/images/desktop/banner-laptop.jpeg"},
      {image:"/images/desktop/banner-google.jpeg"},
      {image:"/images/desktop/banner-tab.jpeg"},
    ]   

      const bannerImagesMobile=[
      {image:"/images/mobile/banner-iphone.jpeg"},
      {image:"/images/mobile/banner-laptop.jpeg"},
      {image:"/images/mobile/banner-google.jpeg"},
      {image:"/images/mobile/banner-tab.jpeg"},
    ]  

    const companiesList=[
        {title:"Apple",link:"/",image:"apple"}
    ]

    const categories=[
      {title:"Iphones"},
    ]

  return (
    <div>
        <Banner data={isMd? bannerImagesDesktop:bannerImagesMobile}></Banner>
        <ShopByBrand companies={companiesList} />
        <CategoriesCards title={"Premium"} link={"/"} logic={{ $nor: [ { brand: "apple" }, { brand: "samsung" } ],cleanedPrice:{$gt:50000},categories:"mobile" } } limit={20} />

    </div>
  )
}

export default Categories