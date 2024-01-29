import React from 'react'

import Vediocontainer from './Vediocontainer'
import ButtonList from './ButtonList';


const Maincomponent = () => {
  return (
      <div className='col-span-10'>
        <ButtonList />
        <Vediocontainer />
      </div>
  );
}

export default Maincomponent;
