import { useParams } from "react-router"
import { useComments } from "../../hooks/commentServices";
import Rating from "./Rating";
import { useEffect } from "react";

export default function AverageRating({ reload, setReload }) {
    const { productId } = useParams();
    const { comments, averageRating, commentsCount, getAll } = useComments(productId);

    useEffect(() => {
        if (reload) {
            getAll();
            setReload(false);
        }

    }, [reload])

    return (
        <div className="flex items-center gap-2 mt-2">
            <Rating rating={averageRating} isEditable={false} />
            <p className="text-gray-700 text-sm pt-2">{`${commentsCount}`} comments</p>
        </div>
    )
}
