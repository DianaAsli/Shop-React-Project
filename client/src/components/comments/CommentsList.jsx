import { useParams } from "react-router";
import { useComments } from "../../hooks/commentServices"
import CommentCard from "./CommentCard";
import { useEffect } from "react";

export default function CommentsList({ setOnEdit, setShowForm, reload, setReload }) {
    const { productId } = useParams();
    const { filtered: comments, getAll, commentsCount, currentPage, setCurrentPage } = useComments(productId);

    useEffect(() => {
        if (reload) {
            getAll();
            setReload(false);
        }
    }, [reload, setReload, getAll]);

    const totalPages = Math.ceil(commentsCount / 3);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    return (
        <div>
            {comments.length === 0 ?
                (<p className="text-center text-gray-600 text-lg mt-6">No comments yet.</p>)
                : (comments.map(comment => {
                    return <CommentCard setReload={setReload} setOnEdit={setOnEdit} setShowForm={setShowForm} key={comment._id} comment={comment} />
                })
                )}
            {comments.length > 0 ? (<div className="pagination mt-6 flex justify-center">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded-full mr-2"
                >
                    &lt;
                </button>

                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded-full ml-2"
                >
                    &gt;
                </button>
            </div>) : null}


        </div>
    )
}
