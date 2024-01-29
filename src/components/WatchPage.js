import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from "react-router-dom";
import CommentContainer from './CommentContainer';
import Livechat from './Livechat';

const WatchPage = () => {
  const [params] = useSearchParams();
  const uid = params.get('v');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className='flex flex-col w-full'>
    <div className='flex w-full'>
    <div>
      <iframe className='px-8 py-8 rounded-5xl'
        width="1110"
        height="600"
        src={`https://www.youtube.com/embed/${uid}?si=37qKG2sZ7cP9VTxr&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div className='w-full'>
      <Livechat />
    </div>
    </div>
    <CommentContainer/>
    </div>
  );
};

export default WatchPage;
