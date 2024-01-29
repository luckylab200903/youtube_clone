import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const togglemenu=useSelector(store=>store.app.isMenuOpen)
    if(!togglemenu) return null
  return (
    <div className='pl-4 col-span-2 z-30'>
    <div className='font-bold border border-gray-500  py-5'>
    <Link to="/"><h1>Home</h1></Link>
    <h1>Shorts</h1>
    <h1>Subscription</h1>
    </div>
    <div className='border  border-gray-500'>
    <h1>You ➡️</h1>
   
    <ul className='py-5 font-bold'>
        <li>History</li>
        <li>Watch Later</li>
        <li>Downloads</li>
        <li>Liked Vedios</li>
    </ul>
    </div>
    <div className='border border-gray-500'>
      <h1>Subscription</h1>
  
      <ul className='py-5'>
        <li>Aaj Tak</li>
        <li>Code With Harry</li>
        <li>Code With Daviwd</li>
        <li>ABV_IIITM</li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar
