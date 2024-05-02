import React from 'react'
import { useState } from 'react'
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

    const [text, setText] = useState("")

    // 1) doing api polling and sending the data to store :- array of objects
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

    // 2) func handleChange
    const handleChange = (e) => {
        console.log(text)
        setText(e.target.value)
    }

    // 3) updating our chatSlice here :- with our own text
    const updateChatSlice = () => {
        dispatch(addMessage(
            {
                name: "akshay",
                text: text
            }
        ))
        setText("")
    }

    return (
        <>
            <div className='w-full p-2 h-[450px] ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {message.map((myMsg, index) => {
                    return (
                        <ChatMessages key={index} name={myMsg.name} msg={myMsg.text} />
                    )
                })}
            </div>

            <form className='mx-3 my-1' onSubmit={(e) => { return e.preventDefault() }}>
                <input className='border border-black w-[300px]' onChange={handleChange} value={text} type="text" />
                <button className='mx-4 p-2 border border-black' onClick={updateChatSlice}>enter</button>
            </form>
        </>
    )
}

export default LiveChat
