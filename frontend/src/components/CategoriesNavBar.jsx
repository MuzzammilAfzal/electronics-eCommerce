
import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesNavBar = () => {
  return (
    <div className='border-b border-black'>
       <ul>
         <li className='flex justify-evenly pt-2 bg-gray-200 overflow-x-scroll md:overflow-hidden gap-5'>
            <Link to={"/categories/mobile"} className='md:flex items-center font-bold text-center'><img src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/jJc56F0NF-menu_Mobiles.png" alt=""  
             />Mobiles</Link>
             <Link to={"/categories/laptop"} className='md:flex items-center font-bold text-center'><img src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/MO-msO1GU-menu_Laptop.png" alt=""
             />Laptops</Link>
             <Link to={"/categories/tablet"} className='md:flex items-center font-bold text-center'><img src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/WLtb0zEKO-menu_Tablets.png" alt=""
             />Tablets</Link>
             <Link to={"/categories/tv"} className='md:flex items-center font-bold text-center'><img src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/ro7KmfkN_-menu_Television.png" alt="" 
             />Television</Link>
             <Link to={"/categories/wm"} className='md:flex items-center font-bold text-center'><img src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/--pZ6pJ5n-menu_Washing-Machines.png" alt="" 
             />Washing Machines</Link>
             <Link to={"/categories/ac"} className='md:flex items-center font-bold justify-center'><img src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/6kAylQ0cV-menu_Accessories.png" alt=""
             />Air Conditioner</Link>
             <Link to={"/categories/ref"} className='md:flex items-center font-bold text-center'><img src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/mXaE3y_7l-menu_Kitchen-Appliances.png" alt=""
             />Refrigerators</Link>
         </li>
       </ul>
    </div>
  )
}

export default CategoriesNavBar