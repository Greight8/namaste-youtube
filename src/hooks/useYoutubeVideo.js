import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { youtube_video_api } from '../utils/constants'
import { addYoutubeVideo } from '../utils/youtubeVideoSlice';

const useYoutubeVideo = () => {
    // 1) calling dispatch to update our store for youtube videos
    const dispatch = useDispatch();

    // 2) subscribing to our store for memoization :-
    const myYoutubeVideo = useSelector((store) => {
        return store.youtubeVideo.youtubeVideoData
    })

    const youtubeVideo = async () => {
        const url = youtube_video_api
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        dispatch(addYoutubeVideo(data.items))
    }

    useEffect(() => {
        // for memoization
        if (!myYoutubeVideo) {
            youtubeVideo();
        }
    }, [])
}

export default useYoutubeVideo
