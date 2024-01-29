import React from 'react';

const Button = ({name}) => {
//   const array = ["All", "Music", "React-router", "Mixes", "Software-engineering", "Games", "Lo-Fi", "English", "Standup", "AI"];
  return (
    <div>
        <button className='px-5  m-2 bg-gray-400 rounded-lg'>{name}</button>
    </div>
  );
};

export default Button;
