import React from 'react'

const SideBar = () => {
    return (
        <div className="shadow-lg w-[150px] pl-[10px]">
            <ul className="pt-[2px]">
                <li>Home</li>
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
        </div>
    )
}

export default SideBar
