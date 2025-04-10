import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import { useProduct } from "../../hooks/shopServices";
import Comments from "../comments/Comments";
import AverageRating from "../rating/AverageRating";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = useProduct(productId);
  const [mainImage, setMainImage] = useState(null);
  const [reload, setReload] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    if (product && product.imageUrl) {
      setMainImage(product.imageUrl[0]);
    } 
  }, [product]);

  const handleClick = (img) => {
    setMainImage(img)
  }

  if (product === null) {
    return <p className="text-center text-gray-600 text-lg mt-6">This product is unavailable or does not exist.</p>
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[24%] w-full">
            {product.imageUrl && Array.isArray(product.imageUrl) && product.imageUrl.length > 0 ?
              (product.imageUrl.map((img, index) => (
            <img onClick={() => handleClick(img)} src={img} key={index} className="w-1/4 sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
            ))) : null
            }
          </div>

          <div className="w-full sm:w-[75%]">
            <img className="w-full h-auto" src={mainImage} alt="" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-3xl mt-2">{product.productName}</h1>
          <AverageRating reload={reload} setReload={setReload} />
          <p className="mt-5 text-xl font-medium">BGN {product.price}</p>
          <p className="mt-5 text-gray-600">{product.description}</p>
          <div className="mt-10">
            <Link to='/cart' className="mt-10 px-6 py-2 bg-black text-white text-sm sm:text-base rounded-full hover:bg-gray-800 transition cursor-pointer">Add to cart</Link>
          </div>
        </div>
      </div>

      <Comments reload={reload} setReload={setReload} />

    </div>
  )

}
