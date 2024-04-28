import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeSidebar } from '../utils/sidebarSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const dispatch = useDispatch();

    // 2) useParams() hooks will be an empty object :- bec our path does not have "/watch/:" something like this
    // const params = useParams();
    // console.log(params);

    // 3) we are using query in our path :- "?v=" , so have to use useSearchParams() hook
    const [params] = useSearchParams();
    // console.log(params);
    // console.log(params.get("v"));

    const myVideoId = params.get("v")

    // 1) calling closeeSidebar() only once inside useeffect
    useEffect(() => {
        dispatch(closeSidebar());
    }, [])

    return (
        <div className='flex flex-col'>
            <div>
                <iframe width="900" height="450" src={"https://www.youtube.com/embed/" + myVideoId + "?si=-ggTK9y6mJ2bWmoJ"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div >

            <CommentsContainer />
        </div>
    )
}

export default WatchPage
