import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';

const Banner = ({data}) => {
    const images={data}
    const [isMd, setIsMd] = useState(window.innerWidth >= 768);
    
    
    
  return (
    <div className='md:overflow-hidden md:h-[280px] flex justify-center '>
     <Swiper spaceBetween={20}  modules={[Autoplay,Navigation]} slidesPerView={1} loop autoplay={{ delay: 2000, disableOnInteraction: false}} navigation={isMd? true:false}>
      {
        images.data.map((e,index)=>{
            return  <SwiperSlide key={index}><img src={e.image} className='rounded-md'/></SwiperSlide>
         })
      }
     </Swiper>
    </div>
  )
}

export default Banner