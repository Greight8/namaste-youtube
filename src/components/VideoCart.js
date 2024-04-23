import React from 'react'

const VideoCart = ({ info }) => {
    // console.log("my info is", info)

    const { snippet, statistics } = info
    const { title, channelTitle, thumbnails } = snippet
    const { viewCount } = statistics

    return (
        <div className='m-2 p-2 shadow-lg w-[283px] cursor-pointer'>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="video img" />
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount / 1000}k views</li>
            </ul>
            {/* <p>{title}</p>
            <p>{channelTitle}</p>
            <p>{viewCount / 1000}k views</p> */}
        </div>
    )
}

// export const addVideoCart = (VideoCart)=>{
//     return(props) =>{
//         return (
//             <VideoCart {...props} />
//         )
//     }
// }

export default VideoCart
