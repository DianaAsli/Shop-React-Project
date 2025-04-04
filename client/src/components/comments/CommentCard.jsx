import React, { useState } from 'react'
import Rating from '../rating/Rating'
import { formatDate } from '../../utils/formatDate'

export default function CommentCard({comment}) {
    
    return (
        <div className="flex flex-col space-y-4 border-b border-gray-300 pb-4">
            <div className="flex items-center gap-4">
                <span className="font-semibold text-lg">{comment.username}</span>
                <span className="text-sm text-gray-500">Posted on: {formatDate(comment._createdOn)}</span>
            </div>

           <Rating rating={comment.rating} isEditable={false}/>

            <p className="text-gray-700">
                {comment.comment}
            </p>

        </div>
    )
}