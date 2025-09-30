import React from 'react'
import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import BrandDisplay from '../components/BrandDisplay'
import CategoriesCards from "../components/CategoriesCards"

const BrandStore = () => {

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

        const categories=[
      {title:"Iphones"},
    ]

    const brandDisplay=[ "banner-google","banner-iphone","banner-tab","banner-laptop"]  


  return (
    <div>
        <Banner data={isMd? bannerImagesDesktop:bannerImagesMobile}></Banner>
        <BrandDisplay images={brandDisplay} />
        <CategoriesCards/>
    </div>
  )
}

export default BrandStore