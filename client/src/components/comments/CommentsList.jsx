import { useParams } from "react-router";
import { useComments } from "../../hooks/commentServices"
import CommentCard from "./CommentCard";
import { useEffect } from "react";

export default function CommentsList({reload, setReload}) {
    const { productId } = useParams();
    const { filtered: comments, getAll } = useComments(productId);

    useEffect(()=>{
        if(reload){
            getAll();
            setReload(false);
        }
    },[reload, setReload, getAll]);

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
