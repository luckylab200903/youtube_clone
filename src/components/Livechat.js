import React, { useEffect } from 'react';
import Chatmessage from './Chatmessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateName} from "../utils/helper"
import {makeRandomMessages} from "../utils/helper"
const Livechat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(
                addMessage({
                    name: generateName(),
                    message: makeRandomMessages(30)
                })
            );
        }, 500);
        return () => clearInterval(intervalId);
    }, [dispatch]);

   

    return (
        <div className='w-full h-[520px] mt-10 border border-black bg-gray-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            {chatMessages.map((c, index) => (
                <Chatmessage key={index} name={c.name} message={c.message} />
            ))}
        </div>
    );
};

export default Livechat;
