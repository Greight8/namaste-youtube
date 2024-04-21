import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
    // 1) subscribing to our store to show/hide sidebar
    const mySidebar = useSelector((store) => {
        return store.sidebar.isSideBarOpen
    })

    // 2) we can also do early return to show/hide sidebar :- if we return null js will not even go to next line so sidebar will not be even rendered
    // if (!mySidebar) {
    //     return null;
    // }

    return (
        <>
            {mySidebar && <div className="shadow-lg w-[150px] pl-[10px]">
                <ul className="pt-[2px] cursor-pointer">
                    <li><Link to="/">Home</Link></li>
                    <li>Shorts</li>
                    <li>Playlist</li>
                    <li>Liked</li>
                </ul>

                <h1 className="font-bold pt-[25px] pb-[5px]">Subscriptions</h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>

                <h1 className="font-bold pt-[25px] pb-[5px]">Watch Later</h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>}
        </>
    )
}

export default SideBar
