import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Hamburger_Icon, user_img, youtube_logo, youtube_sugesstion_api } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'
import { toggleSideBar } from '../utils/sidebarSlice'

const Header = () => {
    const dispatch = useDispatch()

    // 4) susbscribing to search slice :-
    const searchCache = useSelector((store) => {
        return store.search
    })
    // console.log("value of search store is", searchCache)

    // 3) to store sugesstions from our api :-
    const [sugesstion, setSugesstion] = useState([])

    // 3.1) to show/hide our segesstion on focous/blur
    const [showSugesstion, setShowSugesstion] = useState(false)

    // 2) to type inside input box
    const [searchTxt, setSearchTxt] = useState("")

    const handleChange = (e) => {
        setSearchTxt(e.target.value)
    }

    useEffect(() => {
        // 1) doing debouncing to improve app performance
        const timer = setTimeout(() => {
            // 1) writing cache logic here
            if (searchCache[searchTxt]) {
                setSugesstion(searchCache[searchTxt])
            }

            else {
                getSearchSugesstions();
            }
            // getSearchSugesstions();
        }, 200);

        return (() => {
            clearTimeout(timer);
        })
    }, [searchTxt])

    const getSearchSugesstions = async () => {
        // console.log(searchTxt)
        const url = youtube_sugesstion_api;
        const response = await fetch(url + searchTxt);
        const data = await response.json();
        // console.log(data[1])
        setSugesstion(data[1])

        // sending the searchtxt, sugesstion to searchSlice
        dispatch(cacheResults({ [searchTxt]: data[1] }))
    }

    // i -->
    // header renders 
    // useeffect called --> api call made
    // timer starts

    // p --> less than 200ms
    // Header component dies --> means useeffect is unmounted
    // old timer removed
    // header is rendeed again --> useeffect is called again
    // timer starts --> api call amde

    // 1) making func to show/hide sidebar
    const toggleSideBarHandler = () => {
        dispatch(toggleSideBar())
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg bg-gradient-to-b from-white'>
            <div div className='flex col-span-1' >
                <img className='h-8 cursor-pointer' src={Hamburger_Icon} alt="hamburger icon" onClick={toggleSideBarHandler} />

                <img className='h-8 pl-[12px] cursor-pointer' src={youtube_logo} alt="youtube logo" />
            </div >

            <div className='col-span-10'>
                <div>
                    <input className='border border-gray-800 w-1/2 ml-[130px] p-[7px] rounded-l-full' type="text" placeholder='search' value={searchTxt} onChange={handleChange} onFocus={() => { setShowSugesstion(true) }} onBlur={() => { setShowSugesstion(false) }} />

                    <button className='bg-gray-100 border border-gray-700 p-[7px] rounded-r-full'>search</button>
                </div>

                {showSugesstion && <div className='absolute bg-slate-50 py-2 px-5 w-[466px] mt-[1px] ml-[144px] rounded-md'>
                    {sugesstion.map((items) => {
                        return <ul key={items}>
                            <li className='hover:bg-gray-200'>{items}</li>
                        </ul>
                    })}
                </div>}
            </div >


            <div className='col-span-1'>
                <img className='h-8' src={user_img} alt="user icon" />
            </div>
        </div>
    )
}

export default Header
