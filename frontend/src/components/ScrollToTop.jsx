import React from 'react'

const ScrollToTop = () => {
  return (
    <div>
        <button className='bg-cyan-800 text-white px-4 py-2 fixed bottom-20 right-5 z-50 rounded-4xl'
        onClick={()=>{window.scrollTo({top:10,behavior:"smooth"})}}
        >
        ️⬆️top  </button>
    </div>
  )
}

export default ScrollToTop