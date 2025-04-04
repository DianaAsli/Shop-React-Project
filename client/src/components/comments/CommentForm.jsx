import { useState } from "react";
import Rating from "../rating/Rating";

export default function CommentForm({ setShowForm }) {
    const [rating, setRating] = useState(0);
    return (
        <div className="m-auto w-3/4 mt-5 p-5 border border-gray-300 rounded-lg shadow-lg">
            <p className="text-xl font-semibold mb-4">Rate the product</p>

            <div className="mb-4">
                <Rating rating={rating} setRating={setRating} isEditable={true}/>
            </div>

            <textarea
                placeholder="Write your comment here..."
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            ></textarea>

            <div className="flex justify-between items-center">
                <button
                    onClick={() => setShowForm(false)}
                    className="px-6 py-2 bg-gray-400 text-white text-sm sm:text-base rounded-full hover:bg-gray-500 transition cursor-pointer">
                    Cancel
                </button>

                <button
                    // onClick={handleCommentSubmit}
                    className="px-6 py-2 bg-black text-white text-sm sm:text-base rounded-full hover:bg-gray-800 transition cursor-pointer">
                    Leave a comment
                </button>
            </div>
        </div>
    )
}
