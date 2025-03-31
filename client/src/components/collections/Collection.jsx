import earings from '../../assets/earings.jpg'
import accessoaries from '../../assets/accessoaries.jpg'
import bracelet from '../../assets/bracelet.jpg'
import necklaces from '../../assets/necklaces.jpg'
import rings from '../../assets/rings.jpg'
import CategoryCard from './CollectionCard'
import Title from '../Title'

const collections = [
    {
        name: 'EARINGS', path: '/collection/earings', img: earings
    }
    ,
    {
        name: 'NECKLACES', path: '/collection/necklaces', img: necklaces
    },
    {
        name: 'BRACELETS', path: '/collection/bracelets', img: bracelet
    },
    {
        name: 'RINGS', path: '/collection/rings', img: rings
    },
    {
        name: 'ACCESSORIES', path: '/collection/accessories', img: accessoaries
    }
]

export default function Collection() {
    return (
        <div className="my-10">
            <div className="text-center mb-20 text-3xl">
                <Title text1={'Explore'} text2={'Our Collections'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita hic a perferendis. Obcaecati aspernatur impedit omnis laboriosam odit praesentium assumenda minima alias. Deserunt consequatur ipsam nihil maiores error ducimus.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {collections.map(category => (
                    <CategoryCard key={category.name} name={category.name} img={category.img} path={category.path} />
                ))}
            </div>

        </div>
    )
}

