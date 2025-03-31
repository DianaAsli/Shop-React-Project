import {Link} from 'react-router'
import Title from '../UI/Title'
export default function CategoryCard({ name, path, img }) {
    return (
      <Link className='text-gray-700 cursor-pointer' to={path}>
        <div className="overflow-hidden">
          <img src={img} alt="" className="w-full h-60 object-cover hover:scale-110 transition ease-in-out rounded-md" />
        </div>
        <div className="text-center mt-2">
        <Title text2={name}/>
        </div>
      </Link>
    )
  }