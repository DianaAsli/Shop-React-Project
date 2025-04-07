import React, { useContext, useState } from 'react'
import Rating from '../rating/Rating'
import { formatDate } from '../../utils/formatDate'
import { useComments } from '../../hooks/commentServices'
import { UserContext } from '../../context/UserContext'

export default function CommentCard({ comment }) {
    const { _id } = useContext(UserContext);

    const isOwner = (_id === comment._ownerId);

    const handleEdit = () => {
        console.log('edit');

    }

    const handleDelete = () => {
        console.log('delete');

    }

    return (
        <div className="mb-2 relative border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 bg-white">
        
            <div className="flex justify-between items-start">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <span className="font-semibold text-lg">{comment.username}</span>
                    <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                        Posted on: {formatDate(comment._createdOn)}
                    </span>
                </div>
    
                {isOwner && (
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleEdit(comment._id)}
                            className="cursor-pointer text-yellow-600 border border-yellow-400 px-2 py-1 rounded-md text-sm hover:bg-yellow-50 transition"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(comment._id)}
                            className="cursor-pointer text-red-600 border border-red-400 px-2 py-1 rounded-md text-sm hover:bg-red-50 transition"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
    
            
            <div className="mt-3">
                <Rating rating={comment.rating} isEditable={false} />
            </div>
    
            
            <p className="mt-3 text-gray-700 leading-relaxed">{comment.comment}</p>
        </div>
    );
    
    
    // return (
    //     <div className='flex flex-row'>
    //         <div className="flex flex-col space-y-4 border-b border-gray-300 pb-4">
    //             <div className="flex items-center gap-4">
    //                 <span className="font-semibold text-lg">{comment.username}</span>
    //                 <span className="text-sm text-gray-500">Posted on: {formatDate(comment._createdOn)}</span>
    //             </div>

    //             <Rating rating={comment.rating} isEditable={false} />

    //             <p className="text-gray-700">
    //                 {comment.comment}
    //             </p>

    //         </div>

    //         {isOwner && (<div className="flex gap-2">
    //             <button
    //                 onClick={() => handleEdit(comment._id)}
    //                 className="px-3 py-1 bg-yellow-400 text-white text-sm rounded hover:bg-yellow-500"
    //             >
    //                 Edit
    //             </button>
    //             <button
    //                 onClick={() => handleDelete(comment._id)}
    //                 className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
    //             >
    //                 Delete
    //             </button>
    //         </div>)}
    //     </div>



    // )
}