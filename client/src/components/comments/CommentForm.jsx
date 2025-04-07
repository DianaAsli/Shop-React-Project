import { useEffect, useState } from "react";
import Rating from "../rating/Rating";
import { useParams } from "react-router";
import { useCreateComment, useEdit } from "../../hooks/commentServices";

export default function CommentForm({ onEdit, setOnEdit, setShowForm, setReload }) {
    const [rating, setRating] = useState(onEdit?.rating || 0);
    const [comment, setComment] = useState(onEdit?.comment || '');

    const { productId } = useParams();

    const { createComment } = useCreateComment();
    const { edit } = useEdit(onEdit?._id);

    useEffect(() => {
        if (onEdit) {
            setRating(onEdit.rating);
            setComment(onEdit.comment);
        }
    }, [onEdit])

    const handleCommentSubmit = async () => {
        if (comment.trim() === '' || rating === 0) {
            console.log('Empty inputs');
            return;
        }

        if (onEdit) {
            await edit(rating, comment, productId, onEdit._id);
            setOnEdit(null);
        } else {
            await createComment(rating, comment, productId);
        }
        setReload(true);

        setRating(0);
        setComment('');
        setShowForm(false);
    }

    return (
        <div className="m-auto w-3/4 mt-5 p-5 border border-gray-300 rounded-lg shadow-lg">
            <p className="text-xl font-semibold mb-4">Rate the product</p>

            <div className="mb-4">
                <Rating rating={rating} setRating={setRating} isEditable={true} />
            </div>

            <textarea
                placeholder="Write your comment here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            ></textarea>

            <div className="flex justify-between items-center">
                <button
                    onClick={() => {
                        setShowForm(false);
                        setOnEdit(null);
                    }
                    }
                    className="px-6 py-2 bg-gray-400 text-white text-sm sm:text-base rounded-full hover:bg-gray-500 transition cursor-pointer">
                    Cancel
                </button>

                <button
                    onClick={handleCommentSubmit}
                    className="px-6 py-2 bg-black text-white text-sm sm:text-base rounded-full hover:bg-gray-800 transition cursor-pointer">
                    {onEdit ? 'Edit comment' : 'Leave a comment'}
                </button>
            </div>
        </div>
    )
}
