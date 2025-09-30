import React,{useState,useEffect} from 'react'
import RenderLoading from "../components/renderLoading"
import { Link } from 'react-router-dom'

export const ShopByBrand = (companies) => {

    const companiesDisplay=companies.companies
    console.log(companiesDisplay);
    
    

  return (
     <div className=' w-full h-auto bg-gray-100 rounded-lg    '>
        <div className='w-full p-2'>
          <h2 className='text-lg font-bold pl-2 '>Shop By Brand</h2>
        </div>

        <div className='flex overflow-x-scroll'>
           {
            companiesDisplay.map((e,index)=>{
                return <div key={index} className='h-auto w-[14vh] md:w-[20vh] p-2 shrink-0 '>
                            <Link to={e.link} className='flex'>
                                <img src={`/images/logo/${e.image}`} alt="" className='rounded-full items-center' />
                            </Link>
                        </div>
            })
        }
        </div>
        
    </div>

  )
}
