import React from 'react'
import CommentList from './CommentList'
import MyComments from './MyComments'

const CommentsContainer = () => {
    // our comments will be an array of objects
    const writtenComments = [
        {
            name: "akshay",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab velit dolor non impedit",
            replies: [
                {
                    name: "harry",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab velit dolor non impedit",
                    replies: [
                        {
                            name: "akshay",
                            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab velit dolor non",
                            replies: [
                                {
                                    name: "harry",
                                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab velit dolor non",
                                    replies: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            name: "ajay",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab velit dolor non impedit",
            replies: [
                {
                    name: "harry",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab velit dolor non impedit",
                    replies: [
                        {
                            name: "akshay",
                            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab velit dolor non",
                            replies: []
                        }
                    ]
                }
            ]
        },
    ]

    return (
        <>
            <h2 className='my-6 ml-3 font-bold text-2xl'>
                comments :
            </h2>

            <CommentList comments={writtenComments} />
            {/* {writtenComments.map((comments, index) => {
                return <div key={index}>
                    <MyComments data={comments} />
                    <div key={index}>
                        <MyComments data={comments.replies} />
                    </div>
                </div>
            })} */}
        </>
    )
}

export default CommentsContainer
