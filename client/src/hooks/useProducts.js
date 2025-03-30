import {
    useEffect,
    useState
} from "react"
import shopServices from "../api/shopServices"

const useProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    
    useEffect(() => {
        shopServices.getAll().then(result => setAllProducts(result))
    }, [])

    return allProducts;
}

export default useProducts;