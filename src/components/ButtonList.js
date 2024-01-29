import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All", "Games", "Comedy", "Cricket", "Valentine", "Upcoming", "ISRO", "Upcoming","Hello","mom"]

  return (
    <div className='flex justify-center overflow-visible'>
      {list.map((item, index) => <Button key={index} name={item} />)}
    </div>
  )
}

export default ButtonList
