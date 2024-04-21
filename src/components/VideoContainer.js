import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useYoutubeVideo from '../hooks/useYoutubeVideo'
import Shimmer from './Shimmer'
import VideoCart from './VideoCart'

const VideoContainer = () => {
    // 1) calling our custom hook to get youtube videos data
    useYoutubeVideo()

    // 2) subscribing to our youtubeVideo store :-
    const myYoutubeVideo = useSelector((store) => {
        return store.youtubeVideo.youtubeVideoData
    })

    // 3) doing early return if youtubeVideo store is empty
    // if (!myYoutubeVideo) {
    //     return
    // }

    return (
        <>
            {!myYoutubeVideo ? <Shimmer /> :
                <div className='flex flex-wrap justify-center cursor-pointer'>
                    {myYoutubeVideo.map((video) => {
                        return <Link to={"/watch?v=" + video.id} key={video.id}> <VideoCart info={video} /> </Link>

                    })}
                </div>
            }
        </>
    )
}

export default VideoContainer
