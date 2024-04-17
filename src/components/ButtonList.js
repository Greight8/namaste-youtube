import React from 'react'
import Button from './Button'

const ButtonList = () => {
    // 1) making an array to store all the names of button
    const nameList = ["All", "Mixes", "Geopolitics", "Thugesh", "Tanmay Bhatt", "Qamar Cheema", "Live", "Cricket", "News"]

    return (
        <div className='flex'>
            {nameList.map((name) => {
                return <Button key={name} name={name} />
            })}
        </div>
    )
}

export default ButtonList
