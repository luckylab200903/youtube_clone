import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchquery,setsearchquery]=useState("")
  const [suggestion,setsuggestion]=useState([])
  const [showsuggestion,setshowsuggestion]=useState(false)
  const searchcache=useSelector((store)=>store.search)


  console.log(searchquery);
    const dispatch=useDispatch();
    useEffect(()=>{
      const timer=setTimeout(() => {getsearchsuggestion()}, 200);
      if(searchcache[searchquery])
      {
        setsuggestion(searchcache[searchquery])
      }
      else{
        getsearchsuggestion()
      }
      return ()=>{
        clearTimeout(timer)
      }
    },[searchquery])


    const getsearchsuggestion=async ()=>{
      const data=await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchquery)
      const json=await data.json();
     
      setsuggestion(json[1])
   
      dispatch(cacheResults(
        {
          [searchquery]:json[1]
        }
      ))
      console.log(suggestion);
    }
    const handletogglemenu=()=>
    {
        dispatch(toggleMenu())
    }
  return (
    
    <div className='grid grid-flow-col p-5 shadow-lg hover:cursor-pointer border-red-400 m-2'>
    <div className='flex col-span-1'>
      <img onClick={handletogglemenu} className='pl-4  h-8 w-12' alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAABLS0vPz8+Wlpb8/PxwcHDv7+/p6en19fUJCQnV1dU4ODhaWlqQkJDLy8u7u7ugoKC0tLTCwsJ+fn6FhYUXFxdlZWWsrKxra2sqKipISEimpqZUVFQ6OjoODg6KiooyMjJigk+OAAACd0lEQVR4nO3d7VLCMBCF4aAtFIEiVlBUQO7/JrUqg782KcnMzm7f5wrOGWjTjzQJAQAAAAAAAAAAAAAAAAD8m3fb1Z0dq203H9SvmU7smTbJ/epWO+yNPuu0grN37aQ3e5+lFJzvtHNm2CUcjfVZO2WWZfyP+qydMdNzrOBCO2G2RaThi3bAbC9ywZl2vgLk8+mrdrwCXsWGe+14BezFhm/a8Qp4Exs+aMcr4EFsqJ2uCLGh5Su2i53Y0O5F99Wd2NDqfdN/rdhwrR2vgHuxoYOTqXwqDeFDO2C2j0jD2vqYf47eIFo/Etexgtb/p7H/6I9KO2WGKqVgCI/aOW/2mFbw+z7Y4gPhyWSa9CzxT1MdtfMOdKzSH3lfSi7u7VgMrgcAAAAAAAAAAOyYd5vKjs3Azy1C/XTQfpc02OEp8VuEXnfWjnuTc5da0O5k9ug09l8r7ZwZDikFbb7hvpjGC1qf6S3P8v7WaCfMFpuusNUOmG0rF6y18xUgD4t2JwtdydOG7A6FV/KguNSOV8BRbHjSjlfASWyona6Ikf+G/o9D/+dS/+Oh/2sa/9elI7i38H9/OIJ7/BE8p7E8KCY+awthbfPSJv156Qieefecv7cAAAAAAAAAAACWOF8nqmmtvWBbtkNKGl2vbZ+8XpvdaUOJa+65Xzdxo50yyyZe0P36pf7XoLW9Pmsvtkar+7WgrR+FPflI9L8mu/919f3vjaCdrgixof1Taexkan2878n7zPjfK8j6LO+ePNPb/55d/vddG8HeeYansf+KfTIzhj0s/e9DOoK9ZA3vB9ymf4/gfU/nnvd9uQEAAAAAAAAAAAAAAADApi8vTlbv6n3FPwAAAABJRU5ErkJggg=="/>
      <a href="/"><img className="pl-8 h-8  w-68" alt="yt logo" src="https://www.gstatic.com/youtube/img/promos/growth/ec03daa4b3b08f9cbc02cc16ae8f1f2a95638039b7c6c5500a7ebe9d40b4d3af_640x48.png"/></a>
      </div>
      <div className=' col-span-10'>
        <div>
        <input
        className="px-5 w-[60%]  p-2 rounded-l-full  border border-gray-500" 
        type="text" 
        placeholder='Search'
        value= {searchquery}
        onChange={(e)=>setsearchquery(e.target.value)}
      onFocus={()=>setshowsuggestion(true)}
      onBlur={()=>setshowsuggestion(false)}
        />
        <button className='border border-gray-500 p-2 rounded-r-full'>🔍</button>
        {showsuggestion && <div className='fixed bg-white py-2 px-5 w-[30rem] rounded-lg shadow-lg border border-gray-100'>
          <ul>
            {suggestion.map((s)=><li key={s} className='py-2 px-5 hover:bg-gray-200'>🔍{s}</li>)}
            
          </ul>
        </div>}
        </div>
      </div>
      <div className='col-span-1'>
        <img className="h-12 -mt-4 pt-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5958mvxyOALrWelcizzxdX48KqChi9Vh2Sr_NETQ&s"/>
        </div>
    </div>
  )
}

export default Header
