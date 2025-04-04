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

export const useComments = (productId) => {
    const {
        accessToken
    } = useContext(UserContext);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        const getAll = async () => {
            const comments = await requester('GET', baseUrl, null, accessToken);
            const filteredComments = comments.filter(comment => comment.productId === productId);
            setFiltered(filteredComments);
        }
        getAll();
    }, [productId, accessToken]);

    return filtered;
}