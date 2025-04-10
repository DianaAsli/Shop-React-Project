import {
    use,
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

    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(3);

    const getAll = async () => {
        const query = encodeURIComponent(`productId="${productId}"`)

        const skip = (currentPage - 1) * commentsPerPage;
        const paginateComments = await requester('GET', `${baseUrl}?where=${query}&offset=${skip}&pageSize=${commentsPerPage}`, null,accessToken);
        setFiltered(paginateComments);

        if (paginateComments.length === 0 && currentPage > 1) {
            setCurrentPage(currentPage-1);
        }

        const filteredComments = await requester('GET', `${baseUrl}?where=${query}`, null, accessToken);
        setCommentsCount(filteredComments.length);

        if (filteredComments.length > 0) {
            const total = filteredComments.reduce((sum, com) => sum + com.rating, 0);
            const average = Math.round(total / (filteredComments.length));
            setAverageRating(average);
        } else {
            setAverageRating(0);
        }

    }

    useEffect(() => {
        getAll();
    }, [productId, currentPage]);

    return {
        filtered,
        averageRating,
        commentsCount,
        currentPage,
        setCurrentPage,
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

export const useDelete = () => {
    const {
        accessToken
    } = useContext(UserContext);

    const deleteComment = async (commentId) => {
        const result = await requester('DELETE', `${baseUrl}/${commentId}`, null, accessToken);
        return result;
    }

    return {
        deleteComment
    }
}