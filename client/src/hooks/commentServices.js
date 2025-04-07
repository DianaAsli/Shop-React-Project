import {
    useContext,
    useEffect,
    useState
} from "react";
import {
    UserContext
} from "../context/UserContext";
import {
    requester
} from "../utils/requester";

const baseUrl = `http://localhost:3030/data/comments`;

export const useComments = (productId) => {
    const {
        accessToken
    } = useContext(UserContext);
    const [filtered, setFiltered] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [commentsCount, setCommentsCount] = useState(0);

    const getAll = async () => {
        const comments = await requester('GET', baseUrl, null, accessToken);
        const filteredComments = comments.filter(comment => comment.productId === productId);
        setFiltered(filteredComments);
        setCommentsCount(filteredComments.length);

        if (filteredComments.length > 0) {
            const total = filteredComments.reduce((sum, com) => sum + com.rating, 0);
            const average = Math.round(total / (filteredComments.length));
            setAverageRating(average);
        }
    }

    useEffect(() => {
        getAll();
    }, [productId]);

    return {
        filtered,
        averageRating,
        commentsCount,
        getAll
    };
}

export const useCreateComment = () => {
    const {
        accessToken,
        username
    } = useContext(UserContext);

    const createComment = async (rating, comment, productId) => {
        const data = {
            username,
            productId,
            rating,
            comment,
        }
        const result = await requester('POST', `${baseUrl}`, data, accessToken);
        return result;
    }

    return {
        createComment
    }
}

export const useComment = (commentId) => {
    const [comment, setComment] = useState(null);

    const getOne = async () => {
        const result = await requester('GET', `${baseUrl}/${commentId}`)
        setComment(result)
    }

    useEffect(() => {
        getOne();
    }, [commentId]);

    return {
        comment
    }
}

export const useEdit = (commentId) => {
    const {
        accessToken,
        username
    } = useContext(UserContext);

    const edit = async (rating, comment, productId) => {
        const data = {
            username,
            productId,
            rating,
            comment
        }
        const result = await requester('PUT', `${baseUrl}/${commentId}`, data, accessToken);
        return result;
    }

    return {
        edit
    }
}