import React, { useContext, useState } from 'react'
import Rating from '../rating/Rating'
import { formatDate } from '../../utils/formatDate'
import { UserContext } from '../../context/UserContext'
import { useEdit } from '../../hooks/commentServices';

export default function CommentCard({ comment , setShowForm}) {
    const { _id } = useContext(UserContext);
    const isOwner = (_id === comment._ownerId);

    const {edit} = useEdit(comment._id);
    
    const handleEdit = () => {
        console.log('edit comment',comment);
        setShowForm(true);
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
    
}