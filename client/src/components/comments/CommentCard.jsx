import React, { useState } from 'react'
import Rating from '../rating/Rating'

export default function CommentCard() {
    const [rating, setRating] = useState(0);
    // ot comment
    return (
        <div className="flex flex-col space-y-4 border-b border-gray-300 pb-4">
            <div className="flex items-center gap-4">
                <span className="font-semibold text-lg">John Doe</span>
                <span className="text-sm text-gray-500">Last modified: 2 days ago</span>
            </div>

           <Rating rating={4} isEditable={false}/>

            <p className="text-gray-700">
                This is a great product! The quality is amazing, and it exceeded my expectations. Highly recommend!
            </p>

        </div>
    )
}