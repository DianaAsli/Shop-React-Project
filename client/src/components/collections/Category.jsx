import { useParams } from "react-router"
import useProducts from "../../hooks/useProducts";
import { useEffect, useState } from "react";
import Title from "../UI/Title";
import ProductList from "../product/ProductList";
import SubcategoryFilter from "../filters/SubcategoryFilter";

const categoryFilter = {
    accessories: ['Watches', 'Sunglasses', 'Scrunchies', 'Hats', 'Bags'],
    default: ['Gold', 'Rose Gold', 'Silver', 'Pearls', 'Diamonds']
}


export default function Category() {
    const { category } = useParams();
    const products = useProducts();

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const filter = category === 'accessories' ? categoryFilter.accessories : categoryFilter.default;
    const filteredProductsByCategory = products.filter(product => product.category.toLowerCase() === category)

    useEffect(() => {
        setFilteredProducts(filteredProductsByCategory);
    }, [products])

    useEffect(() => {
        if (selectedFilters.length === 0) {
            setFilteredProducts(filteredProductsByCategory);
        } else {
            const filteredProductsBySubcategory = filteredProductsByCategory.filter(product => selectedFilters.some(filter => product.subcategory.includes(filter)));
            setFilteredProducts(filteredProductsBySubcategory);
        }

    }, [selectedFilters])

    const handleFilterChange = (filters) => {
        setSelectedFilters(filters);
    }

    console.log(selectedFilters);
    
    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {(filteredProducts.length > 0 || selectedFilters.length>0) ? <SubcategoryFilter onFilterChange={handleFilterChange} filters={filter} /> : null}
            <div className="flex-1">
                <div className=" flex justify-center text-base sm:text-2xl mb-4">
                    <Title text1={'All'} text2={`${category.toUpperCase()}`} />
                </div>
                <ProductList products={filteredProducts} />
            </div>
        </div>
    )
}
