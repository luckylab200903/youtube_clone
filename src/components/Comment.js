import React from 'react'

const Comment = ({data}) => {
    const {name,text,replies}=data

    
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-xl my-2'>
              <img className="h-12 -mt-4 pt-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5958mvxyOALrWelcizzxdX48KqChi9Vh2Sr_NETQ&s"/>
    <div className='px-5 '>
        <p>{name}</p>
        <p>{text}</p>
        <p></p>
    </div>
    </div>
  )
}

export default Comment
