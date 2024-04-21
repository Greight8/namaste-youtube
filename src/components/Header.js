import React from 'react'
import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Hamburger_Icon, user_img, youtube_logo } from '../utils/constants'
import { toggleSideBar } from '../utils/sidebarSlice'

const Header = () => {
    const dispatch = useDispatch()

    // 1) making func to show/hide sidebar
    const toggleSideBarHandler = () => {
        dispatch(toggleSideBar())
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-sm'>
            <div className='flex col-span-1'>
                <img className='h-8 cursor-pointer' src={Hamburger_Icon} alt="hamburger icon" onClick={toggleSideBarHandler} />

                <img className='h-8 pl-[12px] cursor-pointer' src={youtube_logo} alt="youtube logo" />
            </div>

            <div className='col-span-10'>
                <input className='border border-gray-800 w-1/2 ml-[130px] p-[7px] rounded-l-full' type="text" placeholder='search' />
                <button className='bg-gray-100 border border-gray-700 p-[7px] rounded-r-full'>search</button>
            </div>

            <div className='col-span-1'>
                <img className='h-8' src={user_img} alt="user icon" />
            </div>
        </div>
    )
}

export default Header
