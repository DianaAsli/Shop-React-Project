import { Link } from 'react-router'
import { ShopContext } from "../../context/ShopContext"

export default function ProductItem({ id, name, price, image }) {
    
    return (
        <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden w-full h-60">
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className='text-sm font-medium'>BGN {price}</p>
        </Link>
    )
}
