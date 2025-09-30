import React from 'react'

const BrandDisplay = ({images}) => {
    console.log(images);
    
  return (
    <div className='p-2 md:p-10 bg-gray-300'>
        <div className='w-full my-2 md:my-6'>
            <img src={`images/desktop/${images[0]}.jpeg`} alt="" className='rounded-md md:rounded-2xl' />
        </div>
        <div className='w-full flex h-auto'>
            <div className='w-1/2 mr-2 h-fit'>
               <img src={`images/mobile/${images[1]}.jpeg`} alt="" className='rounded-md md:rounded-2xl'/>
            </div>
            <div className='w-1/2 ml-2 h-fit'>
               <img src={`images/mobile/${images[2]}.jpeg`} alt="" className='rounded-md md:rounded-2xl' />
            </div>
        </div>
        <div className='w-full my-2 md:my-6' >
           <img src={`images/desktop/${images[3]}.jpeg`} alt="" className='rounded-md md:rounded-2xl' />
        </div>
    </div>
  )
}

export default BrandDisplay