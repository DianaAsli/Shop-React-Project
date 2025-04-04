import { useParams } from "react-router";
import { useComments } from "../../hooks/commentServices"
import CommentCard from "./CommentCard";

export default function CommentsList() {
    const { productId } = useParams();
    const  comments  = useComments(productId);
    console.log('comments', comments);
    
    return (
        <div>
            {comments.length === 0 ?
                (<p className="text-center text-gray-600 text-lg mt-6">No comments yet.</p>)
                : (comments.map(comment => {
                    return <CommentCard key={comment._id} comment={comment} />
                })
                )}
        </div>
    )
}
