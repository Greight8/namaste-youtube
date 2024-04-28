import React from 'react'
import MyComments from './MyComments'

const CommentList = ({ comments }) => {
    return (
        <>
            {comments.map((comment, index) => {
                return <div key={index}>
                    <MyComments data={comment} />
                    <CommentList comments={comment.replies} />
                </div>
            })}
        </>
    )
}

export default CommentList
