import React from 'react'

const Chatmessage = ({name,messgage}) => {
  return (
    <div className='flex items-center'>
     <img className="h-12 -mt-4 pt-4 m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5958mvxyOALrWelcizzxdX48KqChi9Vh2Sr_NETQ&s"/>
    <span className='px-2 font-bold'>{name}</span>
    <span>{messgage}</span>
      
    </div>
  )
}

export default Chatmessage
