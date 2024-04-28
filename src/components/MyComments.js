import React from 'react'
import { user_img } from '../utils/constants'

const MyComments = ({ data }) => {
    const { name, text } = data

    return (
        <div className='flex shadow-xl bg-gray-200 p-2 m-4'>
            <img className='w-10 h-10' src={user_img} alt="user img" />

            <div className='mx-2'>
                <p>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default MyComments
