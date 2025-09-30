import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div className='h-100 w-50% bg-gray-200 shadow-lg rounded-lg p-4  '>
         <span className='font-extrabold text-3xl text-center block mt-20  '>404- Page Not Found</span>
         <span className='font-extrabold text-center block mt-4'>The Page you are looking for might have been removed or is temporarily unavaliable</span>
         <Link to="/" className=' block text-center font-medium underline'>🡨 Go To HomePage</Link>
      </div>
    </div>
  )
}

export default NotFound