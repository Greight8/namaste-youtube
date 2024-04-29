import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { string_length } from '../utils/constants'
import { generateRandomName, generateRandomString } from '../utils/helper'
import ChatMessages from './ChatMessages'

const LiveChat = () => {
    const dispatch = useDispatch()

    const message = useSelector((store) => {
        return store.chat.message
    })


    useEffect(() => {
        const timer = setInterval(() => {
            // API polling
            console.log("calling live chat")
            dispatch(addMessage(
                {
                    name: generateRandomName(),
                    text: generateRandomString(string_length)
                }
            ))
        }, 2000);

        return (() => {
            clearInterval(timer);
        })
    }, [])

    return (
        <>
            <div className='w-full p-2 h-[450px] ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {message.map((myMsg, index) => {
                    return (
                        <ChatMessages key={index} name={myMsg.name} msg={myMsg.text} />
                    )
                })}
            </div>
        </>
    )
}

export default LiveChat
