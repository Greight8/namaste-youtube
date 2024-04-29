import React from 'react'
import { user_img } from '../utils/constants'

const ChatMessages = ({ name, msg }) => {
    return (
        <div>
            <div className='flex'>
                <img className='h-8' src={user_img} alt="img" />

                <p className='px-2 font-bold'>{name}</p>
                <p>{msg}</p>
            </div>
        </div>
    )
}

export default ChatMessages
