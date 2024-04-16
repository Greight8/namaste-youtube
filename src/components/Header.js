import React from 'react'

const Header = () => {
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-sm'>
            <div className='flex col-span-1'>
                <img className='h-8' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="hamburger icon" />

                <img className='h-8 pl-[12px]' src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-dark-grey-png.png" alt="youtube logo" />
            </div>

            <div className='col-span-10'>
                <input className='border border-gray-800 w-1/2 ml-[130px] p-[7px] rounded-l-full' type="text" placeholder='search' />
                <button className='bg-gray-100 border border-gray-700 p-[7px] rounded-r-full'>search</button>
            </div>

            <div className='col-span-1'>
                <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user icon" />
            </div>
        </div>
    )
}

export default Header
