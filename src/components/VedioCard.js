import React from 'react';

const VideoCard = ({ info }) => {

    if (!info) {
        return null; // Handle the case where info is undefined or null.
      }
  const { statistics,snippet } = info;
  const { channelTitle, title } = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg rounded-lg'>
      <div>
        <img className='rounded-xl w-full' alt="logo" src={snippet.thumbnails.high.url} />
      </div>
      <ul>
        <li className='text-lg font-bold'>{title}</li>
        <li className='font-bold p-2'>{channelTitle}</li>
        <li className='font-bold p-2'>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export const Advediocard=({info})=>{
  return(
  <div className='p-2 m-2 border border-red-900'>
    <VideoCard info={info}/>
  </div>)
}

export default VideoCard;
